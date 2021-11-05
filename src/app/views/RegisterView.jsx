import React from 'react';
import { register } from '../api/backend/account';
import Register from './../components/account/Register';

/**
 * View/Page Register
*/
 const RegisterView = () => {

        const handleRegister = (values) => {
                register(values)
        }
    return (
            <Register submit={ handleRegister } />
    );
};

export default RegisterView