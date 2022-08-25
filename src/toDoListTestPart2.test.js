import addNewTask from './addAndRemove.test.js'
import getTasks from './modules/tasks.js'


const editPreserve = (div) => {
    const newVal =div.querySelector('input').value ;
      let current = div;
    
      let i = 0;
      while (current !== null) {
        i += 1;
        current = current.previousElementSibling;
      }
  
      const arr = getTasks();
      const index = arr.findIndex((object) => object.index === i);
      arr[index].discription = newVal;
      localStorage.setItem('data', JSON.stringify(arr));
    
  };



  describe('Testing functionalities', () => {
   
    test('expect first task to be updated inside local storage', () => {
     //updating first task from the Browser
     document.querySelector('.taks-wrapper input').value='updated Task';

     //Targetting first task from Dom
     const task = document.querySelector('.taks-wrapper');

     //Apply editPreserve function to respond to the edited task
     editPreserve(task);

     //Get local storage
     const arr = getTasks();

     //Get first task discription
     const newTask= arr[0].discription;
     
     //Check if the first task has been updated in local storage
      expect(newTask).toBe('updated Task');
    });

    test('The DOM to have 2 items', () => {
      const list = document.querySelectorAll('.taks-wrapper');
      expect(list).toHaveLength(1);
    });
})

