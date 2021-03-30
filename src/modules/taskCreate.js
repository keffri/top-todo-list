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

  return { createTask, deleteTask };
})();

export default taskLogic;
