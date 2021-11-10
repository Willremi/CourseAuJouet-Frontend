import React from 'react'
import { resetPassword } from '../api/backend/account'
import ForgotPassword from '../components/layouts/ForgotPassword'

const ForgotPasswordView = () => {

    const handlesubmit = (value) => {
        
        resetPassword(value)
        .then((res) => console.log(res.data.message))
        .catch((err) => console.log(err))
    }

    return (
        <div className="mt-40 text-center w-11/12 mx-auto space-y-3 border border-gray-300 shadow-2xl p-3
        xl:w-6/12
        2xl:w-4/12  ">
            <h2 className="text-2xl font-semibold">Mot de passe oublié</h2>
            <p>Saisissez l'adresse e-mail associé a votre compte La course au jouet.</p>
            <ForgotPassword submit={handlesubmit}/>
        </div>
    )
}

export default ForgotPasswordView
