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


//is palindrom ? 

// lets begin by making a function


function isPalindrom (word){
    var s = new Stack();
    for (var i = 0 ; i < word.length; ++i){
        s.push(word[i]);
    }
    var rword = "";
    while( s.length() > 0){
        rword += s.pop();
    }
    if (word == rword){
        return true;
    }else {
        return false;
    }
}


var word = "hello";
if(isPalindrom(word)){
    console.log( word + " is palindrome.");
}else { console.log( word + " is not palindrome."); }

var word = "racecar";
if(isPalindrom(word)){
    console.log( word + " is palindrome.");
}else { console.log( word + " is not palindrome."); }



// now lets use factorial for recurrsion of stacks:

function factorial(n){
    if( n === 0){
        return 1;
    }else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5));

///////////

function fact(n){
    var s = new Stack();
    while (n > 1 ){
        s.push(n--);
    }
    var product = 1;
    while(s.length() > 0){
        product *= s.pop();
    }
    return product;
}

// 5! = 1*2*3*4*5 = 120
console.log(fact(5)); // should display 120
