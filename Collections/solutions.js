// 1
const tickTackToe = [
    ["x", "o", "x"],
    ["x", "x", "o"],
    ["**", "o", "x"],
  ];

  tickTackToe[2][0] = "x";

// 2
function sumArrayNumbers(arr) {
    return arr.reduce((a,b) => a+b, 0);
  }
  
  function sumArrayNumbersWithLoop(arr) {
    let tempSum = 0;
    for (let i=0; i < arr.length; i++) {
      tempSum+=arr[i];
    }
    
    return tempSum;
  }
  
  sumArrayNumbersWithLoop([2, 7, 4, 11, -1])

// 3
function sortArr(order, arr) {
    if(order === "asc") {
      return arr.sort((a,b) => a-b);
    }
    return arr.sort((a,b) => b-a);
  }
  
  console.log(sortArr("asc", [2, 7, 4, 11, -1])); // 11
  console.log(sortArr("desc", [2, 7, 4, 11, -1])); // 11
  console.log(sortArr("asc", [0, 8, 3, 14, 1])); // 14
  console.log(sortArr("desc", [0, 8, 3, 14, 1])); // 14
  console.log(sortArr("asc", [2, -7, 140, 10, -1])); // 140
  console.log(sortArr("desc", [2, -7, 140, 10, -1])); // 140

// 4

  function biggestInArray(arr) {
    // return arr.sort((a,b) => b-a)[0];
    return arr.sort((a,b) => a-b)[arr.length-1];
  }
  
  console.log(biggestInArray([2, 7, 4, 11, -1])); // 11
  console.log(biggestInArray([0, 8, 3, 14, 1])); // 14
  console.log(biggestInArray([2, -7, 140, 10, -1])); // 140

// 5
function reverseArray(arr) {
    return arr.reverse();
  }
  
  console.log(reverseArray([1,2,3]))
  console.log(reverseArray([1,-2,13]))
  console.log(reverseArray([-1,22,3]))
  console.log(reverseArray([-150,22,33]))

