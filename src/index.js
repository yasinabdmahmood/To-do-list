import './style.css';
import generateTask from './modules/generateTask.js';
import checkInteraction from './modules/function-1.js';
import getTasks from './modules/tasks.js';
import isLocalStorageEmpty from './modules/isLocalStorageEmpty.js';
import addNewTask from './modules/addNewTask.js';
import removeFuncionality from './modules/removeFuncionality.js';
import editPreserve from './modules/editPreserve.js';
import updateCheckBox from './modules/updateCheckBox.js';
import clearCompleted from './modules/clearCompleted.js';

/// ////Add event listener to update the checkbox status

/// //////////////////////////////////////////

window.onload = () => {
  if (isLocalStorageEmpty()) {
    localStorage.setItem('data', '[]');
  } else {
    const tasks = getTasks();

    tasks.forEach((el) => {
      const div = generateTask(el.discription);
      removeFuncionality(div);
      editPreserve(div);
      document.querySelector('.task-list').appendChild(div);
    });

    checkInteraction();
    updateCheckBox();
  }
};

document.getElementById('add-new-task').onchange = (e) => {
  const newTask = e.target.value;
  addNewTask(newTask);
  e.target.value = '';
};

document.querySelector('.end button').onclick = clearCompleted;