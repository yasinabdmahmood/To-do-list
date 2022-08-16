import { checked, unchecked } from './taskCompletion.js';

const addInterAction = (div) => {
  div.firstChild.nextElementSibling.nextElementSibling.onclick = (e) => {
    e.target.style.display = 'none';
    e.target.previousElementSibling.style.display = 'block';
    unchecked(e.target.parentNode);
  };
  div.firstChild.nextElementSibling.onclick = (e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'block';

    checked(e.target.parentNode);
  };
};

export default addInterAction;