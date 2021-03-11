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
  }

  return { projectBox };
})();

export default projectDOM;
