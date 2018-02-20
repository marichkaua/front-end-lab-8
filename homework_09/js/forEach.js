function forEach(arrayA, someF) {
    for (var i = 0; i < arrayA.length; i++) {
        if (typeof someF == "function") {
            someF(arrayA[i]);
        }
    }
}
