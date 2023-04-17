export { }
let a = "Hello TS";
console.warn(a);
class App {
    test() {
        console.log("Test function working")
    }
}
let a1 = new App();
a1.test();

var num = 10;
console.log(num);

var n: number = 20;
console.log(n);

var bool: boolean = true;
console.log(bool);

//Array in typescript:-
let data: string[] = ["Jonny", "Mario", "John"];
data.push("Peter");
// data.push(100);
// data.push(true);
console.log(data);

//Object in typescript:-
interface usersTyped {
    name: string,
    age: number,
    address: any,
}

let users: usersTyped = {
    name: "bruce",
    age: 24,
    address: "USA",
}
// users.name = 200;
users.name = "peter";

// let users: any = {
//     name: "bruce",
//     age: 24,
//     address: "USA",
// }

console.log(users);

//Union type:-
let datas: string | number = "ajay";
datas = 40;
// datas = true;
console.log(datas);

//Interface in typescript:-
interface userObjType {
    name: string,
    age: number,
    getName: () => string,
}

let userObj: userObjType = {
    name: "ankita",
    age: 23,
    getName: function () {
        return "ankita roy";
    }
}
console.log(userObj);
console.log(userObj.getName());

//Functions in typescript:- we can also define type of parameters in a fn
function Cal(a: number, b?: number): number {
    return b ? a + b : a;
}
console.log(Cal(100, 50));

//Classes in typescript:-
class Login {
    // name = "john";
    name;
    // name: string = "john";
    constructor(name) {
        console.log("constructor called");
        this.name = name;
    }
    getName(): string {
        return (this.name);
    }
}
let x1 = new Login("peter");
console.log(x1.getName());

//Inheritance in typescript:-
class Parent {
    name: string;
    setName(name): void {
        this.name = name
    }
}

class Child extends Parent {
    // name = "jerry"
    getName(): string {
        return this.name;
    }
}
let c1 = new Child();
c1.setName("jerry")
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
import Slogin from "./Student";
import Tlogin from "./Teacher";

let teacher = new Tlogin();
console.log(teacher.data);

let student = new Slogin();
console.log(student.data);