import React from 'react';
import { register } from '../api/backend/account';
import Register from './../components/account/Register';
import { useState } from 'react';

/**
 * View/Page Register
*/
 const RegisterView = () => {

const [sendEmail, setSendEmail] = useState(false)

const hangleRegistration = (values) => {
        
        register(values)
        .then((res) => {console.log(res.data.message);
        setSendEmail(true);})
        .catch((error) => console.log(error));
}
    return (
            <Register email={sendEmail} submit={hangleRegistration}/>
    );
};

export default RegisterView