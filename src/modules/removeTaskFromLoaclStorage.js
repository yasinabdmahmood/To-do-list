import getTasks from "./tasks";
const removeTaskFromLocalStorage=(d)=>{
    
    const arr = getTasks();
    const index = arr.findIndex((object) => object.discription === d);
    arr.splice(index, 1);
    arr.forEach((item, index)=>{
        item.index=index+1;
    })
    localStorage.setItem('data', JSON.stringify(arr));

}

export default removeTaskFromLocalStorage;