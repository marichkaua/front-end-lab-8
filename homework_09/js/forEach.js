function forEach (array, callfunc) { 
    newArray = [];
    for (i = 0; i < array.length; i ++) {
    newArray.push(callfunc(array[i]));
    }
    return newArray;
}
