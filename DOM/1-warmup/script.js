//1 złapanie znacznika przez ID
const header = document.getElementById("header");
console.log(header);

//2 dodanie klasy do znacznika h1
header.classList.add("header");

//3 zmiana zawrtości h1
header.innerText = "I am a heading";

//4 dodanie listy numerowanej do body
const listItems = ["a", "b", "c", "d"];
const list = document.createElement("ol");
listItems.forEach((elem) => {
  const listElement = document.createElement("li");
  listElement.innerText = elem;
  list.append(listElement);
});
document.body.append(list);

//5 dodanie klasy do wszystkich elmentów li

const allLi = document.querySelectorAll("li");
allLi.forEach((elem) => {
  elem.classList.add("listItem");
});

//6 Usunięcie klasy header

header.classList.remove("header");

//7 usunięcie całego elmentu

header.remove();

//8 dodanie button'a
const button = document.createElement("button");
button.innerText = "click me";
document.body.append(button);

const toggleBackgroundColor = (event) => {
  if (document.body.backgroundColor === undefined) {
    document.body.style.backgroundColor = "#123123";
  } else {
    document.body.style.backgroundColor = undefined;
  }
};

button.addEventListener("click", toggleBackgroundColor);
console.log(document.body.backgroundColor);
