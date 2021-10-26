import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_ADMIN_HOME } from '../shared/constants/urls/urlConstants';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import { customHistory } from '../shared/services/historyServices';
import AdminHomeView from '../views/AdminHomeView';
import { ROLE_ADMIN } from '../shared/constants/rolesConstant';
import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';

/**
 * Routes of the application
 * with public and private route
 * 
 * @author Peter Mollet
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
            <PrivateRoute exact path={URL_HOME} component={HomeView} />
            <PrivateRoute path={URL_ADMIN_HOME} component={AdminHomeView} roles={[ROLE_ADMIN]} />
            <Route path={URL_LOGIN} component={LoginView} />
        </Switch>
    );
};

export default Routes;