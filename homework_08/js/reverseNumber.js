function reverseNum(n) {
    if (n < 0) {return -reverseNum(-n);}
    else {
    return n.toString().split("").reverse().join("");
    }
}
