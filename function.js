"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
console.log(addTwo(5));
// uppercase
function upperCase(value) {
    return value.toUpperCase();
}
var result = upperCase("shahbaz");
console.log(result);
// signup
function signUpUser(name, email, isPaid) {
}
signUpUser("shahbaz", "shahbaz@gmail.com", false);
// loggedin
function logedInUser(name, email, isLoggedIn) {
}
logedInUser("shahbaz", "shahbaz@gmail.com", true);
