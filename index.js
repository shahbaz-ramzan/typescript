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
var result = getBoolean(6);
console.log("result: " + result);
