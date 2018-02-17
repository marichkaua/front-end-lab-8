var mN;

function getMin() {
    mN = [];
    for (var i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {
            mN.push(arguments[i]);
        }
    }
    return Math.min.apply(Math, mN);
}

