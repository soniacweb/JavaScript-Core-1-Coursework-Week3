/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

const names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

// function isLongName(name) {
//   return name.length > 6;
// }

// function findLongNameThatStartsWithA(name) {
//   const newArr = name.map((a, b) => a > b);
//   return newArr;
// }

function findLongNameThatStartsWithA(name) {
  return name.length > 7;
}
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
