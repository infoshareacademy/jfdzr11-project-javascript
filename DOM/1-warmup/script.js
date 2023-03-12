console.log("DOM API");

const header = document.getElementById("header");
console.log(header);

header.classList.add("header");
header.innerText = "I am heading";

const listItems = ["a", "b", "c", "d"];

let list = document.createElement("ol");

listItems.forEach((item) => {
  let element = document.createElement("li");
  element.innerText = item;
  list.append(element);
});

document.body.append(list);

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.classList.add("listItem");
});

header.classList.remove("header");

header.remove();

function toggleBackgroundColor() {
  if (document.body.style.backgroundColor === "rgb(18, 49, 35)") {
    document.body.style.backgroundColor = "";
  } else {
    document.body.style.backgroundColor = "rgb(18, 49, 35)";
  }
}

let button = document.createElement("button");
button.append("Click Me");
document.body.append(button);

button.addEventListener("click", toggleBackgroundColor);
