import React from 'react'
import ResetPassword from '../components/layouts/ResetPassword'

const ResetPasswordView = () => {
    return (
        <div className="mt-40 text-center w-11/12 mx-auto space-y-3 border border-gray-300 shadow-2xl p-3
        xl:w-6/12
        2xl:w-4/12  ">
            <h2 className="text-2xl font-semibold">Réinitialisation de votre mot de passe</h2>
            
            <ResetPassword />
        </div>
    )
}

export default ResetPasswordView
