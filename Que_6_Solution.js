// 6. Advanced Debugging: Complex Array.from Usage
// The following code is intended to create an array of objects from an array-like object, but it doesn’t work as expected. Idenfy and fix the issues:

const arrayLike = { 0: "apple", 1: "banana", 2: "cherry", length: 3 };
const fruits = Array.from(arrayLike, (value, key) => ({ [key]: value }));
console.log(fruits);
