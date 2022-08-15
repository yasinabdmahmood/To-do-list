import getTasks from "./tasks.js"
import generateTask from "./generateTask.js";
import addInterAction from "./addInterAction.js";
import removeFuncionality from "./removeFuncionality.js";

const addNewTask=(task)=>{
let data=getTasks();
const obj={
    discription:task,
    complete: false,
    index:data.length+1,
}
data.push(obj);
localStorage.setItem('data',JSON.stringify(data))
const div=generateTask(task)
addInterAction(div)
removeFuncionality(div)
document.querySelector('.task-list').appendChild(div);

}

export default addNewTask;