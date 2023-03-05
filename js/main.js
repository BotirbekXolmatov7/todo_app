
let createTaskInput = document.getElementById("create-task");
let addTaskBtn = document.getElementsByTagName("button")[0];
let newTasks = document.getElementById("all-task-lists");
let completedNotes = document.getElementById("completed-task-lists");


let newTask = (taskinfo) => {
    //create all task list item start
    let mainTaskList = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let editTaskInput = document.createElement("input");
    let editButton = document.createElement("button");
    let deletButton = document.createElement("button");
    //create all task list item end

    //create all task list type start
    checkBox.type = "checkBox";
    editTaskInput.type = "text";
    editButton.innerText = "edit";
    editButton.className = "edit";
    deletButton.innerText = "delete";
    deletButton.className = "delete";
    //create all task list type end

    //add list all item start
    mainTaskList.appendChild(checkBox);
    mainTaskList.appendChild(label);
    mainTaskList.appendChild(editTaskInput);
    mainTaskList.appendChild(editButton);
    mainTaskList.appendChild(deletButton);
    //add list all item end

    label.innerText = taskinfo;
    return mainTaskList;
}


let addTask = () => {
    let mainTaskList = newTask(createTaskInput.value);
    newTasks.appendChild(mainTaskList);
    allTaskEvents(mainTaskList, taskCompleted);
    createTaskInput.value = "";
}

function editTask() {
    let mainTaskList = this.parentNode;
    let editTaskInput = mainTaskList.querySelector("input[type=text]");
    let label = mainTaskList.querySelector("label");
    let containsClass = mainTaskList.classList.contains("editModeShow");

    if (containsClass) {
        label.innerText = editTaskInput.value;
    } else {
        editTaskInput.value = label.innerText;
    }

    mainTaskList.classList.toggle("editModeShow");
}

function deleteTask() {
    let mainTaskList = this.parentNode;
    let ul = mainTaskList.parentNode;
    ul.removeChild(mainTaskList);
}

function taskCompleted() {
    let mainTaskList = this.parentNode;
    completedNotes.appendChild(mainTaskList);
    allTaskEvents(mainTaskList, taskIncomplete);
}


function taskIncomplete() {
    let mainTaskList = this.parentNode;
    newTasks.appendChild(mainTaskList);
    allTaskEvents(mainTaskList, taskCompleted);
}


addTaskBtn.addEventListener("click", addTask);


function allTaskEvents(taskmainTaskList, checkBoxEventHandler) {

    let checkBox = taskmainTaskList.querySelector('input[type="checkbox"]');
    let editButton = taskmainTaskList.querySelector("button.edit");
    let deleteButton = taskmainTaskList.querySelector("button.delete");

    editButton.addEventListener("click", editTask);
    deleteButton.addEventListener("click", deleteTask);
    checkBox.addEventListener("change", checkBoxEventHandler);

}




















