import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './app.css';
import AppRouter from "../AppRouter";

export default () => {
    const [user, setUser] = React.useState(Cookies.get('user') && JSON.parse(Cookies.get('user')));

    const handleLogout = () => {
        Cookies.remove('user');
        setUser(null);
    };
    return (
        <div className='app'>
            <ToastContainer />
            {user && user.token && <div className='logout' onClick={handleLogout}>&#10006;</div>}
            <AppRouter user={user} setUser={setUser} />
        </div>
    );
};