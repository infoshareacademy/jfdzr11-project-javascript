const people = [
  {
    name: 'Alice',
    gender: 'woman',
    age: 27,
    city: 'New York',
    height: 68,
    job: 'Software Engineer',
    car: 'Toyota Corolla',
  },
  {
    name: 'Bob',
    gender: 'man',
    age: 35,
    city: 'San Francisco',
    height: 72,
    job: 'Marketing Manager',
    car: 'Honda Civic',
  },
  {
    name: 'Charlie',
    gender: 'man',
    age: 42,
    city: 'Chicago',
    height: 70,
    job: 'Sales Director',
    car: 'Ford Mustang',
  },
  {
    name: 'Danielle',
    gender: 'woman',
    age: 24,
    city: 'Los Angeles',
    height: 64,
    job: 'Graphic Designer',
    car: 'Volkswagen Beetle',
  },
  {
    name: 'Edward',
    gender: 'man',
    age: 50,
    city: 'Boston',
    height: 76,
    job: 'Lawyer',
    car: 'BMW 3 Series',
  },
];

//10
// function olderThan30(arr) {
//   let arrayOlder = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age < 30) {
//       arrayOlder.push(arr[i]);
//     }
//   }
//   return arrayOlder;
// }
// console.log(olderThan30(people));

// 11
// function showUsers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].car === 'BMW 3 Series' || arr[i].car === 'Ford Mustang') {
//       console.log(
//         `The user's name is ${arr[i].name} and the user is ${arr[i].age} years old. The user works as ${arr[i].job} and drives ${arr[i].car} which is fun car.`
//       );
//     } else {
//       console.log(
//         `The user's name is ${arr[i].name} and the user is ${arr[i].age} years old. The user works as ${arr[i].job} and drives ${arr[i].car} which is boring car.`
//       );
//     }
//   }
// }

// showUsers(people);

// 12
// function menOlderThanForty(arr) {
//   let ageSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age >= 40 && arr[i].gender === 'man') {
//       console.log(
//         `The user is ${arr[i].name} and he is ${arr[i].age} years old.`
//       );
//       ageSum = ageSum + arr[i].age;
//     }
//   }

//   return `Together they have ${ageSum} years`;
// }

// console.log(menOlderThanForty(people));

// 13
// function arraySortByAge(arr) {
//   let sortedArr = arr.sort((a, b) => a.age - b.age);
//   return sortedArr;
// }

// console.log(arraySortByAge(people));

// 14
function dayOfTheWeekYouWereBorn(date) {
  const birthday = new Date(date);
  let dayOfWeek = birthday.getDay();
  switch (dayOfWeek) {
    case 0:
      dayOfWeek = 'Monday';
      break;
    case 1:
      dayOfWeek = 'Tuesday';
      break;
    case 2:
      dayOfWeek = 'Wednesday';
      break;
    case 3:
      dayOfWeek = 'Thursday';
      break;
    case 4:
      dayOfWeek = 'Friday';
      break;
    case 5:
      dayOfWeek = 'Saturday';
      break;
    case 0:
      dayOfWeek = 'Sunday';
      break;
    default:
      dayOfWeek = 'wrong day number';
      break;
  }
  return console.log(`You were born on ${dayOfWeek}`);
}

dayOfTheWeekYouWereBorn('2000-11-20');

// 15
function countWordOccurrences(statement) {}
