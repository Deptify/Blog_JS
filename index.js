console.log('JS loaded');

function toggleDarkMode() {

   let body = document.getElementById('app');

   body.classList.toggle('-dark');
}

function toggleTask(event){

    let el = event.target.parentNode;

    el.classList.toggle('-done');
    
}

function removeTask(event){
    event.target.parentNode.remove();
}

function handleSubmit(event){

    event.preventDefault();
    
    let form = event.target;
    
    let input = form.querySelector("input");

    let taskText =input.value;

    addTask(taskText);

    input.value = "";
}

function addTask(text)
{
  let taskList = document.querySelector(".task-list");

  let newTask = document.createElement("li");
  let taskText = document.createElement("span");
  let taskDelete = document.createElement("button");

  newTask.classList.add("list-item");
  taskText.classList.add("task-text");
  taskDelete.classList.add("task-delete");

  taskText.textContent = text;
  taskDelete.textContent = "-"

  taskText.addEventListener("click", toggleTask)
  taskDelete.addEventListener("click",removeTask)

  newTask.appendChild(taskText);
  newTask.appendChild(taskDelete);
  
 

  taskList.appendChild(newTask);
}


function delateTask(event){

    console.log("delete me");

    let task = event.target;

    task.remove();
}





function addButton(button){
    
    let taskList = document.querySelector("li.task-list");

    let newButton = document.createElement("button");

    newButton.classList.add("my-Button")

    newButton.addEventListener("click",delateTask);

   

    taskList.appendChild(newButton);

}


function App() {

    let darkModeButton = document.getElementById('dark-mode');

    darkModeButton.addEventListener('click', toggleDarkMode);

 
    let taskList = document.querySelectorAll(".task-item");
 

    for(let task of taskList){
        let taskText = task.querySelector(".task-text");

        let taskDelete = task.querySelector(".task-delete");

        taskText.addEventListener("click", toggleTask);
        
        taskDelete.addEventListener("click", removeTask);
    }

    let addTaskForm = document.querySelector("#add-task");

    addTaskForm.addEventListener("submit", handleSubmit);

    
}


document.addEventListener('DOMContentLoaded', App);


