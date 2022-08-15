const isLocalStorageEmpty = () => localStorage.getItem('data') == null;

export default isLocalStorageEmpty;