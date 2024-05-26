const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 33, 55, 77];

function takesAnArray(total, numbers) {
  const x = total + numbers;
  const z = total / numberss.length;
  return z;
}
const average = numberss.reduce(takesAnArray);
console.log(average);
const minn = math.min(numberss);
const maxx = math.max(numberss);
const lengthh = numberss.length;
console.log(maxx, minn, lengthh);
