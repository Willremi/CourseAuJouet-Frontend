import React from 'react';
import { PrivateRoute } from '../../../shared/components/utils-components/PrivateRoute';
import { ROLE_CUSTOMER } from '../../../shared/constants/rolesConstant';
import { URL_DASHBOARD } from '../../../shared/constants/urls/urlConstants';
import { customHistory } from '../../../shared/services/historyServices';
import ProfilUser from './customer/Profil';

const CustomerRoute = () => {
    return (
        <switch history={customHistory}>
            <PrivateRoute
            path={URL_DASHBOARD}
            component={ProfilUser}
            roles={[ROLE_CUSTOMER]}
            />
        </switch>
    );
};

export default CustomerRoute;