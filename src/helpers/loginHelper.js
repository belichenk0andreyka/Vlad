import moment from 'moment';

import {INPUT_TYPES, REG_EXP} from "../constants/login";

const validateLogin = value => value ? !REG_EXP.login.test(value) : false;
const validatePassword = value => value ? value.length < 3 : false;
const validateEmail = value => value? !value.match(REG_EXP.EMAIL) : false;
const validatePasswordAgain = (value, pass) => value ? value !== pass : false;
const validateBirthday = value => {
    const today = moment().format("YYYY-MM-DD");
    return moment(value).isSameOrAfter(today);
};

export const validateInput = (value, name, password) => {
    switch (name) {
        case INPUT_TYPES.LOGIN: return validateLogin(value);
        case INPUT_TYPES.PASSWORD: return validatePassword(value);
        case INPUT_TYPES.PASSWORD_AGAIN: return validatePasswordAgain(value, password);
        case INPUT_TYPES.EMAIL: return validateEmail(value);
        case INPUT_TYPES.FIRST_NAME: return validateLogin(value);
        case INPUT_TYPES.LAST_NAME: return validateLogin(value);
        case INPUT_TYPES.BIRTHDAY: return validateBirthday(value);
        case INPUT_TYPES.CAPTCHA: return !value;
        default: return true;
    }
};