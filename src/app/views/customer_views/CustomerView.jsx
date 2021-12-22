import React from 'react';
import { useSelector } from 'react-redux';
import CustomerLeftAside from '../../components/profil_component/Customer/CustomerLeftAside';
import CustomerProfil from '../../components/profil_component/Customer/CustomerProfil';
import { ROLE_CUSTOMER } from '../../shared/constants/rolesConstant';
import { selectComponent } from '../../shared/redux-store/ProfilSlice';
import { hasRole } from '../../shared/services/accountServices';

const CustomerView = () => {
    const selectMenu = useSelector(selectComponent)
    return (
        <div className='flex flex-row'>
            {hasRole(ROLE_CUSTOMER) && 
            <>
                <CustomerLeftAside selectMenu={selectMenu} />
                <CustomerProfil />
            </>
            }
        </div>
    );
};

export default CustomerView;