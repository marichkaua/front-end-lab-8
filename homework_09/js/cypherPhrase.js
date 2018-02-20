function cypherPhrase(objectA, stringA) {
    return getTransformedArray(stringA, function(letter) {
        if (objectA[letter]) {
            return objectA[letter];
        } else {
            return letter;
        }
    }).join("");
}
