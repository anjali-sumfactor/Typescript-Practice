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
