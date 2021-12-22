import React from 'react';
import { accountUser } from '../../../../shared/services/accountServices';

const Profil = () => {
    const user = accountUser()
    return (
        <>
            <h2 className='text-nav-blue font-semibold uppercase text-xl'>Données personnelles</h2>
            {/* <p>{user.civility}</p> */}
            <p>Prénom : {user.firstname}</p>
            <p>Nom : {user.lastname}</p>
            <p>Date de naissance : {user.birthday_date}</p>
            <p>Email : {user.email}</p>
            <p>Téléphone : {user.phone === null ? 'non renseigné' : user.phone}</p>
        </>
    );
};

export default Profil;