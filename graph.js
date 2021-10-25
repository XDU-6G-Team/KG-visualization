// let graphData = [
//     {source: "6G slicing network", target: "TraN(6G)", rela: "contain", type: "resolved"},
//     {source: "6G slicing network", target: "CoreN(6G)", rela: "contain", type: "resolved"},
//     {source: "6G slicing network", target: "Service/User/VN/Slice", rela: "serve", type: "resolved"},
//     {source: "6G slicing network", target: "RAN(6G)", rela: "contain", type: "resolved"},
//     {source: "TraN(6G)", target: "Routers", rela: "contain", type: "resolved"},
//     {source: "TraN(6G)", target: "Switches", rela: "contain", type: "resolved"},
//     {source: "CoreN(6G)", target: "Nodes", rela: "contain", type: "resolved"},
//     {source: "CoreN(6G)", target: "Links", rela: "contain", type: "resolved"},
//     {source: "CoreN(6G)", target: "Required Wired Resource", rela: "satisfy", type: "resolved"},
//     {source: "Service/User/VN/Slice", target: "Required Wired Resource", rela: "contain", type: "resolved"},
//     {source: "Service/User/VN/Slice", target: "Required Wireless Resource", rela: "contain", type: "resolved"},
//     {source: "RAN(6G)", target: "Macro BS", rela: "contain", type: "resolved"},
//     {source: "RAN(6G)", target: "Wireless Equipment", rela: "contain", type: "resolved"},
//     {source: "RAN(6G)", target: "Required Wireless Resource", rela: "satisfy", type: "resolved"},
//     {source: "Required Wireless Resource", target: "RAN(6G)", rela: "mapping", type: "resolved"},
//     {source: "Required Wired Resource", target: "CoreN(6G)", rela: "mapping", type: "resolved"},

//     {source: "Nodes", target: "Node Resource", rela: "contain", type: "resolved"},
//     {source: "Nodes", target: "Functions", rela: "contain", type: "resolved"},
//     {source: "Nodes", target: "Node Attributes", rela: "contain", type: "resolved"},
//     {source: "Node Resource", target: "CPU", rela: "contain", type: "resolved"},
//     {source: "Node Resource", target: "Storage", rela: "contain", type: "resolved"},
//     {source: "Node Resource", target: "Capacity", rela: "contain", type: "resolved"},
//     {source: "Functions", target: "Funcl", rela: "contain", type: "resolved"},
//     {source: "Functions", target: "FuncN", rela: "contain", type: "resolved"},
//     {source: "Node Attributes", target: "Security", rela: "contain", type: "resolved"},
//     {source: "Node Attributes", target: "Time", rela: "contain", type: "resolved"},
//     {source: "Security", target: "Security Pro", rela: "KPI", type: "resolved"},
//     {source: "Time", target: "Deployment Time", rela: "KPI", type: "resolved"},
//     {source: "Time", target: "Processing Time", rela: "KPI", type: "resolved"},
//     {source: "Links", target: "Link Resource", rela: "contain", type: "resolved"},
//     {source: "Links", target: "Link Attributes", rela: "contain", type: "resolved"},
//     {source: "Link Resource", target: "Bandwidth", rela: "contain", type: "resolved"},
//     {source: "Link Attributes", target: "Propagation delay", rela: "contain", type: "resolved"},

//     {source: "Required Wireless Resource", target: "Spectrum Resource", rela: "contain", type: "resolved"},
//     {source: "Required Wireless Resource", target: "Wireless And Wired Resources Slice Type", rela: "combine", type: "resolved"},
//     {source: "Wireless And Wired Resources Slice Type", target: "Algorithm A", rela: "adopt", type: "resolved"},
//     {source: "Required Wired Resource", target: "Wireless And Wired Resources Slice Type", rela: "combine", type: "resolved"},
//     {source: "Required Wired Resource", target: "Ordinary Slice Type", rela: "", type: "resolved"},
//     {source: "Required Wired Resource", target: "Time Sensitive Priority Type", rela: "", type: "resolved"},
//     {source: "Required Wired Resource", target: "More Slice Element Type", rela: "", type: "resolved"},
//     {source: "Required Wired Resource", target: "Resource Priority Type", rela: "", type: "resolved"},
//     {source: "Ordinary Slice Type", target: "Algorithm A", rela: "adopt", type: "resolved"},
//     {source: "Time Sensitive Priority Type", target: "Algorithm D", rela: "adopt", type: "resolved"},
//     {source: "More Slice Element Type", target: "Algorithm C", rela: "adopt", type: "resolved"},
//     {source: "Resource Priority Type", target: "Algorithm B", rela: "adopt", type: "resolved"},
    
