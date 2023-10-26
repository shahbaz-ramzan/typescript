"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function for add number  
function addTwo(num) {
    return num + 2;
    // return "shahbaz"
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
    if (isLoggedIn === void 0) { isLoggedIn = false; }
}
logedInUser("shahbaz", "shahbaz@gmail.com");
// function returnValue(myVal:number):boolean{
//    if(myVal>5){
//     return true
//    }
//    return "200 ok"
// }
// getValue
var getHello = function (s) {
    return s;
};
var r = getHello("Hello");
console.log(r);
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
