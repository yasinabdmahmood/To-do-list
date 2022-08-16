import { checked, unchecked } from './taskCompletion.js';

const checkInteraction = () => {
  document.querySelectorAll('.done').forEach((el) => {
    el.onclick = (e) => {
      e.target.style.display = 'none';
      e.target.previousElementSibling.style.display = 'block';
      unchecked(e.target.parentNode);
    };
  });

  document.querySelectorAll('.unchecked').forEach((el) => {
    el.onclick = (e) => {
      e.target.style.display = 'none';
      e.target.nextElementSibling.style.display = 'block';
      checked(e.target.parentNode);
    };
  });
};

export default checkInteraction;