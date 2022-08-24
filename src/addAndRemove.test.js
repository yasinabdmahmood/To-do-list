

const  localStorage= {
    
    obj:{data:'[]'},
    setItem:function(name,data){
    this.obj[name]=data;
    },

    getItem:function(k){
        if(this.obj[k]==null){
            return null
        }
       return this.obj[k];
    },
    

 }
 const addInterAction=(div)=>{
    return null
};
const removeFuncionality=(div)=>{
    return null
};
const editPreserve=(div)=>{
    return null
};
const getTasks = () => JSON.parse(localStorage.getItem('data'));

const generateTask = (task) => {
    const div=`<div>${task}</div>`
    return div;
  };


const addNewTask = (task) => {
    const data = getTasks();
    const obj = {
      discription: task,
      complete: false,
      index: data.length + 1,
    };
    data.push(obj);
    
    localStorage.setItem('data', JSON.stringify(data));
    const div = generateTask(task);
    addInterAction(div);
    removeFuncionality(div);
    editPreserve(div);
  
    document.querySelector('.task-list').appendChild(div);
  };

  test('test passed',()=>{
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list"></li>' +
    '</div>';
    addNewTask('task1');
    const arr=getTasks();
    expect(arr.length).toBe(1)
  })