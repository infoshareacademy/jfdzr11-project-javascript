// Zadanie 1.
let userName = 'Paulina';
let age = 32;
let city = 'Gdynia';

console.log(
	`Our user's name is ${userName} and the user is ${age} years old. The user lives in ${city}`
);

// Zadanie 2.

function sum(a, b) {
	return a + b;
}

let ten = sum(5, 5);
let four = sum(2, 2);
let myAddedNumbers = sum(ten, four);
console.log(`myAddedNumbers = ${myAddedNumbers}`);

// Zadanie 3.

console.log(`Username: ${userName} have length: ${userName.length}.`);

// Zadanie 4.

const firstUser = 'Kuba';
const secondUser = 'Ania';

if (firstUser === secondUser) {
	console.log('Oh! The names are the same!');
} else {
	console.log('Unfortunately the names are different :/');
}

// Zadanie 5.

let age2 = 15;

if (age2 >= 18) {
	console.log('User is adult');
} else {
	console.log('User is underaged');
}

let text = age2 >= 18 ? 'User is adult' : 'User is underaged';
console.log(text);

// Zadanie 6.

function getBiggerNumber(a, b) {
	if (a >= b) {
		console.log(a);
	} else {
		console.log(b);
	}
}

getBiggerNumber(2, 4); // 4
getBiggerNumber(2, 10); // 10
getBiggerNumber(2000, 100); // 2000

// Zadanie 7.

function itemsInCart(a) {
	let word = 'item';
	if (a > 1 || a === 0) {
		word = 'items';
	}
	console.log(`You have ${a} ${word} in your cart.`);
}

itemsInCart(3); // You have 3 items in your cart.
itemsInCart(1); // You have 1 item in your cart.

// Zadanie 8.

// let userAge = window.prompt();

// if (userAge < 0 || userAge > 125) {
// 	console.log(`You provided incorrect age.`);
// } else if (userAge >= 35) {
// 	console.log(`You could be a president!`);
// } else if (userAge >= 18) {
// 	console.log(`At least you can have a beer.`);
// } else {
// 	console.log(`You cannot be a president and can't even drink beer :(`);
// }

// Zadanie 9.

function shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer) {
	if (isSummer === true) {
		console.log('Letni deszczyk Cię nie zabije.');
	} else {
		if (isRaining === false) {
			console.log(`Parasolka jest niepotrzebna.`);
		} else {
			if (hasJacket === false) {
				console.log('Weź parasol!');
			} else if (hasJacket === true && longTrip === true) {
				console.log('Weź parasol!');
			} else {
				console.log(`Parasolka jest niepotrzebna.`);
			}
		}
	}
}

shouldTakeUmbrella(true, true, false, false);

// Zadanie 10.

function isEqual(a, b) {
	return a === b;
}

console.log(isEqual(2, 2));
console.log(isEqual(2, 10));
console.log(isEqual(2000, 100));
console.log(isEqual(100, '100'));

// Zadanie 11.

function canRideRollerCoaster(age, height) {
	// if (age > 18 && height > 175) {
	// 	console.log('Can ride!');
	// 	return true;
	// } else {
	// 	console.log('Sorry kiddo, no can do.');
	// 	return false;
	// }

	switch (age > 18 && height > 175) {
		case true:
			console.log('Can ride!');
			// return true;
			break;
		default:
			console.log('Sorry kiddo, no can do.');
			// return false;
			break;
	}
}

canRideRollerCoaster(17, 180); // false
canRideRollerCoaster(19, 150); // false
canRideRollerCoaster(13, 150); // false
canRideRollerCoaster(19, 190); // true

// Zadanie 12.

function alphabeticalOrder(word) {
	console.log(word.split('').sort().join(''));
}

alphabeticalOrder('javascript');

// Zadanie 13.

function reverseText(word) {
	console.log(word.split('').reverse().join(''));
}

reverseText('javascript');

// Zadanie 14.

function getInitials(text) {
	let initials = [];
	for (let i = 0; i < text.length; i++) {
		if (text.charAt(i) === text.charAt(i).toUpperCase() && text.charAt(i) !== ' ') {
			initials.push(text.charAt(i) + '.');
		}
	}

	console.log(initials.join(''));
}

function getInitials2(text) {
	const tempArr = text.split(/\s/g);
	return tempArr[0][0] + '.' + tempArr[1][0] + '.';
}

getInitials('Harry Potter');
console.log(getInitials2('Harry Potter'));

// Zadanie 15.

function slugify(string) {
	string = string.toLowerCase();
	string = string.split(' ').join('-');
	console.log(string);
}

slugify('Top 10 my favourite songs'); // top-10-my-favourite-songs
slugify('Name of my blog article'); // name-of-my-blog-article

// Zadanie 16.

function makeUpperCase(string) {
	let words = string.split(' ');

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}

	string = words.join(' ');
	console.log(string);
}

makeUpperCase('top 10 my favourite songs'); // Top 10 My Favourite Songs
makeUpperCase('Name of my Blog article'); // Name Of My Blog Article
