import React, { useState } from "react";
import { resetPassword } from "../api/backend/account";
import ForgotPassword from "../components/layouts/ForgotPassword";

const ForgotPasswordView = () => {
  const [sendEmail, setSendEmail] = useState(false);
  const handlesubmit = (value) => {
    resetPassword(value)
      .then((res) => {
        console.log(res.data.message);
        setSendEmail(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="mt-40 text-center w-11/12 mx-auto space-y-3 border border-gray-300 shadow-2xl p-3
        xl:w-6/12
        2xl:w-4/12  "
    >
      <h2 className="text-2xl font-semibold">Mot de passe oublié</h2>
      <p>
        Saisissez l'adresse e-mail associé a votre compte La course au jouet.
      </p>
      <ForgotPassword submit={handlesubmit} />
      {sendEmail ?
       <div className="sm:w-full md:w-full animate-FadeIn text-center  bg-green-700 text-white font-bold w-1/2 p-2 mx-auto rounded-lg">
       <p>Votre réinitiallisation de votre mot de passe a bien été prise en compte.</p>
       <p>
         Veuillez vérifier vos emails afin de procéder au changement du nouveau mot de passe
       </p>
     </div>
       : null}
    </div>
  );
};

export default ForgotPasswordView;
