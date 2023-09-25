// function to add task to list
function addTask(event) {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value;

    // if the Enter key is pressed && input is not empty
    if (event.key === "Enter" && taskText !== "") {
        let taskList = document.getElementById("taskList");
        let newTask = document.createElement("li");
        newTask.innerText = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";

        // ask user for task deletion confirmation
        deleteButton.onclick = function() {
            // confirm() returns true if user clicks "OK"
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(newTask);
            }
        };

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}

// Function to delete last task with confirmation
function deleteLastTask(event) {
    if (event.key === "Delete") {
        let taskList = document.getElementById("taskList");
        let lastTask = taskList.lastElementChild;
        if (lastTask) {
            // Prompt user for task deletion confirmation
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(lastTask);
            }
        }
    }
}

// Enter key press to add task
document.getElementById("task").addEventListener("keydown", addTask);

// Delete key press to delete last task
document.addEventListener("keydown", deleteLastTask);
