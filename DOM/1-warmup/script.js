console.log("Dom.API")

const header = document.getElementById('header')

const body = document.querySelector("body")

console.log(header);

header.classList.add("header");

header.innerText = "I am a heading";

const listItems = ['a','b','c','d'];

const list = document.createElement("ol");

listItems.forEach(a=>{
    const newListElem = document.createElement("li");
    newListElem.append(a);
    list.append(newListElem);
})

body.append(list);

const arrLi= list.querySelectorAll('li')

arrLi.forEach(a=>{
    a.classList.add('listitem');
})

header.classList.remove("header")

header.remove();

function toggleBackgroundColor(){
    if(body.style.backgroundColor===''){
        body.style.backgroundColor = '#123123';
    }else{
        body.style.backgroundColor = '';
        console.log("Nope")
    }
}


const button=document.createElement("button");
body.append(button)
button.innerText='Click me';

button.addEventListener('click', toggleBackgroundColor)


