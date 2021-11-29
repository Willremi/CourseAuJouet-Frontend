import React from 'react'
// import { hasRole } from './../shared/services/accountServices';
// import { ROLE_ADMIN } from './../shared/constants/rolesConstant';
// import { URL_ADMIN_HOME } from './../shared/constants/urls/urlConstants';
import NewProduct from '../components/homepage/NewProduct';
import ModalAuth from '../shared/components/modal-components/ModalAuth';

const HomeView = ({ history }) => {
    return (
        <div className="w-11/12 mx-auto my-3">
            <NewProduct />      
            {/* { hasRole(ROLE_ADMIN) && (
                <button className="btn btn-primary" onClick={() => history.push(URL_ADMIN_HOME)}>
                    Admin
                </button>
            )} */}
        </div>
    )
}

export default HomeView
