// 8. Predict Output: Interplay of Map, Filter, and Reduce
// Analyze and determine the output of the following complex sequence of  map ,  filter , and reduce :

const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .map((num) => num * 2)
  .filter((num) => num % 3 === 0)
  .reduce((acc, num) => acc + num, 0);
console.log(result);

// Process:
// Map function Output = [2, 4, 6, 8, 10, 12] 
// Map and filter function Output = [6, 12] 
// Map, filter and reduce function Output = acc = 18

// Output: 
// 18