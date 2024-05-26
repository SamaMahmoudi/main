"use strict";

/**
 * Easy peasy :
Finding mutual friends
Question: You are given two arrays representing two people's friend
lists on a social media platform. Write a function
mutualFriends(friends1, friends2) that takes in these two arrays and
returns a new array containing the names of their mutual friends
(i.e., people who appear in both friend lists).
 */
const samasFriends = ["sara", "zahra", "ata", "melika", "pegah"];
const saeedFriends = ["omid", "mehdi", "ata", "arman", "pegah"];
const mutualFriends = samasFriends.filter(
  (item, index) => saeedFriends.includes(item)
);
const samaANAsaeed = mutualFriends.toString();
console.log(samaANAsaeed);

////////////
function paginateResults(results, pageSize, pageNum) {}

///////////////
/**
 * Easy
Extracting a specific property from an array of objects
Question: You have an array of person objects, each with name and age
properties. Write a function getNames(persons) that takes the array of
person objects and returns a new array containing only the names.
const persons = [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30
}, { name: 'Charlie', age: 35 } ];
 */
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const names = persons.map((person) => persons.name);
console.log(names);

///true 
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const names = persons.map((person) => {
   console.log(person.name);
   return person.name }
);

console.log(persons[0].name)

/////
var i = 0;
let x = [];
while (i < 10) {
  if (i % 2 == 0) {
    console.log("zoj");
  } else {
    console.log("fard");
  }

  if (i % 2 !== 0) {
    x.push(i);
    i++;
  }
}
/////////a little hard
Hint: Consider using Array.prototype.slice() to extract a subset of
the array based on the page size and current page number.
const allResults = ['item1', 'item2', 'item3', 'item4', 'item5',
'item6', 'item7', 'item8', 'item9', 'item10']; const pageSize = 3;
const currentPage = 2;


const allResults = ['item1', 'item2', 'item3', 'item4', 'item5',
'item6', 'item7', 'item8', 'item9', 'item10'];
const pageSize = 3;
const currentPage = 2;
for (let i = 0; i < allResults.length; i++) {
  const spliced = allResults.toSpliced(0, 3);
  console.log(spliced[i]);
}
/////rah dovom


/**
 * 
 *  {a little difficult
Paginating search results
Question: Implement a function paginateResults(results, pageSize,
pageNum) that takes in an array of results, the number of items per
page (pageSize), and the current page number (pageNum). The function
should return a new array with just the items for the specified page.

Hint: Consider using Array.prototype.slice() to extract a subset of
the array based on the page size and current page number.
const allResults = ['item1', 'item2', 'item3', 'item4', 'item5',
'item6', 'item7', 'item8', 'item9', 'item10']; const pageSize = 3;
const currentPage = 2;} arr 
 * 
 *  
 */
function paginatingSearch(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
      let slicePage = arr.slice(i, i + size);
      newArr.push(slicePage);
  }
  return newArr;
}

console.log(paginatingSearch(['item1', 'item2', 'item3', 'item4', 'item5',
'item6', 'item7', 'item8', 'item9', 'item10'], 3));

///true
const list = [1,2,3,4,5,6,7,8,9,10]

const page = 1
const pageSize = 3
const start = pagesize * (page - 1) 
const end =page * pageSize
const data = list.slice((),page*pageSize) 
console.log(data

////////////
