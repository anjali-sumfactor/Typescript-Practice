"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = "Hello TS";
console.warn(a);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Test function working");
    };
    return App;
}());
var a1 = new App();
a1.test();
var num = 10;
console.log(num);
var n = 20;
console.log(n);
var bool = true;
console.log(bool);
//Array in typescript:-
var data = ["Jonny", "Mario", "John"];
data.push("Peter");
// data.push(100);
// data.push(true);
console.log(data);
var users = {
    name: "bruce",
    age: 24,
    address: "USA",
};
// users.name = 200;
users.name = "peter";
// let users: any = {
//     name: "bruce",
//     age: 24,
//     address: "USA",
// }
console.log(users);
//Union type:-
var datas = "ajay";
datas = 40;
// datas = true;
console.log(datas);
var userObj = {
    name: "ankita",
    age: 23,
};
console.log(userObj);
