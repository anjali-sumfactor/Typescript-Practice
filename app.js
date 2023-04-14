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
    getName: function () {
        return "ankita roy";
    }
};
console.log(userObj);
console.log(userObj.getName());
//Functions in typescript:- we can also define type of parameters in a fn
function Cal(a, b) {
    return b ? a + b : a;
}
console.log(Cal(100, 50));
//Classes in typescript:-
var Login = /** @class */ (function () {
    // name: string = "john";
    function Login(name) {
        console.log("constructor called");
        this.name = name;
    }
    Login.prototype.getName = function () {
        return (this.name);
    };
    return Login;
}());
var x1 = new Login("peter");
console.log(x1.getName());
