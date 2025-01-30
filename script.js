// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    taskItem.innerHTML = `
      <input type="text" value="${taskText}" readonly />
      <div class="task-actions">
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </div>
    `;

    // Add event listeners for edit and delete
    taskItem.querySelector(".edit-btn").addEventListener("click", () => editTask(taskItem));
    taskItem.querySelector(".delete-btn").addEventListener("click", () => deleteTask(taskItem));

    taskList.appendChild(taskItem);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Edit Task
function editTask(taskItem) {
  const inputField = taskItem.querySelector("input");
  const editBtn = taskItem.querySelector(".edit-btn");

  if (inputField.hasAttribute("readonly")) {
    inputField.removeAttribute("readonly");
    inputField.focus();
    editBtn.textContent = "💾";
  } else {
    inputField.setAttribute("readonly", true);
    editBtn.textContent = "✏️";
  }
}

// Delete Task
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}
