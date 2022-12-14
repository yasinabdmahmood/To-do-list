import generateTask from './util/generateTask.js';
import addInterAction from './modules/addInterAction.js';
import removeFuncionality from './modules/removeFuncionality.js';
import editPreserve from './modules/editPreserve.js';
import getTasks from './modules/tasks.js';
/* eslint-disable no-unused-vars */

// set up localStorage
localStorage.setItem('data', '[]');

/// the functions to be tested
const addNewTask = (task) => {
  const data = getTasks();
  const obj = {
    discription: task,
    complete: false,
    index: data.length + 1,
  };
  data.push(obj);
  localStorage.setItem('data', JSON.stringify(data));
  const div = generateTask(task);
  addInterAction(div);
  removeFuncionality(div);
  editPreserve(div);
  document.querySelector('.task-list').appendChild(div);
};
const removeTaskFromLocalStorage = (d) => {
  const arr = getTasks();
  const index = arr.findIndex((object) => object.discription === d);
  arr.splice(index, 1);
  arr.forEach((item, index) => {
    item.index = index + 1;
  });
  localStorage.setItem('data', JSON.stringify(arr));
};
const removeFromDom = (div) => {
  const e = div.querySelector('.trash');
  e.parentNode.remove();
  const task = e.parentNode.querySelector('input').value;
  removeTaskFromLocalStorage(task);
};
// The test starts here
describe('Todo List Add and Remove', () => {
  document.body.innerHTML = '<div class="task-list">'
  + '</div>';
  // Add test.
  describe('Add', () => {
    test('Local storage to have 2 items', () => {
      addNewTask('task1');
      addNewTask('task2');
      const arr = getTasks();
      expect(arr.length).toBe(2);
    });

    test('The DOM to have 2 items', () => {
      const list = document.querySelectorAll('.taks-wrapper');
      expect(list).toHaveLength(2);
    });
  });
  // Remove test
  describe('Remove', () => {
    test('Local storage to have 1 item', () => {
      const div = document.querySelector('.taks-wrapper');
      removeFromDom(div);
      const arr2 = getTasks();
      expect(arr2.length).toBe(1);
    });

    test('The DOM to have 1 items', () => {
      const list2 = document.querySelectorAll('.taks-wrapper');
      expect(list2).toHaveLength(1);
    });
  });
});

export default addNewTask;
