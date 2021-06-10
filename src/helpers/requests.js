import axios from 'axios';

const DOMAIN = 'http://localhost:8080/rest/';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';


export const getCaptcha = () => {
    axios.get(`${DOMAIN}captcha`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
};

export const register = async ({ login, password, password_again, email, first_name, last_name, birthday, captcha }) => {
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
        }) // body data type must match "Content-Type" header
    });
    const final = await response.json();
    console.log('final', final);
    // axios.post(`${DOMAIN}inter/registration`,
    //     {
    //     login,
    //     password,
    //     email,
    //     birthday,
    //     captcha,
    //     lastName: last_name,
    //     firstName: first_name,
    //     confirmPassword: password_again,
    // }, {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers": "CSRF-Token, X-Requested-By, Authorization, Content-Type",
    //         "Access-Control-Allow-Credentials": "true",
    //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
    //     }
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
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
    const final = await response.json();
    return Promise.resolve(final);
};