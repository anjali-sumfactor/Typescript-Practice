//Union types are used when a value can be more than a single type.
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('hello');
