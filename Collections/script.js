// 1

// const tickTackToe = [
//   ["x", "o", "x"],
//   ["x", "x", "o"],
//   ["**", "o", "x"],
// ];
// tickTackToe[2][0] = "x";
// tickTackToe.forEach((item) => console.log(item));

// 2

// function sumNumbersInArray(numbers) {
//   return numbers.reduce((total, number) => total + number);
// }

// console.log(sumNumbersInArray([2, 7, 4, 11, -1]));
// console.log(sumNumbersInArray([0, 8, 3, 14, 1]));
// console.log(sumNumbersInArray([2, -7, 140, 10, -1]));

// 3

// function sortArr(direction, numbers) {
//   let sorted = [];
//   direction === "asc"
//     ? (sorted = numbers.sort((a, b) => a - b))
//     : (sorted = numbers.sort((a, b) => b - a));

//   return sorted;
// }

// console.log(sortArr("asc", [2, 7, 4, 11, -1])); // 11
// console.log(sortArr("desc", [2, 7, 4, 11, -1])); // 11
// console.log(sortArr("asc", [0, 8, 3, 14, 1])); // 14
// console.log(sortArr("desc", [0, 8, 3, 14, 1])); // 14
// console.log(sortArr("asc", [2, -7, 140, 10, -1])); // 140
// console.log(sortArr("desc", [2, -7, 140, 10, -1])); // 140

// 4

// function biggestInArray(numbers) {
//   let biggest = Math.max(...numbers);
//   return biggest;
// }

// console.log(biggestInArray([2, 7, 4, 11, -1])); // 11
// console.log(biggestInArray([0, 8, 3, 14, 1])); // 14
// console.log(biggestInArray([2, -7, 140, 10, -1])); // 140

// 5

// function reverseArray(numbers) {
//   return numbers.reverse();
// }

// console.log(reverseArray([2, 7, 4, 11, -1])); // 11
// console.log(reverseArray([0, 8, 3, 14, 1])); // 14
// console.log(reverseArray([2, -7, 140, 10, -1])); // 140

//6

// function areElemsTruthy(element, items) {
//   let truthy = [];
//   items.forEach((element) => truthy.push(!!element));
//   return truthy.slice(0, element);
// }

// console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

//7

// function stringLength(words) {
//   let lengths = [];
//   words.forEach((word) => lengths.push(word.length));
//   return lengths;
// }

// result = stringLength(["hello", "world", "dog", "sophisticated"]); // [5, 5, 3, 13];
// console.log(result);

//8

// const numbers = [
//   11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
//   -53, 17, -21,
// ];

// let biggerEqualToTwenty = numbers.filter((num) => num >= 20);
// console.log("Elementy większe lub równe 20: " + biggerEqualToTwenty.join(" "));

// let negatives = numbers.filter((num) => num < 0);
// let sum = negatives.reduce((total, num) => (total += num));

// console.log("Suma elementów ujemnych: " + sum);

// let evenIndexNumber = numbers.filter((num) => numbers.indexOf(num) % 2 === 0);
// let sumOfEvens = evenIndexNumber.reduce((total, num) => (total += num));
// console.log(evenIndexNumber);
// console.log(sumOfEvens);

//9

[
  ["a", "b"],
  [1, 2],
][ // ['a', 'b', 1, 2]
  (["red", "blue"],
  ["green", "red", "yellow"],
  ["black", "blue"],
  ["pink", "black", "white"])
]; // ['red', 'blue', 'green', 'red', 'yellow', 'black', 'blue', 'pink', 'black', 'white']

function flatArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = 0; j < i.length; j++) {
      newArr.push(arr[j]);
      console.log(i);
    }
  }
  return newArr;
}
console.log(flatArray(["a", "b"], [1, 2]));
