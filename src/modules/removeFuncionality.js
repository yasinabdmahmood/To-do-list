import removeTaskFromLocalStorage from "./removeTaskFromLoaclStorage";
const removeFuncionality=(div)=>{
   
    
    div.querySelector('.trash').onclick=(e)=>{
  
    e.target.parentNode.remove();
    let task=e.target.parentNode.querySelector('input').value;
   
    removeTaskFromLocalStorage(task)
    

 }
}

export default removeFuncionality;