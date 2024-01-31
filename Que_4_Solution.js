// 4. Advanced Coding: Nested Object Transformation
// Write a function that takes an array of objects with nested objects and transforms each nested object’s key-value pairs into arrays of  [key, value] . Use  map  and  reduce.

// Function that takes an array of objects with nested objects and transforms each nested object’s key-value pairs into arrays of  [key, value]:
function transform_nested_object(arr) {
  return arr.map((obj) => {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
          return Object.entries(value);
        } else {
          return [key, value];
        }
      })
      .reduce((acc, curr) => acc.concat(curr), []);
  });
}

// Array of Object's with nested objects:
const person = [
  {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: 4,
  },
  {
    x: 1,
    obj: {
      y: 2,
      z: 3,
    },
  },
];
console.log(person);

const result = transform_nested_object(person);
console.log(result);


// ChatGPT Solution:

// function transformNestedObjects(arr) {
//   return arr.map(obj => {
//     return Object.entries(obj).map(([key, value]) => {
//       if (typeof value === 'object' && !Array.isArray(value)) {
//         // Transform nested object into array of [key, value]
//         return Object.entries(value);
//       } else {
//         // Keep the original key-value pair
//         return [[key, value]];
//       }
//     }).reduce((acc, curr) => acc.concat(curr), []); // Flatten the array of arrays
//   })
// }

// // Example usage:
// const inputArray = [
//   { a: 1, b: { c: 2, d: 3 }, e: 4 },
//   { x: { y: 5, z: 6 }, w: 7 }
// ];

// console.log(inputArray);
// const result = transformNestedObjects(inputArray);
// console.log(result);
