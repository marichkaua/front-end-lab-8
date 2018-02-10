var a = parseInt(prompt("Pls enter Side A"), 10);
var b = parseInt(prompt("Pls enter Side B"), 10);
var c = parseInt(prompt("Pls enter Side C"), 10);

function getTriangleType(a, b, c) {
    return ((((a * a) + (b * b)) === (c * c) || ((c * c) - (b * b)) === (a * a) || ((c * c) - (a * a)) === (b * b)) && 'right') || ((a === b && b === c) && 'equilateral') ||
        ((a === b || a === c || b === c) && 'isosceles') || 'scalene';
}

var perimeter = (a + b + c) / 2;
var area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));

console.log("The type of a triangle is " + getTriangleType() + ". It's area: " + area.toFixed(2) + ".");