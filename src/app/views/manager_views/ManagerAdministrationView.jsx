import React, { useEffect, useState } from "react";
import ManagerLeftAside from "./../../components/profil_component/Manager/ManagerLeftAside";
import ManagerRoute from "./../../components/profil_component/Manager/ManagerRoute";
import { useLocation } from "react-router-dom";
import {
  URL_BACK_TO_STORE,
  URL_MANAGER_MESSAGE,
  URL_MANAGER_STATISTIQUES,
  URL_MANAGER_ORDER,
  URL_DASHBOARD,
  URL_ADD_PRODUCT,
  URL_LIST_OF_PRODUCT,
  URL_MANAGER_SETTINGS,
} from "./../../shared/constants/urls/urlConstants";

const ManagerAdministrationView = () => {
  const location = useLocation();
  const [authorizedView, setauthorizedView] = useState(false);

  useEffect(() => {
    const URL_MANAGER = [
      URL_BACK_TO_STORE,
      URL_MANAGER_MESSAGE,
      URL_MANAGER_STATISTIQUES,
      URL_MANAGER_ORDER,
      URL_DASHBOARD,
      URL_ADD_PRODUCT,
      URL_LIST_OF_PRODUCT,
      URL_MANAGER_SETTINGS,
    ];

    if (URL_MANAGER.indexOf(location.pathname) !== -1) {
      setauthorizedView(true);
    } else {
      setauthorizedView(false);
    }
  }, [location.pathname]);

  return (
    <>
      {authorizedView ? (
        <div className="flex flex-row">
          {/*********************  MANAGERS ***********************/}
          <ManagerLeftAside />
          <div className="w-11/12 mx-10 my-5">
            <ManagerRoute />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ManagerAdministrationView;
