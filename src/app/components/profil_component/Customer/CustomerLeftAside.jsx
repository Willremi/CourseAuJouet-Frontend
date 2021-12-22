import { Icon } from '@iconify/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL_DASHBOARD } from '../../../shared/constants/urls/urlConstants';

const CustomerLeftAside = () => {
    return (
        <aside className="bg-nav-yellow h-screen w-60 flex flex-col text-center text-gray-600 pt-16">
            <NavLink
            to={URL_DASHBOARD}
            activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
            className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}
            >
                <Icon icon="bx:bxs-dashboard" className="text-cyan-100 mr-2 scale-150" />Dashboard
            </NavLink>
        </aside>
    );
};

export default CustomerLeftAside;