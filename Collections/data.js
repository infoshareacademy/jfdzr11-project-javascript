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

// Zadanie 10

const peopleUnder30 = people.filter((person) => {
  if (person.age < 30) {
    return person;
  }
});

console.log(peopleUnder30);

// Zadanie 11

people.forEach(userInfo);

function userInfo(arr) {
  let additionalText;

  if (arr.car.includes("BMW") || arr.car.includes("Mustang") || arr.car.includes("Beetle")) {
    additionalText = "fun car";
  } else {
    additionalText = "boring car";
  }

  console.log(
    `The user's name is ${arr.name} and the user is ${arr.age} years old. The user works as ${arr.job} and drives ${arr.car} which is ${additionalText}.`
  );
}

// Zadanie 12

function menOver40(arr) {
  let ageCounter = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender === "man" && arr[i].age >= 40) {
      console.log(`The user is ${arr[i].name} and he is ${arr[i].age} years old.`);
      ageCounter += arr[i].age;
    }
  }
    console.log(`Together thay have ${ageCounter} years.`);
}

menOver40(people);

// Zadanie 13

let youngestToOldest = [];

youngestToOldest = people.sort((a, b) => a.age - b.age);

console.log(youngestToOldest);
