import projectDOM from "./modules/projectDOM";
import projectLogic from "./modules/projectCreate";

const todoListTitle = document.querySelector(".headerTitle");
todoListTitle.addEventListener("click", () => {
  console.log(projectLogic.projectList);
});

const newProjectButton = document.getElementById("newProjectButton");
newProjectButton.addEventListener("click", projectDOM.projectBox);
