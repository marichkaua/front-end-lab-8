var e = parseInt(prompt("Pls enter the amount in EURO"), 10);
var d = parseInt(prompt("Pls enter the amount in USD"), 10);
var rE = 33.23;
var rD = 27.13;

var exchangeE = e * rE;
var exchangeD = d * rD;
var exchangeED = rE / rD;
console.log(e + " Euros are equal " + exchangeE.toFixed(2) + " UAN, " + d + " Dollars are equal " + exchangeD.toFixed(2) + " UAN, one Euro is equal " + exchangeED.toFixed(2) + " Dollars.");