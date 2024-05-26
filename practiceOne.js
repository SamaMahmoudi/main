/**Easy 

Array Destructuring and Spread
Given an array of numbers, use array destructuring and the spread operator to find the minimum and maximum values in the array. */

const numbers = [2, 3, 7, 9, 67, 45, 3, 9];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum, minimum);
