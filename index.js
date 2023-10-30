// function define
var sum = function (a, b) {
    return a + b;
};
// function call
console.log(sum(5, 10));
// string length
var myName = "shahbaz";
var stringLength = myName.length;
console.log(stringLength);
// convert to uppercase
var fullName = "shahbaz ramzan";
var uppercase = fullName.toUpperCase();
console.log(uppercase);
// convert to lowercase
var lowercase = uppercase.toLowerCase();
console.log(lowercase);
// bolean 
var isMyNameShahbaz = true;
var isDone = false;
var hasStarted = false;
// function check even or odd numbers
function getBoolean(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var result = getBoolean(5);
console.log("result: " + result);
// function is divisible by 4 and 8
function isDivisibleBy4And8(num) {
    if (num % 4 === 0 && num % 8 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var resultofDivisble = isDivisibleBy4And8(16);
console.log(resultofDivisble);
// bigint number
var a = BigInt("90071992547409925");
console.log(a);
console.log("type", typeof a);
