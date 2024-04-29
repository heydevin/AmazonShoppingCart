const ToDoArray = [{
  name:'Make Lunch',
  dueDate: '2024-04-19'
  }, {
  name: 'Write Code',
  dueDate: '2024-05-01'
  }];

renderToDoList();

function renderToDoList() {
  let ToDoHTML = '';

  ToDoArray.forEach((todoObject, index) =>  {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        ToDoArray.splice(${index}, 1);
        renderToDoList();
      " class="delete-button-style" >Delete</button>
    `;
    ToDoHTML = ToDoHTML + html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = ToDoHTML;
}

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const inputDate = document.querySelector('.js-date-input');
  const dueDate = inputDate.value;

  ToDoArray.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });

  console.log(ToDoArray);
  inputElement.value = '';

  renderToDoList();
}