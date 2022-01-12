import React from "react";
import { Switch } from "react-router-dom";
import ModifyProduct from "./manager_components/ModifyProduct";
import {
  URL_LIST_OF_PRODUCT,
  URL_ADD_PRODUCT,
  URL_MODIFY_PRODUCT
} from "./../../../shared/constants/urls/urlConstants";
import { customHistory } from './../../../shared/services/historyServices';
import { PrivateRoute } from './../../../shared/components/utils-components/PrivateRoute';
import { ROLE_ADMIN, ROLE_MANAGER } from './../../../shared/constants/rolesConstant';
import ListOfProduct from './manager_components/ListOfProduct';
import AddNewProduct from './manager_components/AddNewProduct';

const ManagerRoute = () => {
  return (
    <Switch history={customHistory}>
      <PrivateRoute
        path={URL_LIST_OF_PRODUCT}
        component={ListOfProduct}
        roles={[ROLE_MANAGER, ROLE_ADMIN]}
      />
      <PrivateRoute
        path={URL_ADD_PRODUCT}
        component={AddNewProduct}
        roles={[ROLE_MANAGER, ROLE_ADMIN]}
      />
      <PrivateRoute
        path={URL_MODIFY_PRODUCT}
        component={ModifyProduct}
        roles={[ROLE_MANAGER]}
      />
    </Switch>
  );
};

export default ManagerRoute;
