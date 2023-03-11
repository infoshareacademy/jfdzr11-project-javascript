// Zadanie 1.

// let userName = "Kasia";
// let age = 18;
// let city = "Sopot";
// console.log(
//   "Our user's name is " +
//     userName +
//     " and the user is " +
//     age +
//     " years old. The user lives in " +
//     city
// );

// // Zadanie 2.

// function sum(a, b) {
//   return a + b;
// }

// let ten = sum(5, 5);
// let four = sum(2, 2);

// let myAddedNumbers = sum(ten, four);
// console.log(myAddedNumbers);

// // Zadanie 3.

// let x = userName;
// let y = x.length;

// console.log("Username: " + x + " have length: " + y);

// // Zadanie 4.
// let firstUser = "Agata";
// let secondUser = "Karolina";
// if (firstUser === secondUser) {
//   console.log("Oh! The names are the same!");
// } else {
//   console.log("Unfortunately the names are different :/");
// }
// // Zadanie 5.

// let age1 = 20;
// // if (age1 >= 18) {
// //   console.log("User is adult");
// // } else {
// //   console.log("User is underaged");
// // }

// console.log(age1 >= 18 ? "User is adult" : "User is underaged");

// // Zadanie 6.

// function getBiggerNumber(c, d) {
//   if (c === d) return "Liczby są równe";
//   if (c > d) {
//     return c;
//   } else {
//     return d;
//   }
// }
// console.log(getBiggerNumber(2, 3));
// console.log(getBiggerNumber(2, 2));

// // Zadanie 7.
// function itemsInCart(e) {
//   if (e < 1) {
//     return "You have no items in your cart";
//   } else if (e === 1) {
//     return "You have 1 item in your cart.";
//   } else {
//     return "You have " + e + " items in your cart.";
//   }
// }
// console.log(itemsInCart(0));

// // Zadanie 8.

// // let age2 = prompt("Please type your age");
// // if (age2 > 125 || age < 0) {
// //   console.log(`You provided incorrect age.`);
// // } else if (age2 > 35) {
// //   console.log(`You could be a president!`);
// // } else if (age2 > 18) {
// //   console.log(`At least you can have a beer.`);
// // } else {
// //   console.log(`You cannot be a president and can't even drink beer :(`);
// // }

// // Zadanie 9.

// // let isRaining = true;
// // let hasJacket = false;
// // let longTrip = true;
// // let isSummer = false;

// function shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer) {
//   if (isRaining) {
//     if (hasJacket) {
//       console.log("You dont have to take umbrella");
//     } else {
//       console.log("Take umbrella");
//     }
//   } else if (isSummer && longTrip) {
//     console.log("Its not raining now but it can");
//   } else {
//     console.log("You are fine");
//   }
// }
// shouldTakeUmbrella(true, false, false, false);
// shouldTakeUmbrella(true, true, false, false);
// shouldTakeUmbrella(false, false, false, true);
// shouldTakeUmbrella(false, false, false, false);

// // Zadanie 10.
// function isEqual(k, l) {
//   return k === l;
// }

// console.log(isEqual(2, 2));
// console.log(isEqual(2, 10));
// console.log(isEqual(2000, 100));
// console.log(isEqual(100, "100"));

// // Zadanie 11.

// //1. wersja
// // function canRideRollerCoaster(age3, height) {
// //   const canRide = age3 > 18 && height > 175;
// //   if (canRide) return `Can ride! ${canRide}`;
// //   return `Sorry kiddo,no can do! ${canRide}`;
// // }

// // console.log(canRideRollerCoaster(10, 150));
// // console.log(canRideRollerCoaster(14, 150));
// // console.log(canRideRollerCoaster(19, 150));
// // console.log(canRideRollerCoaster(19, 180));
// //2. wersja przy uzyciu switch
// function switchCanRideRollerCoaster(age, height) {
//   switch (age > 18 && height > 175) {
//     case true:
//       console.log("Can ride!", age > 18 && height > 175);
//       break;
//     case false:
//       console.log("Sorry kiddo, can't do", age > 18 && height > 175);
//     default:
//       return;
//   }
// }

// console.log(switchCanRideRollerCoaster(10, 150));
// console.log(switchCanRideRollerCoaster(14, 150));
// console.log(switchCanRideRollerCoaster(19, 150));
// console.log(switchCanRideRollerCoaster(19, 180));

// Zadanie 12.

// function alphabeticalOrder(text) {
//   return text.split("").sort();
// }

// console.log(alphabeticalOrder("javascrpit"));

// Zadanie 13.

// function reverseText(text) {
//   return text.split("").reverse().join("");
// }

// console.log(reverseText("javasript"));

// Zadanie 14.

// function getInitials(text) {
//   const tempArr = text.split(" ");
//   return tempArr[0][0] + "." + tempArr[1][0] + ".";
//   //tempArr[0][0] taki zapisa pozwala złapać pierwszy znak z pierwszego elementu tablicy.
// }

// console.log(getInitials("Harry Potter"));

// Zadanie 15.

// function slugify(text) {
//   let newArr = [];
//   text.split(" ").forEach((elem) => newArr.push(elem.toLowerCase()));
//   return newArr.join("-");
// }

// console.log(slugify("Top 10 my favourite songs"));
// console.log(slugify("Name of my blog article"));

// Zadanie 16. Sprawdzić na nagraniu
function makeToUpperCase(text) {
  lettempArr = [];
  text.split("").forEach((elem) => {
    let formatted = elem.split("")[0].toUpperCase() + elem.slice(1);
    tempArr.push(formatted);
  });
  return tempArr.join(" ");
}

console.log(makeToUpperCase("Top 10 my favourite songs"));
console.log(makeToUpperCase("Name of my blog article"));
