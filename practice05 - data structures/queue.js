// Queue data structure


function Queue(){

    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;

}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length-1];
}

function toString(){
    var retStr = "";
    for(var i =0; i<this.dataStore.length; i++){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty(){
    if(this.dataStore.length === 0){
        return true;
    }
    else {
        return false;
    }
}


/// these are functions example: 

var q = new Queue();
q.enqueue("Hamed");
q.enqueue("Abdullah");
q.enqueue("Tawab");
q.enqueue("Qais");

console.log(q.toString());

q.dequeue();
console.log(q.toString());

console.log("Front of queue: " + q.front());

console.log("Back of queue: " + q.back());


//example 2:
//now lets add senario partners at dance:

var d = `F Tahmina Nawabi\n
M Khalid Kakar\n
M Saifudin Ahadi\n
M Rashid Ahadi\n
F Freshta Qayomi\n
M Sadiq Kargar\n
F Sadiqa Banda\n
F Asia Naweed\n
F Tahira Latifi\n
M David Nora\n
M Walid Nandari\n
M Qadir Safi`;

// each dancer will be stored in Dancer object
function Dancer(name, sex){
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females){
    var names = d.split("\n");
    //trim it
    for(var i = 0; i < names.length; i++){
        names[i] = names[i].trim();
    }

    for(var i =0; i <names.length; ++i){
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];

        if (sex == "F"){
            females.enqueue(new Dancer(name,sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }

}


function dance(males, females){
    console.log("The dance partners are: \n");
    while(!females.empty() && !males.empty()){
        person = females.dequeue();
        var putstr = "Female dancer is: " + person.name;

        person = males.dequeue();
        console.log(putstr + " and the male dancer is: " + person.name) ;
    }
    console.log();
}

var maleDancers = new Queue();
var femaleDancers = new Queue();

getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if(!femaleDancers.empty()){
    console.log(femaleDancers.front().name + " is waiting to dance.");
}

if(!maleDancers.empty()){
    console.log(maleDancers.front().name + " is waiting to dance.");
}

/// sorting with queue: redix sorting

// distribute function:

function distribute (nums, queues, n, digit){

    for (var i =0; i< n; ++i){
        if(digit == 1){
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 
                10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums){
    var i = 0;
    for (var digit =0; digit <10; ++digit){
        while(!queues[digit].empty()){
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr){
    var str = "";
    for (var i =0; i < arr.length; i ++){
        str += arr[i] + " ";
    }
    return str;
}


var queues = [];
for (var i =0; i<10; ++i){
    queues[i] = new Queue();
}

var nums = [];

for(var i =0; i < 10; ++i){
    nums[i] = Math.floor(Math.floor(Math.random()* 101));
}

console.log("Before redix sort: ");
console.log(dispArray(nums));

distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10,10);
collect(queues, nums);

console.log("\n \n After redix sort: ");
console.log(dispArray(nums));