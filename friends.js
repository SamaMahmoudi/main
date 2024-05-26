const samasFriends = ["sara", "zahra", "ata", "melika", "pegah"];
const saeedFriends = ["omid", "mehdi", "ata", "arman", "pegah"];
const mutualFriends = samasFriends.filter((item, index) =>
  saeedFriends.includes(item)
);
const samaANAsaeed = mutualFriends.toString();
console.log(samaANAsaeed);
/**
 * console.log("Hello, World!");
const samasFriends = ["sara", "zahra", "ATA", "melika", "pegah"];
const saeedFriends = ["omid", "mehdi", "ata", "arman", "pegah"];
const mutualFriends = samasFriends.filter(
  (item, index) =>{
    console.log(item ,  "itemIn" , index);
    console.log (saeedFriends, "saeedFriends", saeedFriends.includes(item) );
     return saeedFriends.includes(item)
    
  }
  
);
const samaANAsaeed = mutualFriends.toString();
console.log(samaANAsaeed);

 */

//object practice:
const person = {
  names:'sama',
  ages:16,
  samasname:function(name,age){
    return `'this is:'${this.name } and have ${this.age} years old`;
  },
  console.log( person.samasname)
};

 //another way


 let samasname=function(name,age){
this.name= name;
this.age= age;
},
let introduce= function(){
  this.console.log( `'this is:'${this.name } and have ${this.age} years old`);

},
const fullname = new samasname('sama' , 26);
  console.log( fullname);

  //next questain
  const full={
  rectangle : function (width , height){
      this.width= width;
      this.height= height;
  },
  area : function(){
    return this.width*this.height;
  },
  premeters : function(){
    return (this.width+this.height)*2;
  },}
  ;
  console.log(full.area)
  ///my soloution

rectangle = function (width , height){
      this.width= width;
      this.height= height;
      let area= width*height;
      let premeters=(width+height)*2;
      return `area is ${area} and premeter is ${premeters}`
  },
  rectangle()
  console .log ( rectangle (4,6));


  //
  rectangle = function (width , height){
    let area= width*height;
    let premeters=(width+height)*2;
    return `area is ${area} and premeter is ${premeters}`
},
rectangle()
console .log ( rectangle (4,6));
//



//تمرین های مرحله دوم
/**
 * 3. Create a constructor function called "Car" that takes in make, model, and year as parameters. Add these as properties. Then create two Car objects with different makes, models and years. Print out the make and year of each.
 */

const car = function( make, model,  year){
return `this car make by:${this.make} in ${1403 - this.year}years ago , which this model is ${this.model}`;
};
const car1={
  make : 'iran',
  model: 'a121',
  year: 1389,
};
const car2={
  make : 'jepan',
  model: 'c545',
  year: 1400,
};
console.log(car.apply(car1));
console.log(car.apply(car2));

//4. Add a method called "getDescription" to the Car constructor function that returns a string describing the car, for example "A blue 2020 Ford Mustang". Call this method on one of your car objects.

const car = function(color , cost ){
  return `this car make by:${this.make} in ${1403 - this.year}years ago , which this model is ${this.model} and this is with color ${color } and its cost is ${cost}$`;
  };
  const car1={
    make : 'iran',
    model: 'a121',
    year: 1389,
  };
  const car2={
    make : 'jepan',
    model: 'c545',
    year: 1400,
  };
  console.log(car.apply(car1 ,['red' , 32000]));
  console.log(car.apply(car2 ,['black' , 43000]));

  ////5. Create an object called "library" with a property called "books" which is an array of book objects, each with properties for title, author, and alreadyRead (a boolean). Add a few books, some read and some unread. Then write a method called "getUnreadBooks" that returns an array containing only the book objects which have alreadyRead set to false.
   const library = [
    { title: 'boostan', author: 'sa`adi', alreadyRead: true },
    { title: 'self care', author: 'jone', alreadyRead: false },
    { title: 'how to eat', author: 'jasone', alreadyRead: false },
    { title: 'diet', author: 'dr.adam', alreadyRead: true },
    { title: 'easy english', author: 'anari', alreadyRead: false }
  ];
  
  const getUnreadBooks = function(item) {
    if (!item.alreadyRead) {
      console.log(item.title);
    }
  };
  
  const booksUnread = library.map(getUnreadBooks);

