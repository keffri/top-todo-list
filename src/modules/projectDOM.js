import projectLogic from "./projectCreate";

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

    const closeButton = document.createElement("button");
    closeButton.setAttribute("id", "closeButton");
    closeButton.textContent = "X";

    content.appendChild(boxContainer);
    boxContainer.appendChild(newProjectBox);
    newProjectBox.appendChild(projectInput);
    newProjectBox.appendChild(createProject);
    newProjectBox.appendChild(closeButton);

    function removeProjectBox() {
      document.getElementById("boxContainer").remove();
    }

    closeButton.addEventListener("click", removeProjectBox);

    createProject.addEventListener("click", () => {
      createProjectDOM();
      removeProjectBox();
    });
  }

  function createProjectDOM() {
    const projectList = document.getElementById("projectList");
    projectList.setAttribute("id", "projectList");

    let project = projectLogic.createProject();

    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("id", "project");

    let projectTitle = document.createElement("h2");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.textContent = project.projectName;

    projectContainer.appendChild(projectTitle);

    projectList.appendChild(projectContainer);
  }

  return { projectBox };
})();

export default projectDOM;
