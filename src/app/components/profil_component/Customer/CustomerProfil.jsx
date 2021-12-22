import React from 'react';
import Profil from './customer/Profil';

const CustomerProfil = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='bg-nav-yellowClar'>
                <div className='w-11/12 mx-auto'>
                    <Profil />
                </div>
            </div>
        </div>
    );
};

export default CustomerProfil;