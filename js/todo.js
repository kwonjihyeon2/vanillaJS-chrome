const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function onClickDelete(e) {
  const li = e.target.parentElement;
  const temp = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDos = temp.filter((el) => el.id !== Number(li.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  li.remove();
}

function paintTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = String(todo.id);
  span.innerText = todo.text;
  li.appendChild(span);
  button.innerText = "❌";
  li.appendChild(button);
  button.addEventListener("click", onClickDelete);
  toDoList.appendChild(li);
}

function handleSubmit(e) {
  e.preventDefault();
  const willSaveTodo = { text: toDoInput.value, id: Date.now() };
  toDoInput.value = "";
  toDos.push(willSaveTodo);
  paintTodo(willSaveTodo);
  saveTodos();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const getTodos = JSON.parse(savedTodos);
  toDos = getTodos;
  getTodos.forEach((el) => paintTodo(el));
}
