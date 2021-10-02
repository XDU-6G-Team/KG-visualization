
function searchBarOnKeyDown(event) {
    if (event.which == 13) {
        searchButtonOnClick();
    }
}

function searchButtonOnClick() {
    let rootName = document.getElementById("searchBar").value;
    windowManager.reset();
    if (rootName === "") {
        windowManager.addNodes([
            new Node("6G slicing network", windowManager.windowWidth/2 + 10, windowManager.windowHeight/2, 0),
            new Node("Metric", windowManager.windowWidth/2 - 10, windowManager.windowHeight/2, 0)
        ]);
    } else {
        windowManager.addNodes([
            new Node(rootName, windowManager.windowWidth / 2, windowManager.windowHeight / 2, 0)
        ])
    }
}