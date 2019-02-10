//Bubble Sort
var numbers = [2,1,4,10,4,5,6,3,8];

function swap(array, index1, index2){
    array[index1] = [  array[index2], 
                       array[index2] = array[index1]  ][0];
}

function bubbleSort(numbers){
    for (var outer = numbers.length; outer >=2; outer--){

        for(var inner = 0; inner <= outer-1; inner++){
                if(numbers[inner] > numbers[inner+1]){
                    swap(numbers, inner, inner+1);
                }
        }
    }
}

console.log(numbers);
bubbleSort(numbers);
console.log(numbers);
