import './style.css';
import generateTask from './modules/generateTask.js';
import checkInteraction from './modules/function-1.js';
import getTasks from './modules/tasks.js';
import isLocalStorageEmpty from './modules/isLocalStorageEmpty.js'
import addNewTask from './modules/addNewTask.js'
import removeFuncionality from './modules/removeFuncionality.js'

/// ////Add event listener to update the checkbox status



/// ///////////////////////////////////////

window.onload = () => {
  if(isLocalStorageEmpty()){
    localStorage.setItem('data',"[]")
  }
  else{
    let tasks=getTasks();
    
    tasks.sort((b, a) => b.index - a.index);
    tasks.forEach((el) => {
      let div= generateTask(el.discription);
      removeFuncionality(div);
      document.querySelector('.task-list').appendChild(div) ;
    });
    
    checkInteraction();

  }
 
};

document.getElementById('add-new-task').onchange=(e)=>{
let newTask=e.target.value;
addNewTask(newTask)
e.target.value='';



}