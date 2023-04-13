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
