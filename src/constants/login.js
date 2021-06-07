export const INPUT_TYPES = {
    LOGIN: 'login',
    PASSWORD: 'password',
    PASSWORD_AGAIN: 'password_again',
    EMAIL: 'email',
    FIRST_NAME: 'first_name',
    LAST_NAME: 'last_name',
    BIRTHDAY: 'birthday',
    CAPTCHA: 'captcha',
};

export const REG_EXP = {
    login: /^[a-zA-Z]+$/,
    EMAIL: /^(.+)@(.+)$/,
};

export const loginState = {
    login: '',
    password: '',
    isErrorLogin:false,
    isErrorPassword: false
};