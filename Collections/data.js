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
function olderThan30(arr) {
  let arrayOlder = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 30) {
      arrayOlder.push(arr[i]);
    }
  }
  return arrayOlder;
}
console.log(olderThan30(people));
