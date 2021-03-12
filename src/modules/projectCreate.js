const Project = function (projectName) {
  let taskList = [];
  return { projectName, taskList };
};

const projectLogic = (() => {
  let projectList = [];

  function createProject() {
    let projectName = document.getElementById("projectInput").value;
    if (projectName === "" || projectName === null) {
      alert("Please enter a project name.");
      return;
    }
    let project = Project(projectName);
    projectList.push(project);
    console.log(projectList);
    return project;
  }

  return { createProject, projectList };
})();

export default projectLogic;
