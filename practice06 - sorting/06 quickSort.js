var array = [1, 4, 15, 12, 1, 18, 10, 16, 15, 3, 8, 18, 19, 15, 7, 8, 6, 7, 1, 7];

function qSort(list) {
    if (list.length == 0) {
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}

console.log(array);
console.log(qSort(array));
