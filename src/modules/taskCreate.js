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

    return task;
  }

  return { createTask };
})();

export default taskLogic;
