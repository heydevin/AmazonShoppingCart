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
      <button class="delete-button-style js-delete-todo-button" >Delete</button>
    `;
    ToDoHTML = ToDoHTML + html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = ToDoHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        // closure, getting index inside the method or something
        console.log(index);
        ToDoArray.splice(index, 1);
        renderToDoList();
      });
    });

  
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

document.querySelector('.js-add-todo-button').addEventListener('click', () => {addToDo();});