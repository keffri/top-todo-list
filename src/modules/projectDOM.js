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
      let createTaskDiv = function () {
        taskDOM.createTaskContainer(project);
      };
      createTaskDiv();
      createProjectDOM(project, createTaskDiv);
      removeProjectBox();
    });
  }

  function createProjectDOM(project, createTaskDiv) {
    const projectList = document.getElementById("projectList");

    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("id", "project");

    let projectTitle = document.createElement("h2");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.textContent = project.projectName;
    projectTitle.addEventListener("click", () => {
      createTaskDiv();
    });

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.setAttribute("id", "deleteProject");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");

    deleteProjectButton.addEventListener("click", () => {
      projectDOM.deleteProjectDOM(project, projectContainer);
    });

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(deleteProjectButton);
    deleteProjectButton.appendChild(deleteIcon);

    projectList.appendChild(projectContainer);
  }

  function deleteProjectDOM(project, projectContainer) {
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.innerHTML = "";
    projectContainer.remove();
    projectLogic.deleteProject(project);
  }

  return { projectBox, deleteProjectDOM };
})();

export default projectDOM;
