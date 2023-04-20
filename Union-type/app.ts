//Union types are used when a value can be more than a single type.
export function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('hello');