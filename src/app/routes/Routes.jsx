import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { URL_HOME, URL_LOGIN, URL_ADMIN_HOME, URL_REGISTER, URL_CART, URL_VERIFY_USER_EMAIL } from '../shared/constants/urls/urlConstants';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import CartView from '../views/CartView';
import { customHistory } from '../shared/services/historyServices';
import AdminHomeView from '../views/AdminHomeView';
import { ROLE_ADMIN, ROLE_CUSTOMER } from '../shared/constants/rolesConstant';
import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';
import RegisteredUser from '../components/account/RegisteredUser';


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
            <PrivateRoute path={URL_CART} component={CartView} roles={[ROLE_CUSTOMER]} />
            <Route path={URL_LOGIN} component={LoginView} />
            <Route path={URL_REGISTER} component={RegisterView} />
            <Route path={URL_VERIFY_USER_EMAIL} component={RegisteredUser} />
        </Switch>
    );
};

export default Routes;