import './style.css';
import generateTask from './modules/generateTask.js';
import checkInteraction from './modules/function-1.js';
import tasks from './modules/tasks.js';
/// ////Add event listener to update the checkbox status

/// ///////////////////////////////////////

window.onload = () => {
  let html = '';
  tasks.sort((b, a) => b.index - a.index);
  tasks.forEach((el) => {
    html += generateTask(el.discription);
  });
  document.querySelector('.task-list').innerHTML = html;
  checkInteraction();
};