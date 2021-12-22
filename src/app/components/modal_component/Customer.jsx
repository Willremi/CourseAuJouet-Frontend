import React from 'react';
import { useDispatch } from 'react-redux';
import { URL_DASHBOARD } from '../../shared/constants/urls/urlConstants';
import { setComponent } from '../../shared/redux-store/ProfilSlice';
import { accountUser } from '../../shared/services/accountServices';
import { Link } from 'react-router-dom';

const Customer = ({setShowModal}) => {
    const user = accountUser()
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col'>
            <h2 className='font-semibold uppercase text-xl m-4'>{user.lastname} {user.firstname}</h2>
            <Link to={URL_DASHBOARD} onClick={() => {
          dispatch(setComponent("DashBoard"))
          setShowModal(false)}} className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10">Informations du compte</Link>
        </div>
    );
};

export default Customer;