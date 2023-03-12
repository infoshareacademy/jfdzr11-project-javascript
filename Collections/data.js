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

//-----------zadanie 10-------------------------

// const filterArray = (arr) => {
//   const newArr = [];

//   arr.forEach((elem) => elem.age < 30 && newArr.push(elem));
//   return newArr;
// };
// console.log(filterArray(people));

//-------------zadanie 11---------------------------

// const printUserData = (arr) => {
//   arr.forEach((elem) =>
//     console.log(
//       `The users name is ${elem.name} and the user is ${elem.age} years old. The user works as job and drives car`
//     )
//   );
// };

// console.log(printUserData(people));

//--------------zadanie 12=----------------------------

// function filterMan(arr) {
//   let sum = 0;
//   arr.forEach((elem) => {
//     if (elem.age >= 40 && elem.gender === "man") {
//       console.log(`The user is${elem.name} and he is ${elem.age} years old`);
//       sum += elem.age;
//     }
//   });
//   console.log(`Together they have ${sum} years`);
// }
// console.log(filterMan(people));

//-------------------Zadanie 13---------------------------

// const sortArr = (arr) => {
//   return arr.sort((a, b) => a.age - b.age);
// };
// console.log(sortArr(people));

/// ---------------zaadanie 14-----------------------------------

function dayOfTheWeekYouWereBorn(birthdate) {
  let [year, month, day] = birthdate.split("-");
  let born_day = new Date(year, month - 1, day);
  let days = [
    "Sunday",
    "MOnday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `You were born on ${days[born_day.getDay()]}`;
}

console.log(dayOfTheWeekYouWereBorn("1918-07-18"));
