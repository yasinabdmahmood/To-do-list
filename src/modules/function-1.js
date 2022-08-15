const checkInteraction = () => {
  document.querySelectorAll('.done').forEach((el) => {
    el.onclick = (e) => {
      e.target.style.display = 'none';
      e.target.previousElementSibling.style.display = 'block';
    };
  });

  document.querySelectorAll('.unchecked').forEach((el) => {
    el.onclick = (e) => {
      e.target.style.display = 'none';
      e.target.nextElementSibling.style.display = 'block';
    };
  });
};

export default checkInteraction;