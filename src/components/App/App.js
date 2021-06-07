import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from "../Login";
import Register from "../Register";
import Users from "../Users";
import PrivateRoute from "../../utils/PrivateRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ROUTER_PATHS } from "../../constants/router";

import './app.css';

export default () => {
    return (
        <div className='app'>
            <ToastContainer />
            <Router>
                <Route exact path={ROUTER_PATHS.LOGIN} component={Login} />
                <Route path={ROUTER_PATHS.REGISTER} component={Register} />
                <PrivateRoute path={ROUTER_PATHS.USERS} component={Users} auth={false} />
            </Router>
        </div>
    );
};