///sets 


function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.contains = contains;
    this.intersect = intersect;
    this.subset = subset;
    //  this.difference = difference;
    this.show = show;
}

function add(data) {
    //sets should have unique data
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
}

function show() {
    return this.dataStore;
}


//example1:

var names = new Set();

names.add("Hamed");
names.add("Khalid");
names.add("Ajmal");
names.add("Tawab");
names.add("Arzoo");

if (names.add("Hamed")) {
    console.log("Hamed added");
} else {
    console.log("Can't add hamed");
}

console.log(names.show());

var remove = "Ajmal";
if (names.remove(remove)) {
    console.log(remove + " removed.")
} else {
    console.log(remove + " not removed.");
}

names.add("Tom Ford");

console.log(names.show());


var remove = "Tom";
if (names.remove(remove)) {
    console.log(remove + " removed.")
} else {
    console.log(remove + " not removed.");
}


/// lets add more code
//helper function:
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else { return false; }
}

function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
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


////
console.log("----intersect example: ");
function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

var hr = new Set();
hr.add("Kimia");
hr.add("Mustafa");
hr.add("Dagarwal");

var teachers = new Set();
teachers.add("Mustafa");
teachers.add("Khan");
teachers.add("Najeeb");

var emptea = teachers.intersect(hr);

console.log(emptea.show());

////
console.log("----subset example: ");

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }
    else {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (!set.contains(this.dataStore[i])) {
                return false;
            }
        }

    }

    return true;
}

function size() {
    return this.dataStore.length;
}

var feeDep = new Set();
feeDep.add("Kimia");
feeDep.add("Mustafa");

if (feeDep.subset(hr)) {
    console.log("feeDep is subset of hr");
} else {
    console.log("feeDep is not subset of HR");
}