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
    project.projectIndex = projectList.indexOf(project);
    return project;
  }

  function deleteProject(project) {
    let projectIndex = projectList.indexOf(project);
    projectList.splice(projectIndex, 1);
  }

  return { createProject, projectList, deleteProject };
})();

export default projectLogic;
