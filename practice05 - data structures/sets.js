///sets 


function Set(){
 this.dataStore = [];
 this.add = add;
 this.remove = remove;
//  this.size = size;
 this.union = union;
 this.contains = contains;
//  this.intersect = intersect;
//  this.subset = subset;
//  this.difference = difference;
 this.show = show;
}

function add(data){
    //sets should have unique data
    if(this.dataStore.indexOf(data) < 0){
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove(data){
    var pos = this.dataStore.indexOf(data);
    if(pos > -1){
        this.dataStore.splice(pos,1);
        return true;
    }
    else {
        return false;
    }
}

function show(){
    return this.dataStore;
}


//example1:

var names = new Set();

names.add("Hamed");
names.add("Khalid");
names.add("Ajmal");
names.add("Tawab");
names.add("Arzoo");

if(names.add("Hamed")){
    console.log("Hamed added");
}else{
    console.log("Can't add hamed");
}

console.log(names.show());

var remove = "Ajmal";
if(names.remove(remove)){
    console.log(remove + " removed.")
}else {
    console.log(remove + " not removed.");
}

names.add("Tom Ford");

console.log(names.show());


var remove = "Tom";
if(names.remove(remove)){
    console.log(remove + " removed.")
}else {
    console.log(remove + " not removed.");
}


/// lets add more code
//helper function:
function contains(data){
    if(this.dataStore.indexOf(data) > -1 ){
        return true;
    }else { return false;}
}

function union(set){
    var tempSet = new Set();
    for (var i = 0 ; i <this.dataStore.length; i++){
        tempSet.add(this.dataStore[i]);
    }
    for(var i =0; i< set.dataStore.length; i++){
        if(!tempSet.contains(set.dataStore[i])){
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

// example2 : 
console.log("----example 2 ---")
var cis = new Set();
cis.add("Hikmat");
cis.add("Khan");
cis.add("Jeniffer");
cis.add("Reiad");

var dmp = new Set();

dmp.add("Ramin");
dmp.add("Abdulhai");
dmp.add("Naweed");

var it = new Set();

it = cis.union(dmp);

console.log(it.show());