import React from 'react';
import { register } from '../api/backend/account';
import Register from './../components/account/Register';

/**
 * View/Page Register
*/
 const RegisterView = () => {

const hangleRegistration = (values) => {
        console.log(values);
        register(values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
}
    return (
            <Register submit={hangleRegistration}/>
    );
};

export default RegisterView