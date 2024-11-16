export const setLocalUser = (value) => {
    localStorage.setItem('sdirsen.user', JSON.stringify(value));
}

export const getLocalUser = () => {
    return JSON.parse(localStorage.getItem('sdirsen.user'));
}

export const clearLocal = () => {
    localStorage.clear();
}