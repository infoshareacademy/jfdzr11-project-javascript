// 1

const tickTackToe = [
	['x', 'o', 'x'],
	['x', 'x', 'o'],
	['**', 'o', 'x'],
];

tickTackToe[2][0] = 'x';
console.log(tickTackToe);

// 2

function sumNumbersInArray(array) {
	let sum = array.reduce((prevValue, currentValue) => {
		return prevValue + currentValue;
	}, 0);
	return sum;
}

console.log(sumNumbersInArray([2, 7, 4, 11, -1])); // 23
console.log(sumNumbersInArray([0, 8, 3, 14, 1])); // 26
console.log(sumNumbersInArray([2, -7, 140, 10, -1])); // 144

// 3

function sortArr(param, array) {
	if (param === 'asc') {
		array.sort((a, b) => {
			return a - b;
		});
		return array;
	} else if (param === 'desc') {
		array.sort((a, b) => {
			return b - a;
		});
		return array;
	}
}

console.log(sortArr('asc', [2, 7, 4, 11, -1])); // 11
console.log(sortArr('desc', [2, 7, 4, 11, -1])); // 11
console.log(sortArr('asc', [0, 8, 3, 14, 1])); // 14
console.log(sortArr('desc', [0, 8, 3, 14, 1])); // 14
console.log(sortArr('asc', [2, -7, 140, 10, -1])); // 140
console.log(sortArr('desc', [2, -7, 140, 10, -1])); // 140

// 4

function biggestInArray(arr) {
	let biggestNum = 0;
	arr.forEach((element) => {
		if (element > biggestNum) {
			biggestNum = element;
		}
	});
	return biggestNum;
}

console.log(biggestInArray([2, 7, 4, 11, -1])); // 11
console.log(biggestInArray([0, 8, 3, 14, 1])); // 14
console.log(biggestInArray([2, -7, 140, 10, -1])); // 140

// 5

function reverseSort(a, b) {
	return b - a;
}

function reverseArray(arr) {
	const revArr = Array.from(arr);
	revArr.sort((a, b) => b - a);
	console.log(arr);
	return revArr;
}

console.log(reverseArray([2, 7, 4, 11, -1])); // 11
console.log(reverseArray([0, 8, 3, 14, 1])); // 14
console.log(reverseArray([2, -7, 140, 10, -1])); // 140

// 6

function areElemsTruthy(index, arr) {
	let newArr = [];
	for (let i = 0; i < index; i++) {
		newArr.push(!!arr[i]);
	}
	return newArr;
}

console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

// 7

function stringLength(arr) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i].length);
	}
	return newArr;
}

// const stringLength = (arr) =>

console.log(stringLength(['hello', 'world', 'dog', 'sophisticated'])); // [5, 5, 3, 13];

// 8

const numbers = [
	11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21, -53, 17, -21,
];

function biggerThenTwenty(arr) {
	const newArr = arr.filter((item) => item >= 20);
	console.log(`Elementy większe lub równe 20: ${newArr}`);
}

function negativeSum(arr) {
	let sum = 0;
	arr.forEach((item) => {
		if (item < 0) {
			sum += item;
		}
	});
	console.log(`Suma elementów ujemnych: ${sum}`);
}

function oddIndexSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i += 2) {
		sum += arr[i];
	}
	console.log(`Suma elementów parzystych: ${sum}`);
}

biggerThenTwenty(numbers);
negativeSum(numbers);
oddIndexSum(numbers);

//  9

function flatArray(array) {
	const newArr = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			newArr.push(array[i][j]);
		}
	}
	return newArr;
}

//  WBUDOWANA METODA:
// const flatArray = (arr) => arr.flat();
// const flatArray = (arr) => arr.flat(1);

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

// ---------------------------------------------------------
console.log('----------------------------------------------');
// ---------------------------------------------------------

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

//  10

