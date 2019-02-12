var array = [1,4,15,12,1,18,10,16,15,3,8,18,19,15,7,8,6,7,1,7];

function swap(arr, index1, index2){
    arr[index1] = 
    [ arr[index2], arr[index2] = arr[index1] ][0];
}

function shellSort(array){
    var gaps = [5, 3, 1];
    for(var g=0; g< gaps.length; g++){
        for(var i = gaps[g]; i<array.length; i++){
            var temp = array[i];
                for( var j = i; j >= gaps[g] &&
                    array[j - gaps[g]] > temp; j -=gaps[g]){
                        array[j] = array[j - gaps[g]];
                    }
                    array[j] = temp;
        }
    }
}

console.log(array);
selectionSort(array);
console.log("\n--after------\n", array);