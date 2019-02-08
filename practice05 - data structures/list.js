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
    this.hadPrevious = hasPrevious;
    this.hasNext = hasNext;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;

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
