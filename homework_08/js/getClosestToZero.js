var mN;

function getClosestToZero() {
    mN = [];
    for (var i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) {

            mN.push(Math.abs(arguments[i]));
        }
    }

    return Math.min.apply(Math, mN);
}
