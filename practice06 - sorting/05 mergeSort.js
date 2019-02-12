//Merge Sorting
var array = [1, 4, 15, 12, 1, 18, 10, 16, 15, 3, 8, 18, 19, 15, 7, 8, 6, 7, 1, 7];
function merge(left, right) {
    var result = [];
    var leftLen = left.length;
    var rightLen = right.length;
    while (leftLen > 0 || rightLen > 0) {
        if (leftLen > 0 && rightLen > 0) {
            //both left and right are still populated
            if (left[0] < right[0]) {
                result.push(left.shift());
                leftLen -= 1;
            }
            else if (right[0] <= left[0]) {
                result.push(right.shift());
                rightLen -= 1;
            }
        }
        //Only left array contains elements
        else if (leftLen > 0) {
            result.push(left.shift());
            leftLen -= 1;
        }
        else if (rightLen > 0) {
            result.push(right.shift());
            rightLen -= 1;
        }
    }
    return result;
}

function mergeSort(array) {
    var length = array.length;
    if (length <= 1) {
        return array;
    }
    var q = Math.floor(length / 2);
    var left = mergeSort(array.slice(0, q));
    var right = mergeSort(array.slice(q));
    return merge(left, right);
}
console.log(array);
console.log(mergeSort(array));