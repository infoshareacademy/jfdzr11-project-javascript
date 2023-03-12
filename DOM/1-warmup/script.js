console.log('DOM API');

const header = document.getElementById("header");
console.log(header);
console.log(header.textContent);

header.classList.add("header");

header.innerText = "I am heading";