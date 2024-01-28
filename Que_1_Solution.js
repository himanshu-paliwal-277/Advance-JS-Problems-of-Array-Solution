// 1. Advanced Coding: Implement  customFilter
// Create a function  customFilter  that mimics the behavior of the JavaScript Array.prototype.filter  method. It should not use the built-in  filter  method. The function should handle cases where the callback function returns truthy or falsy values, not just  true  or false.

// Original Filter Function:
const arr = [1, 2, 3, 4, 5];
const result = arr.filter((element) => element % 2 === 0);
console.log(result);


// Custom Filter Function:
function customFilter(arr, cb) {
  let new_arr = [];
  let new_arr_index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      new_arr[new_arr_index] = arr[i];
      new_arr_index++;
    }
  }
  return new_arr;
}

const array = [1, 2, 3, 4, 5];
const custom_Filter_Output = customFilter(
  array,
  (element) => element % 2 === 0
);
console.log(custom_Filter_Output);
