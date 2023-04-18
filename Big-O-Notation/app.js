function linearFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(1000 * 100000);
    }
}
const arr = [1, 2, 3, 4, 5, 6];
linearFunc(arr);

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
