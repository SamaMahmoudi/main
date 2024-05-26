const representingMovies = [
  { name: "xxx", director: "ggg", watched: true },
  { name: "ccc", director: "hhh", watched: true },
  { name: "vvv", director: "jjj", watched: false },
  { name: "bbb ", director: "lll", watched: true },
  { name: "nnn", director: "zzz", watched: false },
];
const checkeTrue = representingMovies.some(
  (item) => item.director == "lll" && item.watched == true
);

console.log(checkeTrue);
const everyMethod = representingMovies.every((item) => item.watched == true);
console.log(everyMethod);
