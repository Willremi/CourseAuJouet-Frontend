import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setComponent } from '../../../shared/redux-store/ProfilSlice';

const CustomerLeftAside = ({ selectMenu }) => {
    const dispatch = useDispatch()
    return (
        <aside className="bg-nav-yellow h-screen w-60 flex flex-col text-center text-gray-600 pt-16">
            <button
                onClick={() => dispatch(setComponent("DashBoard"))}
                className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "DashBoard" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}>
                <Icon icon="bx:bxs-dashboard" className="text-cyan-100 mr-2 scale-150" />Dashboard
            </button>
            <button
                onClick={() => dispatch(setComponent("Commandes"))}
                className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "Commandes" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}>

                <Icon icon="icon-park-outline:transaction-order" className="text-cyan-100 mr-2 scale-150" />Commandes
            </button>
        </aside>
    );
};

export default CustomerLeftAside;