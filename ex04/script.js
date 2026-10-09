let taskCount = 0;

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCount");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener("click", function () {
        li.remove();
        taskCount--;
        taskCounter.textContent = taskCount;
    });

    li.addEventListener("click", function () {
        if (li.classList.contains("completed")) {
            li.classList.remove("completed");
        } else {
            li.classList.add("completed");
        }
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskCount++;
    taskCounter.textContent = taskCount;

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
