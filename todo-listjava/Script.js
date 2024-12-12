let task = ["go to the store", "walk the dog"]; 

function showTasks() {
let listUl = document.getElementById("list");
    listUl.innerHTML = "";
    for (let i = 0; i < task.length; i++) {
        let li = document.createElement("li");
        li.innerText = task[i];
        listUl.appendChild(li);
    }
}

function addTask(){
    let newTask = prompt("Enter your task: ");
    task.push(newTask);
    showTasks();
    
    
}

function clearTasks(){
    task=[];
    showTasks();
}

function removeTask(){
    task.remove(removeTask.valueOf(1));
    task.remove(1);
    
}

function prioritizeTask(){
let task = prompt("Enter your task");
let listUl = document.getElementById("list");
let listItems = taskListUL.getElementsByTagName("li");
console.log(listItems);
for(let i= 0; i < task.length; i++){
    if (task[i] == task)
    listItems[i].style.color ="pink";
}

}



