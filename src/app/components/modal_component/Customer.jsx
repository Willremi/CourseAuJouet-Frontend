import React from 'react';
import { URL_PROFIL } from '../../shared/constants/urls/urlConstants';
import { accountUser } from '../../shared/services/accountServices';
import { Link } from 'react-router-dom';

const Customer = ({setShowModal}) => {
    const user = accountUser()
    return (
        <div className='flex flex-col mt-10'>
            {/* <h2 className='font-semibold uppercase text-xl m-4'>{user.lastname} {user.firstname}</h2> */}
            <Link to={URL_PROFIL} 
            onClick={() => {
          setShowModal(false)}} 
          className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10">Mon compte</Link>
        </div>
    );
};

export default Customer;