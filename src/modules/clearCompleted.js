import getTasks from './tasks.js';
import removeTaskFromLocalStorage from './removeTaskFromLoaclStorage.js';

const clearCompleted = () => {
  const arr = getTasks();

  document.querySelectorAll('.taks-wrapper').forEach((element, index) => {
    if (arr[index].complete) {
      const task = element.querySelector('input').value;
      removeTaskFromLocalStorage(task);
      element.remove();
    }
  });
  arr.sort((b, a) => b.index - a.index);
  // localStorage.setItem('data',JSON.stringify(arr))
};
export default clearCompleted;