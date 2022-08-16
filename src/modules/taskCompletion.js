import getTasks from './tasks';

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

export { checked, unchecked };