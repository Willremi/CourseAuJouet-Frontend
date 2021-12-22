import React from "react";
import { Switch } from "react-router-dom";
import { customHistory } from "./../../../shared/services/historyServices";
import {
  ROLE_MANAGER,
} from "./../../../shared/constants/rolesConstant";
import { PrivateRoute } from "./../../../shared/components/utils-components/PrivateRoute";
import ListOfProduct from "./manager_components/ListOfProduct";
import AddNewProduct from "./manager_components/AddNewProduct";
import {
  URL_LIST_OF_PRODUCT,
  URL_ADD_PRODUCT,
} from "./../../../shared/constants/urls/urlConstants";
const ManagerRoute = () => {
  return (
    <Switch history={customHistory}>
      <PrivateRoute
        path={URL_LIST_OF_PRODUCT}
        component={ListOfProduct}
        roles={[ROLE_MANAGER]}
      />
      <PrivateRoute
        path={URL_ADD_PRODUCT}
        component={AddNewProduct}
        roles={[ROLE_MANAGER]}
      />
    </Switch>
  );
};

export default ManagerRoute;
