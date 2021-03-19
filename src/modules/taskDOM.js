import projectLogic from "./projectCreate";

const taskDOM = (() => {
  function taskBox() {
    const content = document.getElementById("content");

    const boxContainer = document.createElement("div");
    boxContainer.setAttribute("id", "boxContainer");

    const newTaskBox = document.createElement("div");
    newTaskBox.setAttribute("id", "newTaskBox");

    const taskInput = document.createElement("input");
    taskInput.setAttribute("placeholder", "Please enter a task.");
    taskInput.setAttribute("id", "taskInput");
    taskInput.setAttribute("type", "text");

    const priorities = ["None", "Low", "Medium", "High"];
    const prioritiesList = document.createElement("select");
    prioritiesList.setAttribute("id", "prioritiesList");
    for (let i = 0; i < 4; i++) {
      let option = document.createElement("option");
      option.value = priorities[i];
      option.text = priorities[i];
      prioritiesList.appendChild(option);
    }

    const dueDate = document.createElement("input");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("type", "date");

    const taskBoxButtonContainer = document.createElement("div");
    taskBoxButtonContainer.classList.add("taskBoxButtonContainer");

    const createTaskButton = document.createElement("button");
    createTaskButton.setAttribute("id", "createTask");
    createTaskButton.textContent = "Create Task";

    const closeTaskBox = document.createElement("button");
    closeTaskBox.setAttribute("id", "closeTaskBox");
    closeTaskBox.textContent = "X";

    content.appendChild(boxContainer);
    boxContainer.appendChild(newTaskBox);
    newTaskBox.appendChild(taskInput);
    newTaskBox.appendChild(prioritiesList);
    newTaskBox.appendChild(dueDate);
    newTaskBox.appendChild(taskBoxButtonContainer);
    taskBoxButtonContainer.appendChild(createTaskButton);
    taskBoxButtonContainer.appendChild(closeTaskBox);

    function removeTaskBox() {
      document.getElementById("boxContainer").remove();
    }

    closeTaskBox.addEventListener("click", removeTaskBox);
    console.log("test");
  }

  function createTaskContainer(project) {
    const taskContainer = document.getElementById("taskContainer");

    if (taskContainer.innerHTML === "") {
      return;
    }

    taskContainer.innerHTML = "";

    const taskHeader = document.createElement("div");
    taskHeader.setAttribute("class", "taskHeader");

    const taskProjectTitle = document.createElement("h2");
    taskProjectTitle.setAttribute("id", "taskProjectTitle");
    taskProjectTitle.textContent = project.projectName;

    const projectButtons = document.createElement("div");
    projectButtons.setAttribute("class", "projectButtons");

    const addTaskButton = document.createElement("button");
    addTaskButton.setAttribute("id", "addTask");
    const addIcon = document.createElement("i");
    addIcon.classList.add("fas", "fa-plus-circle");

    addTaskButton.addEventListener("click", taskDOM.taskBox);

    const taskList = document.createElement("div");
    taskList.setAttribute("id", "taskList");

    taskContainer.appendChild(taskHeader);

    taskHeader.appendChild(taskProjectTitle);
    taskHeader.appendChild(projectButtons);
    projectButtons.appendChild(addTaskButton);
    addTaskButton.appendChild(addIcon);
  }

  return { createTaskContainer, taskBox };
})();

export default taskDOM;
