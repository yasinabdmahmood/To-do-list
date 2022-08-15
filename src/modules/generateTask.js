import '../assets/images/done.png';
import '../assets/images/unchecked-checkbox.png';
import threrDot from '../assets/images/three-dots-vertical.svg';

const generateTask = (task) => ` <div class="taks-wrapper">
    <img id="unchecked" class="unchecked" src="./assets/images/unchecked-checkbox.png" alt="">
    <img id="done" class="done" src="./assets/images/done.png" alt="">
    <input type="text" value="${task}">
    <img class="three-dots" src="${threrDot}" alt="">
    </div>`;

export default generateTask;