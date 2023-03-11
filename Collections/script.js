// 1
// const tickTackToe = [
//   ['x', 'o', 'x'],
//   ['x', 'x', 'o'],
//   ['**', 'o', 'x'],
// ];

// tickTackToe[2][0] = 'x';
// console.log(tickTackToe[2][0]);

// 2
// function sumNumbersInArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(sumNumbersInArray([2, 7, 4, 11, -1])); // 23
// console.log(sumNumbersInArray([0, 8, 3, 14, 1])); // 26
// console.log(sumNumbersInArray([2, -7, 140, 10, -1])); // 144

// 3
// function sortArr(param, arr) {
//   let newArr;
//   if (param === 'asc') {
//     newArr = arr.sort(function (a, b) {
//       return a - b;
//     });
//   } else {
//     newArr = arr.sort(function (a, b) {
//       return b - a;
//     });
//   }
//   return newArr;
// }

// console.log(sortArr('asc', [2, 7, 4, 11, -1])); // 11
// console.log(sortArr('desc', [2, 7, 4, 11, -1])); // 11
// console.log(sortArr('asc', [0, 8, 3, 14, 1])); // 14
// console.log(sortArr('desc', [0, 8, 3, 14, 1])); // 14
// console.log(sortArr('asc', [2, -7, 140, 10, -1])); // 140
// console.log(sortArr('desc', [2, -7, 140, 10, -1])); // 140

// 4
// function biggestInArray(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(biggestInArray([2, 7, 4, 11, -1])); // 11
// console.log(biggestInArray([0, 8, 3, 14, 1])); // 14
// console.log(biggestInArray([2, -7, 140, 10, -1])); // 140

// 5
// function reverseArray(arr) {
//   let newArr;
//   newArr = arr.sort(function (a, b) {
//     return b - a;
//   });
//   return newArr;
// }

// console.log(reverseArray([2, 7, 4, 11, -1])); // 11
// console.log(reverseArray([0, 8, 3, 14, 1])); // 14
// console.log(reverseArray([2, -7, 140, 10, -1])); // 140

//6
// function areElemsTruthy(ind, arr) {
//   const partArr = arr.slice(0, ind);

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
//   let lengthArr = [];
//   arr.forEach((elem) => {
//     lengthArr.push(elem.length);
//   });

//   return lengthArr;
// }
// console.log(stringLength(['hello', 'world', 'dog', 'sophisticated'])); // [5, 5, 3, 13];

//8
// const numbers = [
//   11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
//   -53, 17, -21,
// ];

// function biggerThanTwenty(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 20) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function sumMinus(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }

// function sumIndex(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }

// console.log(biggerThanTwenty(numbers));
// console.log(sumMinus(numbers));
// console.log(sumIndex(numbers));

//9
function flatArray(arr) {
  const newArray = arr.flat();
  return newArray;
}

console.log(
  flatArray([
    ['a', 'b'],
    [1, 2],
  ])
);
console.log(
  flatArray([
    ['red', 'blue'],
    ['green', 'red', 'yellow'],
    ['black', 'blue'],
    ['pink', 'black', 'white'],
  ])
);
