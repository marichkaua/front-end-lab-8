var N = parseInt(prompt("Pls enter a natural number from 1 to 20"), 10);
if (isNaN(N) || (N % 1 !== 0) || (N <= 0 && N > 20)) 
{
    console.error("Incorrect!")
} else {
    function pyramidStar(N) {
        var str = "";
        for (var i = 1; i <= N; i++) {
            for (var j = 1; j <= N - i; j++) {
                str += "   ";
            }
            for (var k = N - i + 1; k < N + i; k++) {
                str += "[~]";
            }
            for (var m = N + i; m <= 2 * N - 1; m++) {
                str += "   ";
            }
            str += "\n";
        }
        return str;
    }
    console.log(pyramidStar(N))
}
