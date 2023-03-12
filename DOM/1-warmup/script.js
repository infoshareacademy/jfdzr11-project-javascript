// 1
console.log('DOM API');

const header = document.getElementById('header');
console.log(header);
console.log(header.innerText);

// 2
header.classList.add('header');

// 3
header.innerText = 'I am a heading';

// 4
const listItems = ['a', 'b', 'c', 'd'];
const olList = document.createElement('ol');

listItems.forEach((item) => {
	const listElem = document.createElement('li');
	listElem.innerText = item;
	olList.append(listElem);
});

document.body.append(olList);

// 5
const list = document.querySelectorAll('li');
list.forEach((item) => item.classList.add('listItem'));

// 6
header.classList.remove('header');

// 7
header.remove();

// 8
function toggleBackgroundColor() {
	if (document.body.hasAttribute('style', 'background-color: #123123')) {
		document.body.removeAttribute('style', 'background-color: #123123');
	} else {
		document.body.setAttribute('style', 'background-color: #123123');
	}
}

const colorButton = document.createElement('button');
colorButton.innerText = 'Click me';
document.body.append(colorButton);

colorButton.addEventListener('click', toggleBackgroundColor);
