// 1

// const tickTackToe = [
//   ["x", "o", "x"],
//   ["x", "x", "o"],
//   ["**", "o", "x"],
// ];

// tickTackToe[2][0] = "x";

// console.log(tickTackToe);
// // 2

// function sumNumbersInArray(array) {
//   let sum = array.reduce((a, b) => {
//     return a + b;
//   });
//   return sum;
// }

// console.log(sumNumbersInArray([2, 7, 4, 11, -1])); // 23
// console.log(sumNumbersInArray([0, 8, 3, 14, 1])); // 26
// console.log(sumNumbersInArray([2, -7, 140, 10, -1])); // 144

// 3

// function sortArr(arg, array) {
//   if (arg === "asc") {
//     array.sort(function (a, b) {
//       return a - b;
//     });
//   } else if (arg === "desc") {
//     array.sort(function (a, b) {
//       return b - a;
//     });
//   }
//   return array;
// }

// console.log(sortArr("asc", [2, 7, 4, 11, -1]));
// console.log(sortArr("desc", [2, 7, 4, 11, -1]));
// console.log(sortArr("asc", [0, 8, 3, 14, 1]));
// console.log(sortArr("desc", [0, 8, 3, 14, 1]));
// console.log(sortArr("asc", [2, -7, 140, 10, -1]));
// console.log(sortArr("desc", [2, -7, 140, 10, -1]));

// 4

const biggestInArray = (arr) => {
  return arr.sort((a, b) => a - b)[arr.length - 1];
};

console.log(biggestInArray([2, 7, 4, 11, -1])); // 11
console.log(biggestInArray([0, 8, 3, 14, 1])); // 14
console.log(biggestInArray([2, -7, 140, 10, -1])); // 140

// 5

//6

// function areElemsTruthy(indexOfElem, arr) {
//   const partArr = arr.slice(0, indexOfElem);

//   let tempArr = [];
//   partArr.forEach((elem) => {
//     if (elem) {
//       tempArr.push(true);
//     } else {
//       tempArr.push(false);
//     }
//   });
//   return tempArr;
// }

// console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

//7

// function stringLength(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
//   }
//   return newArr;
// }

// console.log(stringLength(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];

//8

// const numbers = [
//   11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
//   -53, 17, -21,
// ];

// function biggerOrEqualTo20(numbers) {
//   let newNumbers = [];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 20) {
//       newNumbers.push(numbers[i]);
//     }
//   }
//   return newNumbers;
// }

// function lowerThan0Sum(numbers) {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

// function evenNumbersSum(numbers) {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     if (i % 2 === 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

// console.log(biggerOrEqualTo20(numbers));
// console.log(lowerThan0Sum(numbers));
// console.log(evenNumbersSum(numbers));

//9

// const flatArray = (arr) => arr.flat(1);

// console.log(
//   flatArray([
//     ["a", "b"],
//     [1, 2],
//   ])
// );
// ['a', 'b', 1, 2]
