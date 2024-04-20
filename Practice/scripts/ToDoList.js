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

  for(let i = 0; i < ToDoArray.length; i++) {
    const todoObject = ToDoArray[i];
    const { name, dueDate } = todoObject;
    const html = `
    <p>
      ${name} ${dueDate}
      <button onclick="
        ToDoArray.splice(${i}, 1);
        renderToDoList();
      ">Delete</button>
    </p>
    `;
    ToDoHTML = ToDoHTML + html;
  }
  console.log(ToDoHTML);
  
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