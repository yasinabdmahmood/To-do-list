import '../assets/images/done.png';
import '../assets/images/unchecked-checkbox.png';
import threrDot from '../assets/images/three-dots-vertical.svg';
import trash from '../assets/images/trash.svg'

const generateTask = (task) => {
    const html=`
    <img id="unchecked" class="unchecked" src="./assets/images/unchecked-checkbox.png" alt="">
    <img id="done" class="done" src="./assets/images/done.png" alt="">
    <input type="text" value="${task}">
    <img class="three-dots" src="${threrDot}" alt="">
    <img class="trash" src="${trash}" alt="">
    `;
    const div=document.createElement('div');
    div.classList.add('taks-wrapper');
    div.innerHTML=html;
    return div
}

export default generateTask;