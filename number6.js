/**
 * . Here, you need to write a function that takes an array of strings
and returns an object where the keys are the unique strings from the
array, and the values are the number of times each string appears in
the array. You can use `reduce` to build the frequency object.
 */
const participant = ["sama", "saeed", "sama", "ali", "pegah", "ali", "zahra"];
//let repeats = participant.reduce((x, y) => {
// console.log(x);
//});
let unique = participant.filter(checkUnique);
function checkUnique(value, index, array) {
  //console.log(index, array, value);
  const onUnique = array.indexOf(value) === index;
  return !onUnique;
}
console.log(unique);

//function onlyUnique(value, index, array) {
//return array.indexOf(value) === index;
/*var chars = ["a", "a", "a", "b", "b", "c", "a"];

var repeats = chars.reduce((acc, item) => {
  if (!(item in acc)) {
    acc[item] = 0;
  }
  acc[item]++;
  console.log(acc);
  return acc;
}, {});

//console.log(repeats); // { a: 4, b: 2, c: 1 }*/
