const getTasks = ()=>{
  return JSON.parse(localStorage.getItem('data'))
}
  

export default getTasks;