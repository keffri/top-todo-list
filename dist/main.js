(()=>{"use strict";const t=(()=>{let t=[];return{createProject:function(){let e=document.getElementById("projectInput").value;if(""===e||null===e)return void alert("Please enter a project name.");let n=function(t){return{projectName:t,taskList:[]}}(e);return t.push(n),n.projectIndex=t.indexOf(n),n},projectList:t}})(),e={createTaskContainer:function(n){const c=document.getElementById("taskContainer");console.log(n),c.innerHTML="";const o=document.createElement("div");o.setAttribute("class","taskHeader");const d=document.createElement("h2");d.setAttribute("id","taskProjectTitle"),d.textContent=t.projectList[n].projectName;const i=document.createElement("div");i.setAttribute("class","projectButtons");const r=document.createElement("button");r.setAttribute("id","addTask");const a=document.createElement("i");a.classList.add("fas","fa-plus-circle"),r.addEventListener("click",e.taskBox);const s=document.createElement("button");s.setAttribute("id","deleteProject");const l=document.createElement("i");l.classList.add("fas","fa-trash-alt"),document.createElement("div").setAttribute("id","taskList"),c.appendChild(o),o.appendChild(d),o.appendChild(i),i.appendChild(r),r.appendChild(a),i.appendChild(s),s.appendChild(l)},taskBox:function(){const t=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","boxContainer");const n=document.createElement("div");n.setAttribute("id","newTaskBox");const c=document.createElement("input");c.setAttribute("placeholder","Please enter a task."),c.setAttribute("id","taskInput"),c.setAttribute("type","text");const o=["None","Low","Medium","High"],d=document.createElement("select");d.setAttribute("id","prioritiesList");for(let t=0;t<4;t++){let e=document.createElement("option");e.value=o[t],e.text=o[t],d.appendChild(e)}const i=document.createElement("input");i.setAttribute("id","dueDate"),i.setAttribute("type","date");const r=document.createElement("div");r.classList.add("taskBoxButtonContainer");const a=document.createElement("button");a.setAttribute("id","createTask"),a.textContent="Create Task";const s=document.createElement("button");s.setAttribute("id","closeTaskBox"),s.textContent="X",t.appendChild(e),e.appendChild(n),n.appendChild(c),n.appendChild(d),n.appendChild(i),n.appendChild(r),r.appendChild(a),r.appendChild(s),s.addEventListener("click",(function(){document.getElementById("boxContainer").remove()})),console.log("test")}},n=e,c=function(){const e=document.getElementById("content"),c=document.createElement("div");c.setAttribute("id","boxContainer");const o=document.createElement("div");o.setAttribute("id","newProjectBox");const d=document.createElement("input");d.setAttribute("placeholder","Please enter a project name..."),d.setAttribute("id","projectInput"),d.setAttribute("type","text");const i=document.createElement("button");i.setAttribute("id","createProject"),i.textContent="Create Project";const r=document.createElement("button");function a(){document.getElementById("boxContainer").remove()}r.setAttribute("id","closeProjectBox"),r.textContent="X",e.appendChild(c),c.appendChild(o),o.appendChild(d),o.appendChild(i),o.appendChild(r),r.addEventListener("click",a),i.addEventListener("click",(()=>{let e=t.createProject(),c=e.projectIndex;n.createTaskContainer(c),function(t){const e=document.getElementById("projectList");e.setAttribute("id","projectList");const c=document.createElement("div");c.setAttribute("id","project"),c.addEventListener("click",(()=>{n.createTaskContainer(t.projectIndex)}));let o=document.createElement("h2");o.setAttribute("id","projectTitle"),o.textContent=t.projectName,c.appendChild(o),e.appendChild(c)}(e),a()}))};document.querySelector(".headerTitle").addEventListener("click",(()=>{console.log(t.projectList)})),document.getElementById("newProjectButton").addEventListener("click",c)})();