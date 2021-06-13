import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ROUTER_PATHS} from "../../constants/router";
import Login from "../Login";
import Register from "../Register";
import PrivateRoute from "../../utils/PrivateRoute";
import Users from "../Users";
import UserHello from "../UserHello";

const AppRouter = ({setUser, user}) => {
    return (
        <Router>
            <Route exact path={ROUTER_PATHS.LOGIN} component={() => <Login setUser={setUser} user={user} />}/>
            <Route path={ROUTER_PATHS.REGISTER} component={Register} />
            <PrivateRoute path={ROUTER_PATHS.USERS} component={Users} token={user && user.token}/>
            <PrivateRoute path={ROUTER_PATHS.HELLO} component={() => <UserHello userName={user && user.firstName} />} token={user && user.token}/>
        </Router>
    );
};

export default AppRouter;
