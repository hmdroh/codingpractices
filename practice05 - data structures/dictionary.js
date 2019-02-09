//dictionary class is an object but using array access notation. key value pairs:


function Dictionary(){
    this.dataStore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key,value){
    this.dataStore[key] = value;
}

function find(key){
    return this.dataStore[key];
}

// to delete 

function remove(key){
    delete this.dataStore[key];
}

function showAll(){
    for(var key in this.dataStore){
        console.log(key + " -> " + this.dataStore[key]);
    }
}

