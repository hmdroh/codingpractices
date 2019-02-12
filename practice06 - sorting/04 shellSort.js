function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    //for setting data randomly
    this.setData = setData;
    this.swap = swap;
    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }

    this.shellSort = shellSort;
    this.shellSort2 = shellSort2;

    this.gaps = [1, 5, 10];

}

function setGaps(arr) {
    this.gaps = arr;
}



function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 100000));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    // var temp = arr[index1];
    // arr[index1] = arr[index2];
    // arr[index2] = temp;
    //using es6:
    // [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

    arr[index1] = [arr[index2], arr[index2] = arr[index1]][0];

}

var numElements = 10;
var myNum = new CArray(numElements);
myNum.setData();
console.log(myNum.toString());
console.log("--- shell sort");

function shellSort() {
    for (var g = 0; g < this.gaps.length; g++) {
        for (var i = this.gaps[g]; i < this.dataStore.length; i++) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] &&
                this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];

            }
            this.dataStore[j] = temp;
        }

    }
}

myNum.shellSort2();




function shellSort2() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h];
                j = h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
}

console.log(myNum.toString());
