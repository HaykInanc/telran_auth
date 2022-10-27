const string2array = (string) =>
    string.split('; ').map(elem => elem.split('='));

const array2string = (array) =>
    array.map(elem => elem.join('=')).join('; ');

const setCookie = (key, value) => {
    // document.cookie = array2string([...string2array(document.cookie), [key, value]]);
    document.cookie = `${key}=${value}`;
}

const deleteCookie = (key) => {
    document.cookie = `${key}=${-1}`;
}

const findCookie = (key) => {
    const result = string2array(document.cookie).find(c => c[0] === key);
    return (result && result[1] !== '-1') ? result[1] : undefined
}