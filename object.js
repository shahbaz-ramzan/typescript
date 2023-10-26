"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "shahbaz",
    email: "shahbz@gmain.com",
    isActive: false
};
function createUser(_a) {
    // console.log(name)
    // console.log(isActive)
    var String = _a.name, boolean = _a.isActive;
}
var newuser = { name: "shahbaz", isActive: false };
createUser(newuser);
//function return object
function createCourse() {
    return { name: "shahbaz", price: 299 };
}
