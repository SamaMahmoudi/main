/**
 * Easy 

2. Object Destructuring and Spread
Create a function that takes an object representing a person's details and returns a new object with updated values using object destructuring and the spread operator.
 */
const person = {
  name: "sama",
  family: "mahmoodi",
  age: 26,
  job: "programmer",
};
takesPerson(person);
function takesPerson({ name, family, age, job }) {
  const samaPersonal = `my name is  ${name}  ${family} and I am ${age} and a ${job} `;
  return samaPersonal;
}
console.log(takesPerson(person));
//another way
const person = {
  name: "sama",
  family: "mahmoodi",
  age: 26,
  job: "programmer",
};
function takesPerson(people) {
  return {
    ...people,
    name: "maryam",
    face: "perfect",
  };
}
console.log(takesPerson(person));
