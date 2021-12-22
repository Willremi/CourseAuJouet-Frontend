import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux';
import Routes from './Routes';
import { selectIsLogged } from './../shared/redux-store/authenticationSlice';
import IdleTimerCustom from './../components/account/IdleTimerCustom';
import Navbar from './../components/header/Navbar';
import ManagerAdministrationView from '../views/manager_views/ManagerAdministrationView';
import { hasRole } from '../shared/services/accountServices';
import { ROLE_MANAGER } from './../shared/constants/rolesConstant';

const contextClass = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
    warning: "bg-yellow-500",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
}

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 * 
 * @author Peter Mollet
 */
const RoutesWithNavigation = () => {
    
    const isLogged = useSelector(selectIsLogged)
    
    return (
        <BrowserRouter>
            <div>
                { isLogged && <IdleTimerCustom />}
                <Navbar />
                <main>
                    <Routes/>
                    {isLogged && hasRole(ROLE_MANAGER) ? <ManagerAdministrationView />: null} 
                </main>
                <ToastContainer 
                    toastClassName={({ type }) => contextClass[type || "default"] + 
                        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
                    }
                    bodyClassName={() => "text-sm font-white font-med block p-3"}
                    position="bottom-left"
                    autoClose={3000}
                />
            </div>
        </BrowserRouter>
    );
};

export default RoutesWithNavigation;