//     {source: "Metric", target: "NS Classification", rela: "contain", type: "resolved"},
//     {source: "Metric", target: "Evaluate NS algorithm", rela: "contain", type: "resolved"},
//     {source: "Metric", target: "Resource Allocation", rela: "contain", type: "resolved"},
//     {source: "NS Classification", target: "AveRes", rela: "contain", type: "resolved"},
//     {source: "NS Classification", target: "Total CoreN", rela: "contain", type: "resolved"},
//     {source: "NS Classification", target: "AveDel", rela: "contain", type: "resolved"},
//     {source: "Evaluate NS algorithm", target: "AccRatio", rela: "contain", type: "resolved"},
//     {source: "Evaluate NS algorithm", target: "ReCon", rela: "contain", type: "resolved"},
//     {source: "Evaluate NS algorithm", target: "ExeTime", rela: "contain", type: "resolved"},
//     {source: "Resource Allocation", target: "Value (common)", rela: "contain", type: "resolved"},
//     {source: "Resource Allocation", target: "DirectBlock", rela: "contain", type: "resolved"},
//     {source: "Resource Allocation", target: "ProJu", rela: "contain", type: "resolved"},
//     {source: "Resource Allocation", target: "ProNe", rela: "contain", type: "resolved"},
//     {source: "Resource Allocation", target: "TimeBlock", rela: "contain", type: "resolved"},

//     {source: "DirectBlock", target: "More Slice Element Type", rela: "introduced by", type: "resolved"},
//     {source: "ProJu", target: "Algorithm B", rela: "introduced by", type: "resolved"},
//     {source: "ProNe", target: "Algorithm B", rela: "introduced by", type: "resolved"},
//     {source: "TimeBlock", target: "Algorithm D", rela: "introduced by", type: "resolved"},
//     {source: "AveRes", target: "Resource Priority Type", rela: "introduced by", type: "resolved"},
//     {source: "Total CoreN", target: "More Slice Element Type", rela: "introduced by", type: "resolved"},
//     {source: "AveDel", target: "Time Sensitive Priority Type", rela: "introduced by", type: "resolved"},

//     {source: "Required Wired Resource", target: "Node Resource", rela: "mapping", type: "resolved"},
//     {source: "Required Wired Resource", target: "Link Resource", rela: "mapping", type: "resolved"}
// ];

// function getSubGraph(nodeName) {
//     let result = graphData.filter(function(relation) {
//         if (relation.source === nodeName) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//     return result;
// }

///////////////////////////////////////////////////////////////////////////////////////

// var driver = neo4j.driver(
//     'neo4j+s://f4691fe3.databases.neo4j.io',
//     neo4j.auth.basic('neo4j', '2xfX6T2NNdsRwJZsyPkj1Eff8_IpE7FHUH-XvYNB1b8')
// );

// function getSubGraph(nodeName) {
//     let queryCommand = 'match (s:Node {msg: "' + nodeName + '"})-[l]->(t) return l,t';
//     let result = [];
//     let session = driver.session();
//     session.run(queryCommand)
//         .subscribe({
//             onNext: record => {
//                 result.push({
//                     source: nodeName,
//                     target: record._fields[record._fieldLookup['t']].properties.msg,
//                     rela: record._fields[record._fieldLookup['l']].type,
//                     type: "resolved"
//                 })
//             },
//             onCompleted: () => {
//                 session.close()
//             },
//             onError: error => {
//                 console.log(error)
//             }
//         })
//     return result;
// }

/////////////////////////////////////////////////////////////////////////////////////////

const driver = neo4j.driver(
    'neo4j+s://f4691fe3.databases.neo4j.io',
    neo4j.auth.basic('neo4j', '2xfX6T2NNdsRwJZsyPkj1Eff8_IpE7FHUH-XvYNB1b8')
);
try {
    driver.verifyConnectivity()
    console.log('Driver created')
} catch (error) {
    console.log(`connectivity verification failed. ${error}`)
}

function getSubGraph(nodeName) {
    let queryCommand = 'match (s:Node {msg: "' + nodeName + '"})-[l]->(t) return l,t';
    let result = [];
    const session = driver.session()
    console.log(`${nodeName} quering ...`)
    session.run(queryCommand)
    .subscribe({
        onNext: record => {
            result.push({
                source: nodeName,
                target: record._fields[record._fieldLookup['t']].properties.msg,
                rela: record._fields[record._fieldLookup['l']].type,
                type: "resolved"
            })
        },
        onCompleted: () => {
            session.close()
        },
        onError: error => {
            console.log(error)
        }
    })
    console.log(`${nodeName} query end ...`)
    return result;
}