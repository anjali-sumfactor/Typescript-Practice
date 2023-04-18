"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Inheritance in typescript:-
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // name = "jerry"
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var c1 = new Child();
c1.setName("jerry");
console.log(c1.getName());
//Namespace in typescript:-
// /// <reference path="./Utils.ts" />
// namespace UserUtils {
//     export class Users extends Parent implements userType {
//         getName() {
//             return this.name;
//         }
//     }
// }
// let u1 = new UserUtils.Users();
// u1.setName("tony");
// console.log(u1.getName());
//module in typescript:-
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var teacher = new Teacher_1.default();
console.log(teacher.data);
var student = new Student_1.default();
console.log(student.data);
//generics in typescript:-
function usersData(data) {
    return data;
}
console.log(usersData({ name: "angel", age: 30 }).age);
//optional properties in typescript:-
var car = {
    type: "Toyota"
};
car.mileage = 2000;
console.log(car);
