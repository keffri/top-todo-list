const Task = function (taskName, taskPriority, taskDate) {
  let taskComplete = false;
  return { taskName, taskPriority, taskDate, taskComplete };
};

const taskLogic = (() => {
  function createTask(project) {
    let taskName = document.getElementById("taskInput").value;
    let taskPriority = document.getElementById("prioritiesList").value;
    let taskDate = document.getElementById("dueDate").value;
    let task = Task(taskName, taskPriority, taskDate);
    project.taskList.push(task);
    task.taskIndex = project.taskList.indexOf(task);

    return task;
  }

  function deleteTask(project, task) {
    let taskIndex = project.taskList.indexOf(task);
    project.taskList.splice(taskIndex, 1);
  }

  function editTask(task, taskInput, taskPriorities, taskDue) {
    task.taskName = taskInput;
    task.taskPriority = taskPriorities;
    task.taskDate = taskDue;
    console.log(task);
    return task;
  }

  function taskStatus(task, taskContainer, taskListenerContainer) {
    if (task.taskComplete === false) {
      task.taskComplete = true;
      taskContainer.style.backgroundColor = "#ACCBA8";
      taskListenerContainer.style.backgroundColor = "#ACCBA8";
    } else if (task.taskComplete === true) {
      task.taskComplete = false;
      taskContainer.style.backgroundColor = "#aaa";
      taskListenerContainer.style.backgroundColor = "#aaa";
    }
  }

  return { createTask, deleteTask, editTask, taskStatus };
})();

export default taskLogic;
