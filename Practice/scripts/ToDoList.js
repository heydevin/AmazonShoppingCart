const ToDoArray = ['Make Lunch', 'Write Code'];

renderToDoList();

function renderToDoList() {
  let ToDoHTML = '';

  for(let i = 0; i < ToDoArray.length; i++) {
    const toDoValue = ToDoArray[i];
    const html = `<p>${toDoValue}</p>`;
    ToDoHTML = ToDoHTML + html;
  }
  console.log(ToDoHTML);
  
  document.querySelector('.js-todo-list').innerHTML = ToDoHTML;
}

function addToDo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;

  ToDoArray.push(name);
  console.log(ToDoArray);
  inputElement.value = '';

  renderToDoList();
}