import React from 'react'
import ResetPassword from '../components/layouts/ResetPassword'
import { useParams } from 'react-router-dom';
import { validResetPassword } from '../api/backend/account';
import { URL_ADMIN_HOME } from '../shared/constants/urls/urlConstants';

const ResetPasswordView = ({ history }) => {
    const id = useParams()
    const handleResetPassword = (values) => {
        console.log(id.token);
        validResetPassword(id.token, values)
        .then((res) => {
            console.log(res.data.message);
            history.push(URL_ADMIN_HOME)
        })
        .catch((error) => console.log(error))
        
    }

    return (
        <div className="mt-40 text-center w-11/12 mx-auto space-y-3 border border-gray-300 shadow-2xl p-3
        xl:w-6/12
        2xl:w-4/12  ">
            <h2 className="text-2xl font-semibold">Réinitialisation de votre mot de passe</h2>
            
            <ResetPassword submit={handleResetPassword}/>
        </div>
    )
}

export default ResetPasswordView
