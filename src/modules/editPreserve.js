import getTasks from "./tasks.js";

const editPreserve=(div)=>{
   
    div.querySelector("input").onchange=(e)=>{
        let current=e.target.parentNode
        let newVal=e.target.value
        let i=0;
        while(current!==null){
           
            i+=1;
            current=current.previousElementSibling
        }
       
      
  const arr = getTasks();
  const index = arr.findIndex((object) => object.index === i);
  arr[index].discription=newVal;
  localStorage.setItem('data', JSON.stringify(arr));
    }
}

export default editPreserve;