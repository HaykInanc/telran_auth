export const AUTH_TOKEN_NAME = 'auth_token';

const string2array = (string) =>
    string.split('; ').map(elem => elem.split('='));

export const setCookie = (key, value) => {
    document.cookie = `${key}=${value}`;
}

export const deleteCookie = (key) => {
    document.cookie = `${key}=${-1}`;
}

export const findCookie = (key) => {
    const result = string2array(document.cookie).find(c => c[0] === key);
    return (result && result[1] !== '-1') ? result[1] : undefined
}