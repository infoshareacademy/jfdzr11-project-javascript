const btnAdd = document.getElementById('add');
const btnRemove = document.getElementById('remove');
const inpt = document.getElementById('holder');

if (!localStorage.getItem('store')) {
  localStorage.setItem('store', '0');
}

let currenStoreValue = localStorage.getItem('store');
inpt.value = currenStoreValue;

btnAdd.addEventListener('click', () => {
  let currentValue = parseInt(currenStoreValue);
  currentValue = currentValue + 1;
  currenStoreValue = currentValue;
  localStorage.setItem('store', `${currenStoreValue}`);
  inpt.value = currenStoreValue;
});

btnRemove.addEventListener('click', () => {
  let currentValue = parseInt(currenStoreValue);
  currentValue = currentValue - 1;
  currenStoreValue = currentValue;
  localStorage.setItem('store', `${currenStoreValue}`);
  inpt.value = currenStoreValue;
});
