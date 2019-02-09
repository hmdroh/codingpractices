//dictionary class is an object but using array access notation. key value pairs:


function Dictionary(){
    this.dataStore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
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

function count(){
    var n = 0;
    for (var key in this.dataStore){
        ++n;
    }
    return n;
}

function clear(){
    for(var key in this.dataStore){
        delete this.dataStore[key];
    }
}

/// example 1:

var pbook = new Dictionary();

pbook.add("Afghanistan", "0093");
pbook.add("USA", "001");
pbook.add("UAE", "00971");
pbook.add("Germany", "0049");

console.log("Afghanistan's code is: " + pbook.find("Afghanistan"));
pbook.remove("UAE");

console.log("Number of Entries: " + pbook.count());

pbook.showAll();
pbook.clear(); 
console.log("Number of entries: " + pbook.count());


/// adding and sorting to dictionary class:

