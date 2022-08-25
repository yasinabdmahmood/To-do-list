import addNewTask from './addAndRemove.test.js';
import getTasks from './modules/tasks.js';

// Function responsible for editing the task description
const editPreserve = (div) => {
  const newVal = div.querySelector('input').value;
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

// Function responsible for updating an item's 'completed' status
const whatIsIndex = (current) => {
  let i = 0;
  while (current !== null) {
    i += 1;
    current = current.previousElementSibling;
  }
  return i - 1;
};

const checked = (div) => {
  const index = whatIsIndex(div);

  const arr = getTasks();
  arr[index].complete = true;

  localStorage.setItem('data', JSON.stringify(arr));
};

const unchecked = (div) => {
  const index = whatIsIndex(div);

  const arr = getTasks();
  arr[index].complete = false;

  localStorage.setItem('data', JSON.stringify(arr));
};
  // A fuction to clear all complete function.
const clearCompleted = () => {
  const arr = getTasks();
  const dom = document.querySelectorAll('.taks-wrapper');
  const arr2 = arr.filter((element, index) => {
    if (element.complete) { dom[index].remove(); }
    return !element.complete;
  });

  arr2.sort((b, a) => b.index - a.index);
  localStorage.setItem('data', JSON.stringify(arr2));
};

describe('Testing functionalities', () => {
  test('expect first task to be updated inside local storage', () => {
    // updating first task from the Browser
    document.querySelector('.taks-wrapper input').value = 'updated Task';

    // Targetting first task from Dom
    const task = document.querySelector('.taks-wrapper');

    // Apply editPreserve function to respond to the edited task
    editPreserve(task);

    // Get local storage
    const arr = getTasks();

    // Get first task discription
    const newTask = arr[0].discription;

    // Check if the first task has been updated in local storage
    expect(newTask).toBe('updated Task');
  });

  test('Expect the first tasks complete status to be true', () => {
    addNewTask('Task2');
    addNewTask('Task3');
    const tasks = document.querySelectorAll('.taks-wrapper');
    tasks.forEach((el) => checked(el));
    unchecked(tasks[1]);
    const arr = getTasks();
    const status = arr.map((el) => el.complete);
    expect(status).toEqual([true, false, true]);
  });
  test('Expect all the copmleted tasks to be removed from local storage', () => {
    clearCompleted();
    const arr = getTasks();
    expect(arr.length).toBe(1);
  });
});
