var i, k, newNewArray;

function newArray(array, someF) {
    var newNewArray = [];
    for (i = 0; i < array.length; i++) {
        k = someF(array[i]);
        newNewArray.push(k);
    }
    return newNewArray;
}
