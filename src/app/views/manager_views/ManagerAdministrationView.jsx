import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComponent } from './../../shared/redux-store/ProfilSlice';
import { ROLE_MANAGER } from './../../shared/constants/rolesConstant';
import { hasRole } from "../../shared/services/accountServices"; 
import ManagerLeftAside from './../../components/profil_component/Manager/ManagerLeftAside';
import ManagerProduct from "../../components/profil_component/Manager/ManagerProduct";

const ManagerAdministrationView = () => {
    const selectMenu = useSelector(selectComponent)
    const dispatch = useDispatch()
  return (
    <div className="flex flex-row">
{/********************* CUSTOMERS ***********************/}

{/*********************  MANAGERS ***********************/}
{hasRole(ROLE_MANAGER) &&
<>
<ManagerLeftAside dispatch={dispatch} selectMenu={selectMenu}/>
<ManagerProduct dispatch={dispatch} selectMenu={selectMenu}/>
</>

}
    

{/*********************   ADMIN   ***********************/}
    </div>
  );
};

export default ManagerAdministrationView;
