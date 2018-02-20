function getTransformedArray(arrayA, someF) {
    var newArray = [];
    forEach(arrayA, function(el) {
        newArray.push(someF(el));
    });
    return newArray;
}

