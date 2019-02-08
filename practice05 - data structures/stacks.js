// stacks are used to put things on each other:


function Stack (){
    this.top = 0;
    this.push = push;
    //lets add data as empty
    this.dataStorage = [];
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element){
    this.dataStorage[this.top++] = element;
}

function pop(){
    return this.dataStorage[--this.top];
}

function peek(){
    return this.dataStorage[this.top-1];
}

function clear(){
    this.top = 0;
    this.dataStorage.length = 0;
}

function length(){
    return this.top;
}

var x = new Stack();;

x.push("Hamed");
x.push("Khalid");
x.push("2019");

console.log(x.pop()); // return 2019
console.log(x.peek()); // return Khalid

console.log(x.length()); // 2

x.clear(); 
console.log(x.peek()); // undefined

console.log(x.top); // 0