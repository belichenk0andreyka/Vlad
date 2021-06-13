import axios from 'axios';

const DOMAIN = 'http://localhost:8080/rest/';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

export const register = async ({ login, password, password_again, email, first_name, last_name, birthday, captcha }, uniqId) => {
    const response = await fetch(`${DOMAIN}inter/registration`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            login,
            password,
            email,
            birthday,
            captcha,
            lastName: last_name,
            firstName: first_name,
            confirmPassword: password_again,
            captchaId: uniqId,
        })
    });
    return Promise.resolve(response);
};

export const getUsers = async () => {
    const response = await fetch(`${DOMAIN}users`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
    const final = await response.json();
    return Promise.resolve(final);
};

export const deleteUser = async id => {
    const response = await fetch(`${DOMAIN}users/${id}`, {
        method: 'DELETE',
    });
    return Promise.resolve(response);
};

export const loginUser = async ({login, password}) => {
    const response = await fetch(`${DOMAIN}inter/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            login,
            password,
        })
    });
    const final = await response.json();
    return Promise.resolve(final);
};

export const editUser = async ({login, password, password_again, email, first_name, last_name, birthday, captcha, role}, userId, uniqId) => {
    const response = await fetch(`${DOMAIN}users/update`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            id: userId,
            login,
            password,
            confirmPassword: password_again,
            email,
            firstName: first_name,
            lastName: last_name,
            birthday: birthday,
            captcha: captcha,
            role: role,
            captchaId: uniqId,
        })
    });
    const final = await response.json();
    return Promise.resolve(final);
};

export const getSimpleUser = async id => {
    const response = await fetch(`${DOMAIN}users/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
    const final = await response.json();
    return Promise.resolve(final);
};

export const addUser = async ({login, password, password_again, email, first_name, last_name, birthday, captcha, role}, uniqId) => {
    const response = await fetch(`${DOMAIN}users/add`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            id: 0,
            login,
            password,
            confirmPassword: password_again,
            email,
            firstName: first_name,
            lastName: last_name,
            birthday: birthday,
            captcha: captcha,
            role: role,
            captchaId: uniqId,
        })
    });
    const final = await response.json();
    return Promise.resolve(final);
};