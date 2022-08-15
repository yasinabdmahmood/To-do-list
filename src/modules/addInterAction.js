const addInterAction=(div)=>{
    div.firstChild.nextSibling.nextElementSibling.onclick=(e)=>{
     e.target.style.display = 'none';
     e.target.previousElementSibling.style.display = 'block';
    }
    div.firstChild.nextSibling.onclick=(e)=>{
        
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'block';
    }
}

export default addInterAction;