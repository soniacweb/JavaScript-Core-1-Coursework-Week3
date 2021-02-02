// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//es6 arrow with anon function
const multiplied1 = numbers.map((number) => number * 100);
console.log("solution 1: ", multiplied1);

//passing a callback
function multiplyBy100(num) {
  return num * 100;
}

const multiplied2 = numbers.map(multiplyBy100);
console.log("solution 2: ", multiplied2);

// with explicit return
const multiplied3 = numbers.map((number) => {
  return number * 100;
});
console.log("solution 3: ", multiplied3);

//with function keyword
var multiplied4 = numbers.map(function (number) {
  return number * 100;
});
console.log("solution 4: ", multiplied4);