////Create an object called "scores" with properties for "math", "science", and "history", each with a numeric value. Use Object.entries() to get an array of key-value pairs, then use a for...of loop to print out each key and value.

const scores ={
  math : 13,
  science : 20,
  history :17,
};
for(const [leeson,rank] of Object.entries(scores)){
  console.log(`${leeson} = ${rank}`);
};
//Create an object called "library" with properties for "books" and "magazines", each an array of objects with "title" and "author" properties. Use Object.entries() to loop through the object, then use a nested for...of loop to print out the title and author of each book and magazine.
const library={
  books:["funEnglish" , "jone"],
  magazines:["etemad" , "ali"],
};
for(const [key ,value] of Object.entries(library)){
  console.log(`${key} = ${value}`)
};

//Create an object called "wordCounts" where the keys are w.ords and the values are the number of times that word appears in a given text Write a function called "getTopWords" that takes the wordCounts object and a number n, and returns the top n words and their counts as an object. Use Object.entries() to convert the object to an array of key-value pairs, sort it based on the counts, take the top n results using slice(), and convert it back to an object using Object.fromEntries().
const wordCounts ={
  hello : 43 ,
  bye :23,
  name : 56,
  hate :22,
  love :98,
};
const getTopWords= function(word ,number){
  const xxx = Object.entries(word);
 
const aaa = xxx.sort(function(a, b){return b[1]-a[1]});

const zzz = aaa.slice(0,number);

console.log(zzz)
return  Object.fromEntries(zzz)
};


console.log(getTopWords(wordCounts,2));
////





const getTopWords = function(){
  for(const [key ,value] of Object.entries(wordCounts)){
   console.log(`${key} = ${value}`) };
  
  };
   getTopWords();
 getTopWords.sort((c1, c2) => {
    return c2.value - c1.value;
  });
   
   wordCounts.sort((key , value)={
    return 
   })



  //
  const wordCounts = {
    hello: 43,
    bye: 23,
    name: 56,
    hate: 22,
    love: 98,
  };
  
  const getTopWords = function(wordCounts, n) {
    // Convert the wordCounts object to an array of key-value pairs
    const entries = Object.entries(wordCounts);
  
    // Sort the entries array based on the counts in descending order
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
  
    // Take the top n entries using slice()
    const topEntries = sortedEntries.slice(0, n);
  
    // Convert the topEntries array back to an object using Object.fromEntries()
    const topWords = Object.fromEntries(topEntries);
  
    return topWords;
  };
  
  // Example usage
  const top3Words = getTopWords(wordCounts, 3);
  console.log(top3Words);
  /**
   * Here are 10 JavaScript coding exercises focused on objects, arrays,
and their methods. These exercises are suitable for beginners:


2. Add a method called `introduce` to the `person` object that returns
a string introducing the person, like "Hi, my name is [name], I am
[age] years old and I live in [city]." Call the method.

3. Create an array called `numbers` with 5 number elements. Use the
`map` method to create a new array where each element is doubled.
Print both arrays.

4. Use the `filter` method on the `numbers` array to create an array
containing only the even numbers. Print the result.

5. Use the `reduce` method on the `numbers` array to calculate the sum
of all the numbers.

6. Create an array of objects, where each object represents a book and
has properties for `title` (string), `author` (string), and
`alreadyRead` (boolean). Include at least 5 books, with some marked as
read and others not.

7. Loop through the array of books and for each book, log the book
title and author like so: "The Hobbit by J.R.R. Tolkien". Use a
for...of loop.

8. Create an array of objects representing movies, each with `title`,
`director`, and `watched` properties. Use the `filter` method to
create a new array of only the movies you've watched.

9. Use the `some` method to check if you've watched a movie by a
particular director, and the `every` method to check if you've watched
all the movies in the array.

10. Create a function that takes an array of numbers and returns an
object with the following properties: `average`, `min`, `max`, and
`length`.
   */
  /*
  2. Add a method called `introduce` to the `person` object that returns
a string introducing the person, like "Hi, my name is [name], I am
[age] years old and I live in [city]." Call the method. */
const person = {
  name: 'sama',
  age: 26,
  city: 'karaj',
  introduce: function() {
  return `Hi, my name is ${this.name}, I am ${this.age} years old and I live in ${this.city}.`;
  }
  };
  console.log(person.introduce())
  /** Create an array called `numbers` with 5 number elements. Use the
`map` method to create a new array where each element is doubled.
Print both arrays. */
const numbers =[2,3,45,5,78];
const doubledd = function(d){
  return d * 2 ;
};
const x = numbers.map(doubledd);
console.log(x)
/**
 * Use the `filter` method on the `numbers` array to create an array
containing only the even numbers. Print the result.
 */
