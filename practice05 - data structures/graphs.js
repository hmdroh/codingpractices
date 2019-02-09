/// building graph


function Graph(v){
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];

    for (var i = 0 ; i < this.vertices; i++){
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;

    this.depthFirstSearch = depthFirstSearch;
    this.marked = [];
        for(var i = 0; i < this.vertices; ++i){
            this.marked[i] = false;
        }

    this.breadthFirstSearch = breadthFirstSearch;

    //shortest path related
    this.edgeTo = [];
    this.hasPathTo = hasPathTo;
    this.pathTo = pathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;

    this.showPath = showPath;
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
    if(this.adj[v] !== undefined){
        console.log("Visited vertex: " + v);
    }

    for(var i = 0 ; i < this.adj[v].length; i++){
        var w = this.adj[v][i];
        if(!this.marked[w]){
            this.depthFirstSearch(w);
        }
    }
}

//  g.depthFirstSearch(0);



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
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

// g.breadthFirstSearch(0);


//////////searching the shortest path:

//add this to class this.edgeTo = [];
/// note that the breadth first seach is the shortest:
console.log("---- example find short path -----")


function pathTo(source, v){
    if(!this.hasPathTo(v)){
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]){
        path.push(i);
    }

    path.push(source);
    return path;
}

function hasPathTo(v){
    return this.marked[v];
}

function showPath(paths){
    var putstr = "";
    while(paths.length > 0){
        if(paths.length > 1){
            putstr += paths.pop() + "-";
        }
        else {
            putstr += paths.pop();
        }
    }
    console.log( putstr);
}


var vertex = 4;
var source = 0;
var paths = g.pathTo(source, vertex);

// g.showPath(paths);

//////////////////////////////////

function topSort(){
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++){
        visited[i] = false;
    }
    for( var i = 0; i < this.vertices; i++){
        if(!visited[i]){
            this.topSortHelper(i, visited, stack);
        }
    }
    for(var i = 0; i < stack.length; i++){
        if(stack[i] !== undefined && stack[i] !==false){
            console.log(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack){
    visited[v] = true;
    for(var i = 0; i < this.adj[v]; i++){
        var w = this.adj[v][i];
        if(!visited[w]){
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}

x = new Graph(6);
x.addEdge(1,2);
x.addEdge(2,5);
x.addEdge(1,3);
x.addEdge(1,4);
x.addEdge(0,1);
x.vertexList = ["Business", "ACC101", "Accounting", "Finance", "Trading", "Forex"];
x.showGraph();
x.topSort();