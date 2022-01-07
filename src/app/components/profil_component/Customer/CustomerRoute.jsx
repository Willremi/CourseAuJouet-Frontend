import React from 'react';
import { PrivateRoute } from '../../../shared/components/utils-components/PrivateRoute';
import { ROLE_CUSTOMER } from '../../../shared/constants/rolesConstant';
import { URL_DASHBOARD, URL_PROFIL } from '../../../shared/constants/urls/urlConstants';
import { customHistory } from '../../../shared/services/historyServices';
import { Switch } from "react-router-dom";
import ProfilUser from '../Profil';

const CustomerRoute = () => {
    return (
        <Switch history={customHistory}>
            {/* <PrivateRoute
            path={URL_DASHBOARD}
            component={ProfilUser}
            roles={[ROLE_CUSTOMER]}
            /> */}
            <PrivateRoute
            path={URL_PROFIL}
            component={ProfilUser}
            roles={[ROLE_CUSTOMER]}
            />
        </Switch>
    );
};

export default CustomerRoute;