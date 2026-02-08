// Todo App with localStorage

let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = "";
  
  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? "checked" : ""} onchange="toggleTodo(${index})">
      <span>${todo.text}</span>
      <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
    `;
    
    todoList.appendChild(li);
  });
}

function addTodo() {
  let text = todoInput.value.trim();
  
  if (text === "") {
    alert("Please enter a task!");
    return;
  }
  
  todos.push({
    text: text,
    completed: false
  });
  
  todoInput.value = "";
  saveTodos();
  renderTodos();
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

renderTodos();
