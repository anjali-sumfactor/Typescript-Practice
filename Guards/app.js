//your code needs ts guards whenever you want to allow only a specific type or a block of code and it can take many different forms such as instant self operators, typeof operator and even user defined type guards.
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}
console.log(add(5, 5));
//2.instantof guard:-
var Banana = /** @class */ (function () {
    function Banana() {
    }
    Banana.prototype.isTasty = function () {
        return true;
    };
    return Banana;
}());
var Grapes = /** @class */ (function () {
    function Grapes() {
    }
    Grapes.prototype.isJuicy = function () {
        return true;
    };
    return Grapes;
}());
function buyFruits(fruit) {
    var price = 0;
    if (fruit instanceof Banana) {
        price = fruit.isTasty() ? 5 : 10;
    }
    return price;
}
var banana = new Banana();
console.log(buyFruits(banana));
//3. in guard:-
var Apple = /** @class */ (function () {
    function Apple() {
    }
    Apple.prototype.isTasty = function () {
        return true;
    };
    return Apple;
}());
var Watermelon = /** @class */ (function () {
    function Watermelon() {
    }
    Watermelon.prototype.isJuicy = function () {
        return true;
    };
    return Watermelon;
}());
function buyFruit(fruits) {
    var price = 0;
    if ("isTasty" in fruits) {
        price = fruits.isTasty() ? 50 : 30;
    }
    if ("isJuicy" in fruits) {
        price = fruits.isJuicy() ? 70 : 90;
    }
    return price;
}
var watermelon = new Watermelon();
console.log(buyFruit(watermelon));
//4.equality narrowing:-
function getValues(a, b) {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(a);
    }
}
getValues(40, "world");
