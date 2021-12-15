import React from "react";
import { useSelector } from "react-redux";
import ManagerLeftAside from "../../components/profil_component/ManagerLeftAside";
import { selectComponent } from './../../shared/redux-store/ProfilSlice';


const ManagerAdministrationView = () => {
    const selectMenu = useSelector(selectComponent)

  return (
    <div className="flex flex-row">
     <ManagerLeftAside selectMenu={selectMenu}/>
    </div>
  );
};

export default ManagerAdministrationView;
