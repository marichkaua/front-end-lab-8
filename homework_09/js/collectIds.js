function collectIds(arrayMovies) {
    var newArrayMovies = [];

    newArrayMovies = getFilteredArray(arrayMovies, function(el) {
        return el.rating >= 3.0;
    });

    newArrayMovies = getTransformedArray(newArrayMovies, function(el) {
        return el.id;
    });

    return newArrayMovies;
}
