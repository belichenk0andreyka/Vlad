import * as React from 'react';

import Input from "../customComponents/Input/Input";
import { toast } from 'react-toastify';

import { registerState } from "../../constants/register";
import { Link } from "react-router-dom";
import { ROUTER_PATHS } from "../../constants/router";
import { validateInput } from "../../helpers/loginHelper";
import {getCaptcha, register} from "../../helpers/requests";

import './register.css';

const Register = () => {
    const [state, setState] = React.useState(registerState);
    React.useEffect(() => {
        getCaptcha();
    }, []);
    const onChangeInputs = (event, name) => {
        const value = event.target.value;
        const fieldName = name.toLowerCase();
        const isError = validateInput(value, fieldName, state.password);
        console.log('ocChangeFunc', `isError${name}`, fieldName, isError)
        setState(prev => ({ ...prev, [`isError${name}`]: isError, [fieldName]: value }));
    };

    const handleRegister = () => {
        const { isErrorLogin, isErrorPassword, isErrorpassword_again, isErrorEmail, isErrorfirst_name, isErrorlast_name, isErrorBirthday, isErrorCaptcha } = state;
        const isValidData = !isErrorLogin && !isErrorPassword && !isErrorpassword_again && !isErrorEmail && !isErrorfirst_name && !isErrorlast_name && !isErrorBirthday && !isErrorCaptcha;
        if (isValidData) register(state);
        else toast.error("Рома не доебуйся");
    };
    return (
        <div className='register_wrapper'>
            <div className='register'>
                <div className='register__title'>Registration</div>
                <div className='register__inputs'>
                    <Input
                        type='text'
                        fieldName='Login'
                        name='Login'
                        placeholder='Login'
                        value={state.login}
                        onChange={onChangeInputs}
                        error='Invalid login'
                        isError={state.isErrorLogin}
                    />
                    <Input
                        type='password'
                        fieldName='Password'
                        name='Password'
                        placeholder='Password'
                        value={state.password}
                        onChange={onChangeInputs}
                        error='Invalid password'
                        isError={state.isErrorPassword}
                    />
                    <Input
                        type='password'
                        fieldName='Password again'
                        name='password_again'
                        placeholder='Password again'
                        value={state.password_again}
                        onChange={onChangeInputs}
                        error='Password is not equal'
                        isError={state.isErrorpassword_again}
                    />
                    <Input
                        type='text'
                        fieldName='Email'
                        name='Email'
                        placeholder='EMAIL'
                        value={state.email}
                        onChange={onChangeInputs}
                        error='Invalid email'
                        isError={state.isErrorEmail}
                    />
                    <Input
                        type='text'
                        fieldName='First Name'
                        name='first_name'
                        placeholder='First Name'
                        value={state.first_name}
                        onChange={onChangeInputs}
                        error='Invalid first name'
                        isError={state.isErrorfirst_name}
                    />
                    <Input
                        type='text'
                        fieldName='Last Name'
                        name='last_name'
                        placeholder='Last Name'
                        value={state.last_name}
                        onChange={onChangeInputs}
                        error='Invalid last name'
                        isError={state.isErrorlast_name}
                    />
                    <Input
                        type='date'
                        fieldName='Birthday'
                        name='Birthday'
                        placeholder='Birthday'
                        value={state.birthday}
                        onChange={onChangeInputs}
                        error='Invalid birthday'
                        isError={state.isErrorBirthday}
                    />
                    <div>
                        <div className='captcha__img'>
                            <img src="http://localhost:8080/rest/captcha"/>
                        </div>
                        <Input
                            type='text'
                            fieldName='Captcha'
                            name='Captcha'
                            placeholder='Captcha'
                            value={state.captcha}
                            onChange={onChangeInputs}
                            error='Invalid Captcha'
                            isError={state.isErrorCaptcha}
                        />
                    </div>
                </div>
                <div className='register__buttons'>
                    <div className='register__buttons_link'>
                        <Link to={ROUTER_PATHS.LOGIN}>Login</Link>
                    </div>
                    <div className='register__submit_link'>
                        <button
                            children='Register'
                            onClick={handleRegister}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;