const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = JSON.parse(localStorage.getItem(TODOS_KEY));
if (todos === null) {
  todos = [];
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const button = document.createElement("button");
  button.addEventListener("click", deleteTodo);
  button.innerText = "✅";

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  li.appendChild(button);
  li.appendChild(span);

  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todos.push(newTodoObj);
  saveTodos();
  paintTodo(newTodoObj);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

if (todos != null) {
  todos.forEach(paintTodo);
}
