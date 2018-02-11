var a = parseInt(prompt("Pls enter Side A"), 10);
var b = parseInt(prompt("Pls enter Side B"), 10);
var c = parseInt(prompt("Pls enter Side C"), 10);

if ((a, b, c != '') ||
    (isNaN(a, b, c) === false)) {
    console.log("Incorrect data")
} else {
    function getTriangleType(a, b, c) {
        return (((a * a) + (b * b)) === (c * c) ||
                ((c * c) + (b * b)) === (a * a) ||
                ((c * c) + (a * a)) === (b * b)) && 'right' ||
            (a === b && b === c && c === a) && 'equilateral' ||
            (a === b || a === c || b === c) && 'isosceles' ||
            'scalene'
    }
    function AreaCalc(a, b, c) {
        perimeter = (a + b + c) / 2;
        areaVal1 = perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c));
        if (areaVal1 < 0) {
            areaVal1 = areaVal1 * (-1);
        }
        return Math.sqrt(areaVal1)
    }
    console.log("The type of a triangle is " + getTriangleType(a, b, c) + ". It's area: " + AreaCalc(a, b, c).toFixed(2) + ".");
}
