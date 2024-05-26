/**
 * Question 2: Object Destructuring and Spread Operator in a Real-World Scenario

You have an object representing a car with various properties. You need to create a new object that includes all the properties of the original car object but with an additional property color set to "red". How would you use object destructuring and the spread operator to achieve this?

 */
const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2020,
    isElectric: true
  };
  function addColor (car){
      console.log(car)
    return{
        ...car,
       color:'red'
    };
  
  };
  console.log(addColor(car));