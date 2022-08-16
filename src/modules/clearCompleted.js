import getTasks from './tasks.js';

const clearCompleted = () => {
  const arr = getTasks();
  const dom = document.querySelectorAll('.taks-wrapper');
  const arr2 = arr.filter((element, index) => {
    if (element.complete) { dom[index].remove(); }
    return !element.complete;
  });

  arr2.sort((b, a) => b.index - a.index);
  localStorage.setItem('data', JSON.stringify(arr2));
};
export default clearCompleted;