function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(1000 * 100000);
    }
}
const arr = [1, 2, 3, 4, 5, 6];
linearFunc(arr);

//O(1):-
function linearFunction(arr) {
    console.log(1000 * 100000);
}

//O(n):-
function linearFunct(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(1000 * 100000);
    }
}
const a = [1, 2, 3, 4];
linearFunct(a);

//O(n^2):-
function square(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; i < n; j++) {
            console.log(i, j);
        }
    }
}
square(4);

//O(n^3):-
function cube(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; i < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i, j, k);
            }
        }
    }
}
cube(8);

//binary search:-
let array = [];
let start = 0;
let end = array.length - 1;
let target = 100000;

for (let i = 1; i < 1024; i++) {
    array.push(i);
}
// console.log(array);

function binarySearch(array, start, end, target) {
    if (start > end) return false;
    let midIndex = Math.floor((start + end) / 2);
    if (array[midIndex] === target) return true;

    if (array[midIndex] > target) return binarySearch(array, start, midIndex - 1, target)
    else return binarySearch(array, midIndex + 1, end, target);
}
console.log(binarySearch(array, start, end, target));

//O(nlogn):-
function nLogFunc(n) {
    let y = n;
    while (n > 1) {
        n = Math.floor(n / 2);
        for (let i = 0; i <= y; i++) {
            console.log(i);
        }
    }
}