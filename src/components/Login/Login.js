import * as React from 'react';
import { Link } from "react-router-dom";

import Input from "../customComponents/Input/Input";

import { loginState } from "../../constants/login";
import { ROUTER_PATHS } from "../../constants/router";
import { validateInput } from "../../helpers/loginHelper";

import './login.css';

const Login = () => {
    const [state, setState] = React.useState(loginState);

    const onChangeInputs = (event, name) => {
        const value = event.target.value;
        const fieldName = name.toLowerCase();
        const isError = validateInput(value, fieldName);
        setState(prev => ({ ...prev, [`isError${name}`]: isError, [fieldName]: value }));
    };

    return (
        <div className='login_wrapper'>
            <div className='login'>
                <div className='login__title'>Login</div>
                <div className='login__inputs'>
                    <Input
                        type='text'
                        name='Login'
                        value={state.login}
                        onChange={onChangeInputs}
                        placeholder='Enter Login'
                        error='Login is not register'
                        isError={state.isErrorLogin}
                    />
                    <Input
                        type='password'
                        name='Password'
                        value={state.password}
                        onChange={onChangeInputs}
                        placeholder='Enter Password'
                        error='Password is incorrect'
                        isError={state.isErrorPassword}
                    />
                </div>
                <div className='login__buttons'>
                    <div className='login__buttons_link'>
                        <Link to={ROUTER_PATHS.REGISTER}>Registration</Link>
                    </div>
                    <div className='login__submit_link'>
                        <button
                            children='Send'
                            onClick={() => console.log(state.login, state.password)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;