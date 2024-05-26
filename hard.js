/**This exercise requires you to write a function that takes a person
object with a `name` property and a `hobbies` array, and returns a new
object where the `hobbies` array is sorted alphabetically. You'll need
to use the `sort` method to arrange the hobbies in alphabetical order.
 */

//or just write const x = sama.hobbies.sort();

/**
 * Here, you need to create a function that takes an array of objects
representing people, each with `name` and `score` properties, and
returns an object with two properties: the name of the person with the
highest score and their score. You can use the `reduce` method to find
the person with the maximum score.

 */

const peoples = [
  { name: "sama", score: 34 },
  { name: "ali", score: 43 },
  { name: "sara", score: 12 },
  { name: "saeed", score: 45 },
];

function getMaximumScore(person) {
  const highest = person.reduce((total, num) => {
    return total.score > num.score ? total : num;
  });
  return highest;
}
console.log(getMaximumScore(peoples));
/**.In this exercise, you need to write a function that takes an object
and returns a new object where all the keys are capitalized and the
values are in reverse order. You'll need to use `Object.entries`,
`map`, and `Object.fromEntries` to transform the object.. */

const xxx = {
  name: "sama",
  family: "mahmoudi",
  age: 26,
};

///
const sama = { name: "sama", family: "mahmodi", job: "developer" };

const getReversedValue = (value) => {
  const reverse = value.split("").reverse().join("");
  return reverse;
};

// get reversed string
console.log(getReversedValue("saeed"));

const UpperCase = Object.fromEntries(
  Object.entries(sama).map(([key, val]) => [
    key.toUpperCase(),
    getReversedValue(val),
  ])
);

console.log(UpperCase);
//
/**This exercise requires you to create a function that takes an array
of student objects, each with `name` and `grades` (an array of
numbers) properties, and returns a new array of objects, each with
`name` and `averageGrade` properties. You'll need to use `map` to
transform the array and calculate the average grade for each student. */
const students = [
  { name: "ali", grades: [20, 12, 16, 17, 20] },
  { name: "saeed", grades: [15, 12, 6, 18, 10] },
  { name: "sama", grades: [20, 15, 16, 18, 20] },
];
function calculate(student) {
  const totalNumber = student.grades.reduce((total, num) => total + num);
  const average = totalNumber / student.grades.length;
  return { average: average, name: student.name };
}
//console.log(final);

//const avearge = Object.fromEntries(
//  Object.entries(student).map((x , y ) => {

// }),
//);

// get average of one student
console.log(calculate(students[0]), "average for student ali ");

//get average of all students
const final = students.map(calculate);
console.log(JSON.stringify(final), "average of all students");
