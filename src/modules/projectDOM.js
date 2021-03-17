import projectLogic from "./projectCreate";
import taskDOM from "./taskDOM";

const projectDOM = (() => {
  function projectBox() {
    const content = document.getElementById("content");

    const boxContainer = document.createElement("div");
    boxContainer.setAttribute("id", "boxContainer");

    const newProjectBox = document.createElement("div");
    newProjectBox.setAttribute("id", "newProjectBox");

    const projectInput = document.createElement("input");
    projectInput.setAttribute("placeholder", "Please enter a project name...");
    projectInput.setAttribute("id", "projectInput");
    projectInput.setAttribute("type", "text");

    const createProject = document.createElement("button");
    createProject.setAttribute("id", "createProject");
    createProject.textContent = "Create Project";

    const closeProjectBox = document.createElement("button");
    closeProjectBox.setAttribute("id", "closeProjectBox");
    closeProjectBox.textContent = "X";

    content.appendChild(boxContainer);
    boxContainer.appendChild(newProjectBox);
    newProjectBox.appendChild(projectInput);
    newProjectBox.appendChild(createProject);
    newProjectBox.appendChild(closeProjectBox);

    function removeProjectBox() {
      document.getElementById("boxContainer").remove();
    }

    closeProjectBox.addEventListener("click", removeProjectBox);

    createProject.addEventListener("click", () => {
      let project = projectLogic.createProject();
      let projectIndex = project.projectIndex;
      taskDOM.createTaskContainer(projectIndex);
      createProjectDOM(project);
      removeProjectBox();
    });
  }

  function createProjectDOM(project) {
    const projectList = document.getElementById("projectList");
    projectList.setAttribute("id", "projectList");

    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("id", "project");

    projectContainer.addEventListener("click", () => {
      taskDOM.createTaskContainer(project.projectIndex);
    });

    let projectTitle = document.createElement("h2");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.textContent = project.projectName;

    projectContainer.appendChild(projectTitle);

    projectList.appendChild(projectContainer);
  }

  return { projectBox };
})();

export default projectDOM;
