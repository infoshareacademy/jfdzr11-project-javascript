console.log('DOM API');

const header = document.getElementById('header');
//console.log(header);

header.classList.add('header');
header.innerText = 'I am a heading';

const listItems = ['a', 'b', 'c', 'd'];
const listing = document.createElement('ol');
listItems.forEach((elem) => {
  let listElement = document.createElement('li');
  listElement.innerText = elem;
  listing.append(listElement);
});
document.body.append(listing);

const arrayOfLi = document.querySelectorAll('li');
arrayOfLi.forEach((elem) => {
  elem.classList.add('listItem');
});

//console.log(arrayOfLi);

header.classList.remove('header');
header.remove();

function toggleBackgroundColor() {
  if (document.body.hasAttribute('background-color') === false) {
    document.body.style.backgroundColor = '#123123';
  } else {
    console.log(document.body.style.backgroundColor);
    document.body.removeAttribute('background-color');
  }
}

toggleBackgroundColor();

const btn = document.createElement('button');

btn.innerText = 'Click me!';

btn.addEventListener('click', () => {
  console.log('You clicked me!!!');
});

document.body.append(btn);
