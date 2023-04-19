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
// square(4);

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
// cube(8);

//O(logn):-
//1.recursive:-
function logFunc(n) {
    if (n === 0) return "Done";
    n = Math.floor(n / 2);
    return logFunc(n);
}

//2.non-recursive:-
function log(n) {
    while (n > 1) {
        n = Math.floor(n / 2);
    }
    return n;
}
console.log(log(8));

//binary search:-
let array = [];
let start = 0;
let end = array.length - 1;
let target = 100;

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
console.log(nLogFunc(8));

//merge sort:-
function mergeSort(arra) {
    if (arra.length < 2) {
        return arra;
    }

    const middleIndex = Math.floor(arra.length / 2);
    const leftArr = arra.slice(0, middleIndex);
    const rightArr = arra.slice(middleIndex, arra.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

let arra = [12, 3, 16, 5, 1];
console.log(mergeSort(arra));

