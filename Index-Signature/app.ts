const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty";
console.log(nameAgeMap);
// Index signatures can be used for objects without a defined list of properties