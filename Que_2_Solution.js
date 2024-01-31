// 2. Complex Debugging: Analyze Recursive Reduce
// The following recursive  reduce  function is intended to flatten an array of arrays into a single array, but it contains errors. Idenfy and fix them:

function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc = acc.concat(flattenArray(val));
    } 
    else {
      acc.push(val);
    }
    return acc;
  }, []);
}

const array = [[1,2,3], [4,5,6], [7,8,9]];
const result = flattenArray(array);
console.log(result);
