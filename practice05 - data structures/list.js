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