var N, i, j, k, m;

N = parseInt(prompt("Pls enter a natural number from 1 to 20"), 10);

if (Number.isNaN(N) || (N % 1 !== 0) || (N <= 0 || N > 20)) {
    console.error("Incorrect!");
} else { 
    var str = "";
    for (i = 1; i <= N; i++) {
        for (j = 1; j <= N - i; j++) {
            str += "   ";
        }
        for (k = N - i + 1; k < N + i; k++) {
            str += "[~]";
        }
        for (m = N + i; m <= 2 * N - 1; m++) {
            str += "   ";
        }
        str += "\n";
    }
    console.log(str)
}