// 6
function areElemsTruthy(noOfElem, arr) {
    const partArr = arr.slice(0, noOfElem);
      let tempArr = [];
    
    // partArr.forEach((elem) => tempArr.push(!!elem));
    partArr.forEach((elem) => {
      if(elem) {
        tempArr.push(true);
      } else {
        tempArr.push(false);
      }
    });
    
    return tempArr;
  }
  
  console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true]));

  // 7
  const stringLength = (arr) => {
    let newArr = [];
    arr.forEach((elem) => newArr.push(elem.length));
    return newArr;
  }

  stringLength(["hello", "world", "dog", "sophisticated"]);

  // 8
  const numbers = [
    11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
    -53, 17, -21,
  ];
  
  const higherOrEqualTwenty = (arr) => {
    let newArr = [];
    arr.forEach((elem) => elem >= 20 && newArr.push(elem))
    
    return newArr;
  }
  
  higherOrEqualTwenty(numbers)
  
  const sumOfNegativeNumbers = (arr) => {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
      if(arr[i] < 0) sum += arr[i];
    }
    return sum;
  }
  
  sumOfNegativeNumbers(numbers);
  
  const sumOfEvens = (arr) => {
    let sum = 0;
    arr.forEach((element, index) => {
      if(index%2 === 0) {
        sum+=element;
      }
    })
    return sum;
  }
  
  sumOfEvens(numbers);

  // 9
  const flatArray = (arr) => {
    return arr.flat();
  }
  
  const flattenWithConcat = (arr) => [].concat.apply([], arr);
  
  const flattenWithSpread = (arr) => [].concat(...arr);

  // 10
  const people = [
    {
      name: "Alice",
      gender: "woman",
      age: 27,
      city: "New York",
      height: 68,
      job: "Software Engineer",
      car: "Toyota Corolla"
    },
    {
      name: "Bob",
      gender: "man",
      age: 35,
      city: "San Francisco",
      height: 72,
      job: "Marketing Manager",
      car: "Honda Civic"
    },
    {
      name: "Charlie",
      gender: "man",
      age: 42,
      city: "Chicago",
      height: 70,
      job: "Sales Director",
      car: "Ford Mustang"
    },
    {
      name: "Danielle",
      gender: "woman",
      age: 24,
      city: "Los Angeles",
      height: 64,
      job: "Graphic Designer",
      car: "Volkswagen Beetle"
    },
    {
      name: "Edward",
      gender: "man",
      age: 50,
      city: "Boston",
      height: 76,
      job: "Lawyer",
      car: "BMW 3 Series"
    }
  ]

  const filterArray = (arr) => {
    let newArr = [];

    arr.forEach((elem) => elem.age < 30 && newArr.push(elem));

    return newArr;
  }

  filterArray(people)
  
  // 11
  const printUserData = (arr) => {
    arr.forEach((elem) => console.log(`The user's name is ${elem.name} and the user is ${elem.age} years old. The user works as ${elem.job} and drives ${elem.car}\n`))
  }
  
  printUserData(people);

  // 12
  const filterMen = (arr) =>{ 
    let sum = 0;
    arr.forEach((elem) => {
      if(elem.age >= 40) {
        console.log(`The user is ${elem.name} and he is ${elem.age} years old`)
        sum+=elem.age;
      }
    })
    return `Together they have ${sum} years`
  };
  
  filterMen(people);

  // 13
  const sortArr = (arr) => {
    return arr.sort((a,b) => a.age - b.age);
  }
  
  sortArr(people)

  // 14
  function dayOfTheWeekYouWereBorn(birthdate) {
    let [year, month, day] = birthdate.split("-");
    let born_day = new Date(year, month - 1, day);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `You were born on ${days[born_day.getDay()]}`;
  }
  
  dayOfTheWeekYouWereBorn("2000-11-20")

  // 15
  function countWordOccurrences(str) {
    // Usuń znaki specjalne i zamień wszystkie litery na małe
    str = str.replace(/[^\w\s]/gi, '').toLowerCase();
    
    // Podziel ciąg znaków na słowa
    const words = str.split(' ');
    
    // Utwórz obiekt, w którym będą przechowywane ilości wystąpień słów
    const wordCount = {};
    
    // Przejdź przez każde słowo i zwiększ jego licznik o 1
    for (let i = 0; i < words.length; i++) {
      if (words[i] in wordCount) {
        wordCount[words[i]]++;
      } else {
        wordCount[words[i]] = 1;
      }
    }
    
    return wordCount;
  }

  // 16
  const toCamelCase = (word) => {
    const temp = word.split(/\-|\_/g);
    const newWordArr = []
    temp.forEach((elem, index) => {
      if(index === 0) newWordArr.push(elem);
      if(index > 0){
        newWordArr.push(elem[0].toUpperCase()+elem.slice(1,))
      };
    })
    return newWordArr.join("");
  }
  
  toCamelCase("java_script"); // => javaScript
  toCamelCase("java-script"); // => javaScript
  toCamelCase("Java-Script"); // => JavaScript
  toCamelCase("asp_Net_Core"); // => aspNetCore
  
  // 17

  function getStudentTopGrades(arr){
  // map zwróci nam nową tablicę o parametrach zadanych przez callback function, tj. (item) => {...}
  return arr.map((item) => {
    // jeżeli uczeń nie ma ocen, to przyjmujemy, że jego najwyższą oceną jest 0
    if(item.grades.length === 0) {
      return 0;
    } else {
      // w innym przypadku chcemy zwrócić największą liczbę ze zbioru item.grades; Math.max potrzebujesz liczb oddzielonych przecinkiem, więc "wyciągamy" liczby z tablicy przy pomocy spreada, tj item.grades = [1, 2, 3] ale ...item.grades = 1, 2, 3
      return Math.max(...item.grades)
    }
  })
}

console.log(getStudentTopGrades([
  {
    id: 1,
    name: "Jacek",
    grades: [5, 3, 4, 2, 5, 5],
  },
  {
    id: 2,
    name: "Ewa",
    grades: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: "Zygmunt",
    grades: [2, 2, 4, 4, 3, 3],
  },
  {
    id: 4,
    name: "Zosia",
    grades: [],
  },
  {
    id: 5,
    name: "Hieronim",
    grades: [1, 2, 3],
  },
]))