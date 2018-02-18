var i, array;
array = [];

function forEach(array, callfunc) {
    for (i = 0; i < array.length; i++) {
        callfunc(array[i]);
    }
}
