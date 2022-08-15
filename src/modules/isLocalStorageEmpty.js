const isLocalStorageEmpty=()=>{
    return localStorage.getItem('data')==null
}

export default isLocalStorageEmpty;