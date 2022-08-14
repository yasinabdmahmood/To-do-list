import './style.css';
import done from './assets/images/done.png'
import unchecked from './assets/images/unchecked-checkbox.png'
import threrDot from './assets/images/three-dots-vertical.svg'
///////Add event listener to update the checkbox status
function checkInteraction(){
  document.querySelectorAll('.done').forEach(el=>{
      el.onclick=(e)=>{
          e.target.style.display="none";
          e.target.previousElementSibling.style.display="block"
          }
  })
  
   document.querySelectorAll('.unchecked').forEach((el)=>{
      el.onclick=(e)=>{
          e.target.style.display="none";
          e.target.nextElementSibling.style.display="block"
          }
   })
}
//////////////////////////////////////////


let tasks=[
  {
      discription:'Go to Bed',
      complete: false,
      index: 5,    
  },
  {
      discription:'Go to school',
      complete: false,
      index: 4,    
  },
  {
  discription:'Do dishes',
  complete: false,
  index: 2,
},
{
  discription:'Work out',
  complete: false,
  index: 1,
},
{
  discription:'Do Laundary',
  complete: false,
  index: 3,
},
];

function generateTask(task){
  return ` <div class="taks-wrapper">
  <img id="unchecked" class="unchecked" src="./assets/images/unchecked-checkbox.png" alt="">
  <img id="done" class="done" src="./assets/images/done.png" alt="">
  <input type="text" value="${task}">
  <img class="three-dots" src="${threrDot}" alt="">
  </div>`
}

window.onload=()=>{
  let html=``;
  tasks.sort(function(b, a){return b.index - a.index});
  tasks.forEach((el)=>{
      html+=generateTask(el.discription)
  })
  document.querySelector('.task-list').innerHTML=html;
  checkInteraction();

}