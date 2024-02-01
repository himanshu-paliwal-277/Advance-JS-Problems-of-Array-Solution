// 5. Complex Predict Output: forEach with Objects
// Given the following code, what will be logged to the console?

const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key) => {
  obj[key] *= 2;
});
console.log(obj);

// Output:
// { a: 2, b: 4, c: 6 }