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

export const register = ({ login, password, password_again, email, first_name, last_name, birthday, captcha }) => {
    axios.post(`${DOMAIN}inter/registration`,
        {
        login,
        password,
        email,
        birthday,
        captcha,
        lastName: last_name,
        firstName: first_name,
        confirmPassword: password_again,
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "CSRF-Token, X-Requested-By, Authorization, Content-Type",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
        }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};