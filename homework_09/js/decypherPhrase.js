function decypherPhrase(rulesMap, inputString) {
    var swappedMap = {};

    for (var key in rulesMap) {
        swappedMap[rulesMap[key]] = key;
    }

    return cypherPhrase(swappedMap, inputString);
}
