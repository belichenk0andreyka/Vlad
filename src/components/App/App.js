import React, {useEffect} from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "../Login";
import Register from "../Register";
import Users from "../Users";
import PrivateRoute from "../../utils/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ROUTER_PATHS } from "../../constants/router";

import './app.css';
import UserHello from "../UserHello";

export default () => {
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        const userCookie = Cookies.get('user');
        console.log('user', userCookie);
        setUser(userCookie && JSON.parse(userCookie));
    }, []);

    const handleLogout = () => {
        Cookies.set('user', '');
        setUser(null);
    };
    return (
        <div className='app'>
            <ToastContainer />
            {user && user.token && <div className='logout' onClick={handleLogout}>&#10006;</div>}
            <Router>
                <Route exact path={ROUTER_PATHS.LOGIN} component={() => <Login setUser={setUser} user={user} />}/>
                <Route path={ROUTER_PATHS.REGISTER} component={Register} />
                <PrivateRoute path={ROUTER_PATHS.USERS} component={Users} token={user && user.token}/>
                <PrivateRoute path={ROUTER_PATHS.HELLO} component={() => <UserHello userName={user && user.firstName} />} token={user && user.token}/>
            </Router>
        </div>
    );
};