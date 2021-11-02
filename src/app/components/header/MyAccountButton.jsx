import React, { useState } from "react";

/* Ce bouton fait apparaitre un modal ou l'on rassemblera le formulaire de login, le lien pour
s'inscrire et le lien pour le mot de passe oublié.

This button shows a modal where we will gather the login form, the link for
register and the link for the forgotten password.
*/

function MyAccountButton() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button onClick={() => handleClose()}>Mon compte</button>
      {showModal ? (
        <>
          <div className="absolute w-screen opacity-50 bg-gray-800 pr-36">
            <div className="bg-white h-screen w-4/12 float-right">
              <button className="absolute top-5 right-40 transition-all opacity-50 hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default MyAccountButton;
