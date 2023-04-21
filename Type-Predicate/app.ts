function isString(x: unknown): x is string {
    return typeof x === "string";
}
console.log(isString("anjali"));