const numbers =[2,3,45,5,78];
const evenNumber = function(d){
  if(d % 2 == 0 ){
    return d
  }
};
const x = numbers.filter(evenNumber);
console.log(x);
/** Use the `reduce` method on the `numbers` array to calculate the sum
of all the numbers.*/
const numbers =[2,3,45,5,78];

const sumCalculate = function(total,num){
 return total+num ;
  };
const x = numbers.reduce(sumCalculate);
console.log(x);
/**
 * . Create an array of objects, where each object represents a book and
has properties for `title` (string), `author` (string), and
`alreadyRead` (boolean). Include at least 5 books, with some marked as
read and others not.

 Loop through the array of books and for each book, log the book
title and author like so: "The Hobbit by J.R.R. Tolkien". Use a
for...of loop.
 */
const myBook = [
   ['dfg' ,'aerger' , true],
   ['dad' ,'ytj' , false],
   ['dgaser' ,'aytu' , true],
   ['yt' ,'aytfju' , false],
   ['e76' ,'ahjfk' , true],
]:
//we have to use foreach
let x =[];
for(let y of myBook){
  x += y
}
///
/**
 * 7. Loop through the array of books and for each book, log the book
title and author like so: "The Hobbit by J.R.R. Tolkien". Use a
for...of loop.
 */
const myBook = [
  {title:'dfg' ,name:'aerger' ,read: true},
  {title:'duil' ,name:'aseger' , read: false},
  {title:'d;po;' ,name:'asger' , read: true},
  {title:'dqw' ,name:'aweq' ,read: false},
  {title:'ntynt' ,name:'iukl' ,read: true},
];
myBook.forEach((item)=>{
  console.log(`The ${item.title} by ${item.name}`)
});
//
/**8. Create an array of objects representing movies, each with `title`,
`director`, and `watched` properties. Use the `filter` method to
create a new array of only the movies you've watched. */
const representingMovies = [
  {name:'xxx' , director:'ggg' , watched:true},
  {name:'ccc' , director:'hhh' , watched:true},
  {name:'vvv' , director:'jjj' , watched:false},
  {name:'bbb ', director:'lll' , watched:true},
  {name:'nnn' , director:'zzz' , watched:false},
];
const www=[];
representingMovies.filter((item)=>{
 if (item.watched==true){
  const rrr =`The ${item.name} by ${item.director}`
  www.push(rrr)
 };
});
console.log(www);
//
/**
 * 9. Use the `some` method to check if you've watched a movie by a
particular director, and the `every` method to check if you've watched
all the movies in the array.
 */
const representingMovies = [
  {name:'xxx' , director:'ggg' , watched:true},
  {name:'ccc' , director:'hhh' , watched:true},
  {name:'vvv' , director:'jjj' , watched:false},
  {name:'bbb ', director:'lll' , watched:true},
  {name:'nnn' , director:'zzz' , watched:false},
];
const checkeTrue = representingMovies.some((item)=> item.director == 'lll' && item.watched== true)

console.log(checkeTrue);
const everyMethod = representingMovies.every((item) => item.watched == true);
console.log(everyMethod);
/**
 * 10. Create a function that takes an array of numbers and returns an
object with the following properties: `average`, `min`, `max`, and
`length`.
 */

const numberss = [1,2,3,4,5,6,7,8,9,22,33,55,77];

 function takesAnArray (total , numbers) {
 const x = (total + numbers);
 const z = x/numberss.length;
 return z
  };
  const average = numberss.reduce(takesAnArray);
  console.log(average);
  const minn = math.min(numberss);
  const maxx = math.max(numberss);
  const lengthh = numberss.length ;
  console.log(maxx,minn,lengthh);
  ///














