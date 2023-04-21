function assertIsNumber(val) {
    if (typeof val !== "number") {
        throw new Error("Not a number");
    }
}
assertIsNumber(34);
