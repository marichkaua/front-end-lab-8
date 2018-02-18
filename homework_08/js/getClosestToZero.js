var i, mN, k, nn;

function getClosestToZero() {
    mN = [];
    for (i = 0; i < arguments.length; i++) {
        if (!Number.isNaN(arguments[i])) {
            mN.push(arguments[i]);
        }
    }
    nn = Math.abs(mN[0]);
    for (i = 0; i < mN.length - 1; i++) {
        if (mN[i] < 0) {
            if (nn > mN[i] * (-1)) {
                nn = mN[i] * (-1);
                k = i;
            }
        } else {
            if (nn > mN[i]) {
                nn = mN[i];
                k = i;
            }
        }
    }
    return mN[k];
}
