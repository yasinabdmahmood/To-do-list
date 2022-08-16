import removeTaskFromLocalStorage from './removeTaskFromLoaclStorage.js';

const removeFuncionality = (div) => {
  div.querySelector('.trash').onclick = (e) => {
    e.target.parentNode.remove();
    const task = e.target.parentNode.querySelector('input').value;

    removeTaskFromLocalStorage(task);
  };
};

export default removeFuncionality;