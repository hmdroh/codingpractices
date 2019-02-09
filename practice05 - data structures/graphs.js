/// building graph


function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];

    for (var i = 0 ; i < this.vertices; i++){
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;

    this.depthFirstSearch = depthFirstSearch;
    this.marked = [];


    this.breadthFirstSearch = breadthFirstSearch;
}

function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph(){
    for(var i = 0; i < this.vertices; ++i){
        var putstr = i + " -> ";
        for (var j = 0; j < this.vertices; ++j){
            if(this.adj[i][j] != undefined) putstr += this.adj[i][j] + " ";

        }
        console.log(putstr);
    }
}

var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);

g.showGraph();

/// searching a graph

//depth-first search

console.log("---- example dfs -----")
function depthFirstSearch(v){
    this.marked[v] = true;
    if(this.adj[v] !=undefined){
        console.log("Visited vertex: " + v);
    }

    for(var i = 0 ; i < this.adj[v].length; i++){
        var w = this.adj[v][i];
        if(!this.marked[w]){
            this.depthFirstSearch(w);
        }
    }
}

g.depthFirstSearch(0);



//// another method is level bases search:
console.log("---- example bfs -----")

function breadthFirstSearch(s){
    var queue = [];
    this.marked[s] = true;
    queue.push(s);

    while (queue.length > 0){
        var v = queue.shift();
        if (v !== undefined){
            console.log("Visited vertex: " + v);
        }
        for (var i = 0; i < this.adj[v].length; i++){
            var w = this.adj[v][i];
            if(!this.marked[w]){
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

g.breadthFirstSearch(0);