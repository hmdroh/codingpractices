// lists are used for adding items



function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.revious = previous;
    this.hasPrevious = hasPrevious;

    this.next = next;
    this.previous = previous;
    this.hasNext = hasNext;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;

    this.iteratePrintAll = iteratePrintAll;
    this.iteratePrintAllReverse = iteratePrintAllReverse;
}

function append(element){
    this.dataStore[this.listSize++] = element;
}

//removing element we need to find it first

function find(element){
    for(var i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return i;
        }
    }
// if we didn't return above then return -1
    return -1;
}

function remove(element){
    var pos = this.find(element);
    if(pos != -1){
        --this.listSize;
        this.dataStore.splice(pos,1);
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString(){
    return this.dataStore;
}

function insert(element, after){
    var insPos = this.find(after);
    if(insPos != -1){
        this.dataStore.splice(insPos+1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear(){
    delete this.dataStore;
    this.listSize = 0;
    this.dataStore = [];

}

function contains(element){
    for(var i =0; i< this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}


function previous(){
    return this.dataStore[--this.pos];
}

function next(){
    return this.dataStore[this.pos++];
}

function hasNext(){
    if(this.pos > this.listSize -1){
        return false;
    }else {
        return true;
    }
}

function hasPrevious(){
    if(this.pos <= 0){
        return false;
    } else {
        return true;
    }
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize -1;
}

function currPos(){
    return pos;
}


var names = new List();

names.append("Hamed");
names.append("Abdullah");
names.append("Qais");
names.append("Tamim");
names.append("Tawab");
names.append("Bilal");
names.append("Shoaib");


//now lets move to first element;

names.front();
console.log(names.getElement()); // hamed

console.log(names.next()); // hamed
 
console.log(names.next()); // abdullah

names.next();

names.previous();

console.log(names.previous()); // abdullah


// iterating through a list


function iteratePrintAll(){
    for (this.front(); this.hasNext();){
        console.log(this.next());
    }
}

names.iteratePrintAll();

function iteratePrintAllReverse(){
    for(this.end(); this.hasPrevious();){
        console.log(this.previous());
    }
}

console.log("---");


names.iteratePrintAllReverse();

var movies = '1. matrix revolution \n 2. troy \n 3. titanic \n 4. 300 \n 5. limitless  \n 6. 2012';

m = movies.split("\n");

console.log(m);


//lets trim the text

for (var i = 0; i< m.length; i++){
    m[i] = m[i].trim();
}


//

var movieList = new List();
for(var i =0; i< m.length; ++i){
    movieList.append(m[i]);
}

movieList.iteratePrintAll();

function displayList(list){
    for(list.front(); list.hasNext();){
        var listItem = list.next();
        if(listItem instanceof Customer){
            console.log(listItem.name + ", " + listItem.movie);
        }
        else{
            console.log(listItem);
        }
    }
}

var customers = new List();

function Customer(name, movie){
    this.name = name;
    this.movie = movie;

}

function checkOut(name, movie, movieList, customerList){
    if(movieList.contains(movie)){
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
    }
    else {
        console.log(movie + " is not available.");
    }
}


checkOut("TESTCUSTOMER", "1. matrix revolution", movieList, customers);
checkOut("TESTCUSTOMER", "passanger", movieList, customers); // not available

displayList(customers);