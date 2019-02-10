var numbers = [100,2,3,411,51,23,53,13,46,22,11,54];

function swap(array, index1, index2,){
    //ES6 method for swapping
    [array[index1], array[index2]] = [array[index2], array[index3]];
}

function insertionSort(array){
    var temp, inner;

    for(var outer =1; outer <= array.length-1; outer++){
        temp = array[outer];
        inner = outer;

        while(inner > 0 && (array[inner-1] >= temp)){
            array[inner] = array[inner-1];
            --inner;
        }
        array[inner] = temp;
    }

}

insertionSort(numbers);
console.log(numbers);