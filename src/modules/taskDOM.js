import projectLogic from "./projectCreate";
import taskLogic from "./taskCreate";

const taskDOM = (() => {
  function taskBox(project) {
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
    createTaskButton.addEventListener("click", () => {
      let task = taskLogic.createTask(project);
      taskDOM.createTaskDOM(project, task);
      removeTaskBox();
    });

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
  }

  function createTaskContainer(project) {
    const taskContainer = document.getElementById("taskContainer");

    // if (taskContainer.innerHTML === "") {
    //   return;
    // }

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

    addTaskButton.addEventListener("click", () => {
      taskDOM.taskBox(project);
    });

    const taskList = document.createElement("div");
    taskList.setAttribute("id", "taskList");

    taskContainer.appendChild(taskHeader);
    taskContainer.appendChild(taskList);
    taskHeader.appendChild(taskProjectTitle);
    taskHeader.appendChild(projectButtons);
    projectButtons.appendChild(addTaskButton);
    addTaskButton.appendChild(addIcon);
  }

  function createTasks(project) {
    for (let i = 0; i < project.taskList.length; i++) {
      let task = project.taskList[i];
      taskDOM.createTaskDOM(project, task);
    }
  }

  function createTaskDOM(project, task) {
    const taskList = document.getElementById("taskList");

    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id", "task");

    const taskName = document.createElement("h3");
    taskName.setAttribute("id", "taskName");
    taskName.textContent = task.taskName;

    const taskPriority = document.createElement("h3");
    taskPriority.setAttribute("id", "taskPriority");
    taskPriority.textContent = task.taskPriority;

    const taskDueDate = document.createElement("h3");
    taskDueDate.setAttribute("id", "taskDueDate");
    taskDueDate.textContent = task.taskDate;

    const taskButtonsContainer = document.createElement("div");
    taskButtonsContainer.setAttribute("id", "taskButtons");

    const editTaskButton = document.createElement("button");
    editTaskButton.setAttribute("id", "editTask");

    const editTaskIcon = document.createElement("i");
    editTaskIcon.classList.add("fas", "fa-edit");

    editTaskButton.addEventListener("click", () => {
      taskDOM.editTaskBox(project, task, taskContainer);
    });

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.setAttribute("id", "deleteTask");

    deleteTaskButton.addEventListener("click", () => {
      taskDOM.deleteTaskDOM(project, taskContainer, task);
    });

    const deleteTaskIcon = document.createElement("i");
    deleteTaskIcon.classList.add("fas", "fa-trash-alt");

    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskPriority);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(taskButtonsContainer);
    taskButtonsContainer.appendChild(editTaskButton);
    taskButtonsContainer.appendChild(deleteTaskButton);
    editTaskButton.appendChild(editTaskIcon);
    deleteTaskButton.appendChild(deleteTaskIcon);

    taskList.appendChild(taskContainer);
  }

  function deleteTaskDOM(project, taskContainer, task) {
    taskContainer.remove();
    taskLogic.deleteTask(project, task);
  }

  function editTaskBox(project, task, taskContainer) {
    const content = document.getElementById("content");

    const boxContainer = document.createElement("div");
    boxContainer.setAttribute("id", "boxContainer");

    const newTaskBox = document.createElement("div");
    newTaskBox.setAttribute("id", "newTaskBox");

    const taskInput = document.createElement("input");
    taskInput.setAttribute("placeholder", "Please enter a task.");
    taskInput.setAttribute("id", "taskInput");
    taskInput.setAttribute("type", "text");
    taskInput.value = task.taskName;

    const priorities = ["None", "Low", "Medium", "High"];
    const prioritiesList = document.createElement("select");
    prioritiesList.setAttribute("id", "prioritiesList");
    for (let i = 0; i < 4; i++) {
      let option = document.createElement("option");
      option.value = priorities[i];
      option.text = priorities[i];
      prioritiesList.appendChild(option);
    }
    prioritiesList.value = task.taskPriority;

    const dueDate = document.createElement("input");
    dueDate.setAttribute("id", "dueDate");
    dueDate.setAttribute("type", "date");
    dueDate.value = task.taskDate;

    const taskBoxButtonContainer = document.createElement("div");
    taskBoxButtonContainer.classList.add("taskBoxButtonContainer");

    const editTaskButton = document.createElement("button");
    editTaskButton.setAttribute("id", "editTask");
    editTaskButton.textContent = "Edit Task";
    editTaskButton.addEventListener("click", () => {
      taskDOM.editTaskDOM(
        project,
        task,
        taskContainer,
        taskInput.value,
        prioritiesList.value,
        dueDate.value
      );
      removeTaskBox();
    });

    const closeTaskBox = document.createElement("button");
    closeTaskBox.setAttribute("id", "closeTaskBox");
    closeTaskBox.textContent = "X";

    content.appendChild(boxContainer);
    boxContainer.appendChild(newTaskBox);
    newTaskBox.appendChild(taskInput);
    newTaskBox.appendChild(prioritiesList);
    newTaskBox.appendChild(dueDate);
    newTaskBox.appendChild(taskBoxButtonContainer);
    taskBoxButtonContainer.appendChild(editTaskButton);
    taskBoxButtonContainer.appendChild(closeTaskBox);

    function removeTaskBox() {
      document.getElementById("boxContainer").remove();
    }

    closeTaskBox.addEventListener("click", removeTaskBox);
  }

  function editTaskDOM(project, task, taskContainer, tName, tPriority, tDate) {
    taskLogic.editTask(task, tName, tPriority, tDate);

    taskContainer.innerHTML = "";

    const taskName = document.createElement("h3");
    taskName.setAttribute("id", "taskName");
    taskName.textContent = task.taskName;

    const taskPriority = document.createElement("h3");
    taskPriority.setAttribute("id", "taskPriority");
    taskPriority.textContent = task.taskPriority;

    const taskDueDate = document.createElement("h3");
    taskDueDate.setAttribute("id", "taskDueDate");
    taskDueDate.textContent = task.taskDate;

    const taskButtonsContainer = document.createElement("div");
    taskButtonsContainer.setAttribute("id", "taskButtons");

    const editTaskButton = document.createElement("button");
    editTaskButton.setAttribute("id", "editTask");

    const editTaskIcon = document.createElement("i");
    editTaskIcon.classList.add("fas", "fa-edit");

    editTaskButton.addEventListener("click", () => {
      taskDOM.editTaskBox(project, task, taskContainer);
    });

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.setAttribute("id", "deleteTask");

    deleteTaskButton.addEventListener("click", () => {
      taskDOM.deleteTaskDOM(project, taskContainer, task);
    });

    const deleteTaskIcon = document.createElement("i");
    deleteTaskIcon.classList.add("fas", "fa-trash-alt");

    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskPriority);
    taskContainer.appendChild(taskDueDate);
    taskContainer.appendChild(taskButtonsContainer);
    taskButtonsContainer.appendChild(editTaskButton);
    taskButtonsContainer.appendChild(deleteTaskButton);
    editTaskButton.appendChild(editTaskIcon);
    deleteTaskButton.appendChild(deleteTaskIcon);
  }

  return {
    createTaskContainer,
    taskBox,
    createTaskDOM,
    createTasks,
    deleteTaskDOM,
    editTaskBox,
    editTaskDOM,
  };
})();

export default taskDOM;