// --- MOJE ---
function isAge(objArr) {
	let newArr = [];
	for (let i = 0; i < objArr.length; i++) {
		if (objArr[i].age <= 30) {
			newArr.push(objArr[i]);
		}
	}
	return newArr;
}

// --- PROWADZĄCEGO ---
// const isAge = (arr) => {
// 	const newArr = [];
// 	arr.forEach((elem) => elem.age < 30 && newArr.push(elem));
// 	return newArr;
// };

console.log(isAge(people));

//  11

function meetPeople(objArr) {
	let carJudge;

	objArr.forEach((item) => {
		if (item.car == 'Ford Mustang' || item.car == 'BMW 3 Series') {
			carJudge = 'which is fun car';
		} else {
			carJudge = 'which is boring car';
		}

		console.log(
			`The user's name is ${item.name} and the user is ${item.age} years old. The user works as ${item.job} and drives ${item.car} ${carJudge}.`
		);
	});
}

meetPeople(people);

// 12

function oldManArray(objArr) {
	let sum = 0;
	objArr.forEach((obj) => {
		if (obj.age >= 40 && obj.gender === 'man') {
			console.log(`The user is ${obj.name} and he is ${obj.age} years old`);
			sum += obj.age;
		}
	});

	console.log(`Together they have ${sum} years`);
}

oldManArray(people);

// 13

function sortByAge(objArr) {
	const newArr = objArr;
	newArr.sort((a, b) => a.age - b.age);
	return newArr;
}

console.log(sortByAge(people));

// 14

function dayOfTheWeekYouWereBorn(date) {
	const birthDate = new Date(date);
	const day = birthDate.getDay();
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	console.log(days[day]);

	// switch (day) {
	// 	case 1:
	// 		console.log('Monday');
	// 		break;
	// 	case 2:
	// 		console.log('Tuesday');
	// 		break;
	// 	case 3:
	// 		console.log('Wednesday');
	// 		break;
	// 	case 4:
	// 		console.log('Thursday');
	// 		break;
	// 	case 5:
	// 		console.log('Friday');
	// 		break;
	// 	case 6:
	// 		console.log('Saturday');
	// 		break;
	// 	default:
	// 	case 1:
	// 		console.log('Sunday');
	// 		break;
	// }
}

dayOfTheWeekYouWereBorn('2022-08-20');

// 15

const text =
	'JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript';

function countWordOccurrences(string) {
	const wordArray = string.toLowerCase().split(' ');
	const wordCount = {};

	wordArray.forEach((item) => {
		if (!!wordCount[item] === false) {
			wordCount[item] = 1;
		} else {
			wordCount[item] = wordCount[item] + 1;
		}
	});

	console.log(wordCount);
}

countWordOccurrences(text);

// 16

function toCamelCase(text) {
	const textArr = text.split(/-|_/);
	for (let i = 1; i < textArr.length; i++) {
		textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].substring(1);
	}
	const camelCase = textArr.join('');
	console.log(camelCase);
}

toCamelCase('java_script'); // => javaScript
toCamelCase('java-script'); // => javaScript
toCamelCase('Java-Script'); // => JavaScript
toCamelCase('JAVA-Script'); // => JavaScript
toCamelCase('java-SCRIPT'); // => javaScript
toCamelCase('asp_Net_Core'); // => aspNetCore

// 17

const students = [
	{
		id: 1,
		name: 'Jacek',
		grades: [5, 3, 4, 2, 5, 5],
	},
	{
		id: 2,
		name: 'Ewa',
		grades: [2, 3, 3, 3, 2, 5],
	},
	{
		id: 3,
		name: 'Zygmunt',
		grades: [2, 2, 4, 4, 3, 3],
	},
];

function getStudentTopGrades(studentArr) {
	let gradesArray = [];

	studentArr.forEach((student) => {
		let x = 0;
		for (i = 0; i < student.grades.length; i++) {
			if (student.grades[i] > x) {
				x = student.grades[i];
			}
		}
		gradesArray.push(x);
	});

	console.log(gradesArray);
}

getStudentTopGrades(students);
