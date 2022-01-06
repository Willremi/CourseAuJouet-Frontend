import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomerLeftAside from '../../components/profil_component/Customer/CustomerLeftAside';
import CustomerRoute from '../../components/profil_component/Customer/CustomerRoute';
import { URL_DASHBOARD, URL_PROFIL } from '../../shared/constants/urls/urlConstants';

const CustomerView = () => {

    const location = useLocation()
    const [authorizedView, setAuthorizedView] = useState(false)

    useEffect(() => {
        const URL_CUSTOMER = [URL_PROFIL]

        if(URL_CUSTOMER.indexOf(location.pathname) !== -1) {
            setAuthorizedView(true)
        } else {
            setAuthorizedView(false)
        }
    }, [location.pathname])

    return (
        <>
        {authorizedView ? (
            <div className='flex flex-row'>
                <CustomerLeftAside />
                <div className='w-11/12 mx-10 my-5'>
                    <CustomerRoute />
                </div>
            </div>
        ) : null}
        </>
    );
};

export default CustomerView;