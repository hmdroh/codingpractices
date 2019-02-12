var array = [1,4,15,12,1,18,10,16,15,3,8,18,19,15,7,8,6,7,1,7];

function swap(arr, index1, index2){
    arr[index1] = 
    [ arr[index2], arr[index2] = arr[index1] ][0];
}

function selectionSort(array){
    var min, temp;

    for(var outer = 0; outer <= array.length-2; outer++ ){
        min = outer;

        for (var inner = outer+1; inner <= array.length-1; inner++){
            if(array[inner] < array[min]){
                min = inner;
            }
        }
        swap(array, outer, min);
    }
}
console.log(array);
selectionSort(array);
console.log("\n--after------\n", array);