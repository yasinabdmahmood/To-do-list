import getTasks from './tasks.js';

const updateCheckBox = () => {
  const arr = getTasks();
  document.querySelectorAll('.done').forEach((el, index) => {
    if (arr[index].complete) {
      el.style.display = 'block';
      el.previousElementSibling.style.display = 'none';
    } else {
      el.style.display = 'none';
      el.previousElementSibling.style.display = 'block';
    }
  });
};

export default updateCheckBox;