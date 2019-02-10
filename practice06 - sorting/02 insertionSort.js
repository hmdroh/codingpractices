function CArray(numElements){
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    //for setting data randomly
    this.setData = setData;
    this.swap = swap;
    for(var i =0; i < numElements; i++){
        this.dataStore[i] = i;
    }

    this.insertionSort = insertionSort;
}


function setData(){
    for(var i = 0; i < this.numElements; i ++){
        this.dataStore[i] = Math.floor(Math.random()* (this.numElements+1));
    }
}

function clear(){
    for (var i = 0; i < this.dataStore.length; i++){
        this.dataStore[i] = 0;
    }
}

function insert(element){
    this.dataStore[this.pos++] = element;
}
function toString(){
    var retstr = "";
    for(var i = 0; i < this.dataStore.length; i++){
        retstr += this.dataStore[i] + " ";
        if(i > 0 && i % 10 == 0){
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2){
    // var temp = arr[index1];
    // arr[index1] = arr[index2];
    // arr[index2] = temp;
    //using es6:
    // [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

    arr[index1] = [ arr[index2], arr[index2] = arr[index1] ][0];

}

var numElements = 10;
var myNum = new CArray(numElements);
myNum.setData();
console.log(myNum.toString());
console.log("--- insertion sort");

function insertionSort(){
    var temp, inner;

    for(var outer = 1; outer <= this.dataStore.length-1; ++outer){

        temp = this.dataStore[outer];
        inner = outer;

        while(inner > 0 && (this.dataStore[inner-1] >=temp)){
            this.dataStore[inner] = this.dataStore[inner-1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
    console.log(this.toString());

}

myNum.insertionSort();




