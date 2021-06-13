import * as React from 'react';
import Cookies from 'js-cookie';
import {Link, useHistory} from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../customComponents/Input/Input";
import { loginState } from "../../constants/login";
import { ROUTER_PATHS } from "../../constants/router";
import { validateInput } from "../../helpers/loginHelper";
import { loginUser } from "../../helpers/requests";

import './login.css';

const Login = ({ setUser }) => {
    const history = useHistory();
    const [state, setState] = React.useState(loginState);

    const onChangeInputs = (event, name) => {
        const value = event.target.value;
        const fieldName = name.toLowerCase();
        const isError = validateInput(value, fieldName);
        setState(prev => ({ ...prev, [`isError${name}`]: isError, [fieldName]: value }));
    };

    const handleLogin = () => {
        loginUser(state).then(data => {
            Cookies.set('user', data);
            if (data.token) {
                setUser(data);
                data.role === 'User' ? history.push(ROUTER_PATHS.HELLO) : history.push(ROUTER_PATHS.USERS);
            } else {
                toast.error("Рома не доебуйся");
            }
        });
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
                                    onClick={handleLogin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Login;