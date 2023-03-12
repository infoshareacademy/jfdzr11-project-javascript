console.log('DOM API');

const header = document.getElementById('header');
console.log(header);
console.log(header.innerText);

header.classList.add('header');

header.innerText = 'I am a heading';
