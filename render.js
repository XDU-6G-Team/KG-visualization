
class Node {
    constructor(name, x, y, level) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.level = level;
        this.subGraph = getSubGraph(name);
    }
}

class WindowManager {
    constructor() {
    }

    reset() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        d3.select("svg").remove();
        d3.select('#wordCloud').remove();
        this.svg = d3.select("body")
            .append("svg")
            .attr({
                "width": this.windowWidth,
                "height": this.windowHeight
            });
        this.force = d3.layout.force()
            .size([this.windowWidth, this.windowHeight])
            .linkDistance(120)
            .charge(-1500)
            .on("tick", this.tick);
        this.marker = this.svg.append("marker")
            .attr({
                "id": "resolved",
                "markerUnits": "userSpaceOnUse",
                "viewBox": "0 -5 10 10",
                "refX": 25,
                "refY": 0,
                "markerWidth": 10,
                "markerHeight": 10,
                "orient": "auto",
                "stroke-width": 2,
            })
            .append("path")
            .attr({
                "d": "M0,-5L10,0L0,5",
                "fill": "#000000"
            });
        
        this.forceNodes = this.force.nodes();
        this.forceLinks = this.force.links();
        this.svgNodesText = this.svg.append("g").attr({"id": "nodes_text"}).selectAll(".nodes_text");
        this.svgLinksText = this.svg.append("g").attr({"id": "links_text"}).selectAll(".links_text");
        this.svgLinks = this.svg.append("g").attr({"id": "links"}).selectAll(".links");
        this.svgNodes = this.svg.append("g").attr({"id": "nodes"}).selectAll(".nodes");
    }

    render() {
        this.svgLinks = this.svgLinks.data(this.forceLinks);
        this.svgLinks.exit().remove();
        this.svgLinks.enter().insert("path")
            .attr({
                "id": function(d, i) { return "link" + i; },
                "marker-end": "url(#resolved)"
            })
            .style({
                "stroke-width": 0.5
            });
        this.svgLinks.attr("d", function(d) { return "M " + d.source.x + " " + d.source.y + " L " + d.target.x + " " + d.target.y; })
            .style("stroke", function(d) {
                if (d.type == 'resolved') {
                    return "#B43232"
                } else {
                    return "#385723"
                }
            });

        this.svgLinksText = this.svgLinksText.data(this.forceLinks);
        this.svgLinksText.exit().remove();
        this.svgLinksText.enter().insert("text")
            .attr({
                "id": function(d, i) { return "link-text" + i; },
                "dx": 40,
                "dy": 0
            })
            .style("fill", "#BBBBBB")
            .append("textPath")
            .attr("xlink:href", function(d, i) { return "#link" + i; });
        this.svgLinksText.select("textPath").text(function(d) { return d.rela; });

        this.svgNodes = this.svgNodes.data(this.forceNodes);
        this.svgNodes.exit().remove();
        this.svgNodes.enter().insert("circle")
            .attr("r", function(d) {
                if (d.level == 0) {
                    return 18;
                } else {
                    return 14;
                }
            })
            .style("fill", "#F9EBF9")
            .style("stroke", function(d) {
                if (d.level == 0) {
                    return "#A254A2";
                } else {
                    return "#FFFFFF";
                }
            })
            .on("click", this.onNodeClick)
            .call(this.force.drag);

        this.svgNodesText = this.svgNodesText.data(this.forceNodes);
        this.svgNodesText.exit().remove();
        this.svgNodesText.enter().insert("text")
            .attr("dy", "-1.7em")
            .attr("text-anchor", "middle")
            .style("fill", "#A254A2")
            .append("tspan")
            .attr("x", 0)
            .attr("y", 2)
            .attr("font-size", 14)
            .on("click", this.onNodeClick);
        this.svgNodesText.select("tspan").text(function(d) {return d.name});
        this.force.start();
    }

    tick = () => {
        this.svgNodes.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
        this.svgNodesText.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
        this.svgLinks.attr("d", function(d) {
            return "M " + d.source.x + " " + d.source.y + " L " + d.target.x + " " + d.target.y;
        })
        this.svgLinksText.attr("transform", function(d) {
            // if (d.target.x < d.source.x) {
            //     let bbox = this.getBBox();
            //     let rx = bbox.x + bbox.width / 2, ry = bbox.y + bbox.height / 2;
            //     return "rotate(180 " + rx + " " + ry + ")";
            // } else {
            //     return "rotate(0)";
            // }
            return "rotate(0)";
        });
    }

    onNodeClick = (d) => {
        d.fixed = true;
        for (let i = 0; i < this.forceNodes.length; i++) {
            if (this.forceNodes[i].level != 0 && !this.forceNodes[i].fixed) {
                this.forceNodes.splice(i--, 1);
            }
        }
        for (let j = 0; j < this.forceLinks.length; j++) {
            if (!this.forceLinks[j].target.fixed) {
                this.forceLinks.splice(j--, 1);
            }
        }
        for (let relation of d.subGraph) {
            let addFlag = false;
            for (let node of this.forceNodes) {
                if (relation.target == node.name) {
                    let linkAddedFlag = this.forceLinks.filter((link) => {
                        if (link.source.name == d.name && link.target.name == node.name) {
                            return true;
                        }
                        return false;
                    }).length;
                    if (linkAddedFlag == 0) {
                        this.forceLinks.push({source: d, target: node, rela: relation.rela, type: relation.type});
                    }
                    addFlag = true;
                }
            }
            if (!addFlag) {
                let newNode = new Node(relation.target, d.x + Math.random() * 20 - 10, d.y + Math.random() * 20 - 10, d.level + 1);
                this.forceNodes.push(newNode)
                this.forceLinks.push({source: d, target: newNode, rela: relation.rela, type: relation.type});
            }
        }
        this.render();
        this.svgLinks.style("stroke-width", function(line) {
            if (line.source.name == d.name || line.target.name == d.name) {
                return 4;
            } else {
                return 0.5;
            }
        })
    }

    addNodes(nodes) {
        this.forceNodes.push.apply(this.forceNodes, nodes);
        this.render();
    }
}

let windowManager = new WindowManager()

const myTags = [
    "CF massive MIMO",
    "AP", "distributed antenna systems", "CoMP with joint transmission",
    "HAP-MIMO channel", "beyond 5G and future 6G communication systems", "DEN",
    'BSS', 'hardware', 'core network',
    'big data', 'reliability', 'energy efficiency',
    'detection', 'deployment', 'V2X',
    'SBA', 'node', 'coding',
    "Cloud VR", "SDN controllers", "technology",
    "Network slicing", "demand", "C-V2X", "network slicing", 
];
var tagCloud = TagCloud('.content', myTags,{
    radius: 400,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    direction: 135,
    keep: true
});
let rootEl = document.querySelector('.content');
rootEl.addEventListener('click', function clickEventHandler(e) {
    if (e.target.className === 'tagcloud--item') {
        windowManager.reset()
        windowManager.addNodes([
            new Node(e.target.innerText, windowManager.windowWidth/2, windowManager.windowHeight/2, 0)
        ])
    }
});