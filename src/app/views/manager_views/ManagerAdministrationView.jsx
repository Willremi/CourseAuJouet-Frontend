import React from "react";
import { useSelector } from "react-redux";
import { selectComponent } from './../../shared/redux-store/ProfilSlice';
import { ROLE_MANAGER } from './../../shared/constants/rolesConstant';
import { hasRole } from "../../shared/services/accountServices"; 
import ManagerLeftAside from './../../components/profil_component/Manager/ManagerLeftAside';
import ManagerProduct from "../../components/profil_component/Manager/ManagerProduct";

const ManagerAdministrationView = () => {
    const selectMenu = useSelector(selectComponent)

  return (
    <div className="flex flex-row">
{/********************* CUSTOMERS ***********************/}

{/*********************  MANAGERS ***********************/}
{hasRole(ROLE_MANAGER) &&
<>
<ManagerLeftAside selectMenu={selectMenu}/>
<ManagerProduct />
</>

}
    

{/*********************   ADMIN   ***********************/}
    </div>
  );
};

export default ManagerAdministrationView;
