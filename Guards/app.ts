//your code needs ts guards whenever you want to allow only a specific type or a block of code and it can take many different forms such as instant self operators, typeof operator and even user defined type guards.
export { }
//1.typeof guard:-
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
} console.log(add(5, 5));

//2.instantof guard:-
class Banana {
    isTasty(): Boolean {
        return true;
    }
}

class Grapes {
    isJuicy(): Boolean {
        return true;
    }
}

type Fruit = Banana | Grapes;

function buyFruits(fruit: Fruit): number {
    let price = 0;
    if (fruit instanceof Banana) {
        price = fruit.isTasty() ? 5 : 10;
    }
    return price;
}
const banana = new Banana();
console.log(buyFruits(banana));

//3. in guard:-
class Apple {
    isTasty(): Boolean {
        return true;
    }
}

class Watermelon {
    isJuicy(): Boolean {
        return true;
    }
}

type Fruits = Apple | Watermelon;

function buyFruit(fruits: Fruits): number {
    let price = 0;

    if ("isTasty" in fruits) {
        price = fruits.isTasty() ? 50 : 30;
    }

    if ("isJuicy" in fruits) {
        price = fruits.isJuicy() ? 70 : 90;
    }
    return price;
}
const watermelon = new Watermelon();
console.log(buyFruit(watermelon));

//4.equality narrowing:-
function getValues(a: number | string, b: string) {
    if (a === b) {
        console.log(a);
    } else {
        console.log(a);
    }
}
getValues(40, "world");