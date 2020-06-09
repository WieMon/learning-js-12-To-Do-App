// const removeTask = (e) => {
// //e.target.parentNode.remove();
// //console.log(e.target.parentNode);
// // e.target.parentNode.style.textDecoration = 'line-through';
// // e.target.remove();
// const index = e.target.dataset.key;
// // console.log(index);
// // console.log(document.querySelector(`li[data-key="${index}"]`));
// document.querySelector(`li[data-key="${index}"]`).remove();
// }

// document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask));

/////////////////////////////////////////////////////////////////////
// Filter
const arr = [34, 219, 109, 2934, 12, 10, 29];

const oddNumbers = arr.filter(number => number % 2);
const evenNumbers = arr.filter(number => !(number % 2));
const numbersBiggerThen100 = arr.filter(number => number > 100);

// Map
const double = arr.map(number => number * 2);
const people = arr.map(number => number + " osób");

//forEach

arr.forEach((number, index) => arr[index] = number * 2)

////////////////////////////////////////////////////////////////////

// const input = document.querySelector('input');
// const ul = document.querySelector('.shoppingList ul');
// const liElements = document.querySelectorAll('.shoppingList ul li');


// const searchTask = (e) => {
//   console.log(e);
//   const searchText = e.target.value.toLowerCase();
//   let tasks = [...liElements];
//   tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
//    ul.textContent = '';
//   tasks.forEach(li => ul.appendChild(li));
// }
// input.addEventListener('input', searchTask);

/////////////////////////////////////////////////////////////////////////////////
const form = document.querySelector('.tasksToAdd form');
const ul = document.querySelector('.tasksToAdd ul');
const taskNumber = document.querySelector('.tasksToAdd h1 span');
const listItems = document.getElementsByClassName('.tasksToAdd task');
const input = document.querySelector('.tasksToAdd input');


const removeTask = (e) => {
  e.target.parentNode.remove();
  taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === '') return;
  const task = document.createElement('li');
  task.className = '.tasksToAdd task';
  task.innerHTML = titleTask + '<button>Delete</button>';
  ul.appendChild(task);
  input.value = '';
  taskNumber.textContent = listItems.length;
  // console.log(taskNumber)
  // console.log(listItems)
  task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);