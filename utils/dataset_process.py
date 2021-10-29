import numpy as np
import pandas as pd
import unicodedata
import unidecode

def process_data(in_path, out_csvpath, out_jsonpath):
    df = pd.read_csv(in_path, encoding='utf-8')
    df.columns = ['source', 'target', 'rela']
    df = df.applymap(lambda s: unicodedata.normalize('NFKD', unidecode.unidecode(str(s).strip())))

    all_nodes = pd.concat([df['source'], df['target']]).unique()
    nodes_num = len(all_nodes)
    forward_table = pd.DataFrame(np.zeros([nodes_num, nodes_num], dtype=np.int8), all_nodes, all_nodes)
    forward_table.sort_index(axis='index', inplace=True)
    forward_table.sort_index(axis='columns', inplace=True)

    for index, row in df.iterrows():
        forward_table.loc[row['source'], row['target']] = 1

    for index, row in forward_table.iterrows():
        for item_name, item in row.iteritems():
            if row.name != item_name:
                if item != 1:
                    if str(row.name).lower() + " " in str(item_name).lower() or " " + str(row.name).lower() in str(item_name).lower():
                        df = df.append(
                            pd.DataFrame({'source': [row.name], 'target': [item_name], 'rela': ['close_related_to']}), 
                            ignore_index=True,
                        )
    df.insert(3, 'type', 'resolved')

    print(df.groupby(['source']).size().sort_values().tail(100).head(30))

    df.to_csv(out_csvpath, index=0, encoding='utf-8')
    df.to_json(out_jsonpath, orient='records')

if __name__ == '__main__':
    process_data('./relation2.csv', './re.csv', './re.json')