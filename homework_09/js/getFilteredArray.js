function getFilteredArray(arrayC, someF3) {
    var newArray3 = [];
    forEach(arrayC, function(el) {
        if (someF3(el)) {
            newArray3.push(el);
        }
    });
    return newArray3;
}
