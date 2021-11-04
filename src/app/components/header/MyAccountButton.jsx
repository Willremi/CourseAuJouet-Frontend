import React, { useState } from "react";

/* Ce bouton fait apparaitre un modal ou l'on rassemblera le formulaire de login, le lien pour
s'inscrire et le lien pour le mot de passe oublié.

This button shows a modal where we will gather the login form, the link for
register and the link for the forgotten password.
*/

function MyAccountButton() {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer flex flex-row items-center mr-4 text-yellow-500 transition-all opacity-50 hover:opacity-100"
        onClick={() => setShowModal(!showModal)}
      >
        {window.innerWidth <= 504 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
          <span>Mon compte</span>
          </>
        )}
      </button>

      {/* condition pour qui verifie la constante showmodal avec sa valeur boléenne,
      true => le modal s'affiche
      false => le modal se ferme */}
      
        <>
          <div
            className={`transition-all duration-500 absolute z-20 top-20 w-screen ${ showModal ? 'h-72' : 'h-0'}
            ${ showModal ? 'md:h-screen md:bg-gray-800 md:bg-opacity-50 md:z-0 md:top-20' : 'md:h-0'}
            ${ showModal ? 'lg:h-screen lg:bg-gray-800 lg:bg-opacity-50 lg:z-0 lg:top-20' : 'lg:h-0'}
             ${ showModal ? 'xl:h-screen xl:bg-gray-800 xl:bg-opacity-50 xl:pr-36 xl:z-0 xl:top-20' : 'xl:h-0'}
             ${ showModal ? '2xl:h-screen 2xl:bg-gray-800 2xl:bg-opacity-50 2xl:pr-36 2xl:z-0 2xl:top-20' : '2xl:h-0'}
            `}
          >
            <div className={`w-full relative bg-white h-full
            md:w-5/6 md:h-2/6 md:mx-auto md:mt-10 md:transition-all md:duration-500 ${showModal ? null : "md:h-0"}
            lg:w-2/6 lg:h-screen lg:float-right lg:mr-12 lg:transition-all lg:duration-500 ${showModal ? null : "lg:h-0"}
            xl:w-3/6 xl:h-screen xl:float-right xl:mr-12 xl:transition-all xl:duration-500 ${showModal ? null : "xl:h-0"}
            2xl:w-2/6 2xl:h-screen 2xl:float-right 2xl:mr-12 2xl:transition-all 2xl:duration-500 ${showModal ? null : "2xl:h-0"}`}>
              
              {/* Bouton pour fermer le modal */}
               <button
                onClick={() => setShowModal(false)}
                className={`${showModal ? 'absolute top-2 right-2 transition-all opacity-50 hover:opacity-100' : 'hidden'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
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
              {/* FIN bouton fermer le modal */}

              {/*
            
             Mettre les futurs composants ici ! 
            
            */}
            </div>
          </div>
        </>
    </>
  );
}

export default MyAccountButton;
