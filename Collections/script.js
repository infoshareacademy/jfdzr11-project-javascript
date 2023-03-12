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

// [
//   ["a", "b"],
//   [1, 2],
// ][ // ['a', 'b', 1, 2]
//   (["red", "blue"],
//   ["green", "red", "yellow"],
//   ["black", "blue"],
//   ["pink", "black", "white"])
// ]; // ['red', 'blue', 'green', 'red', 'yellow', 'black', 'blue', 'pink', 'black', 'white']

// function flatArray(arr) {
//   return arr.flat();
// }
// console.log(
//   flatArray([
//     ["a", "b"],
//     [1, 2],
//   ])
// );

//10
const people = [
  {
    name: "Alice",
    gender: "woman",
    age: 27,
    city: "New York",
    height: 68,
    job: "Software Engineer",
    car: "Toyota Corolla",
  },
  {
    name: "Bob",
    gender: "man",
    age: 35,
    city: "San Francisco",
    height: 72,
    job: "Marketing Manager",
    car: "Honda Civic",
  },
  {
    name: "Charlie",
    gender: "man",
    age: 42,
    city: "Chicago",
    height: 70,
    job: "Sales Director",
    car: "Ford Mustang",
  },
  {
    name: "Danielle",
    gender: "woman",
    age: 24,
    city: "Los Angeles",
    height: 64,
    job: "Graphic Designer",
    car: "Volkswagen Beetle",
  },
  {
    name: "Edward",
    gender: "man",
    age: 50,
    city: "Boston",
    height: 76,
    job: "Lawyer",
    car: "BMW 3 Series",
  },
];

// function belowThirty(people) {
//   const filtered = people.filter((person) => person.age < 30);
//   return filtered;
// }

// console.log(belowThirty(people));

// 11;
// function showUserInfo(users) {
//   users.forEach((user) => {
//     let coolCar = " which is fun car";
//     let boringCar = " which is boring car";
//     let info = "";

//     if (user.car === "BMW 3 Series" || user.car === "Ford Mustang") {
//       info =
//         `The user's name is ${user.name} and the user is ${user.age} years old. The user works as ${user.job} and drives ${user.car}` +
//         coolCar;
//     } else {
//       info =
//         `The user's name is ${user.name} and the user is ${user.age} years old. The user works as ${user.job} and drives ${user.car}` +
//         boringCar;
//     }
//     return console.log(info);
//   });
// }

// showUserInfo(people);

//12

function aboveForty(people) {
  let aboveForty = people.filter((person) => person.age > 40);
  aboveForty.forEach((user) => {
    console.log(`The user is ${user.name} and he is ${user.age} years old`);
  });
  aboveForty.reduce((total, person.age) => {
    total += person.age
  })
}
aboveForty(people);
