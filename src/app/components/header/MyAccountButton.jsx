import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLogged,
  signOut,
} from "../../shared/redux-store/authenticationSlice";
//imports pour le formLogin
import LoginView from "../../views/LoginView";

/* Ce bouton fait apparaitre un modal ou l'on rassemblera le formulaire de login, le lien pour
s'inscrire et le lien pour le mot de passe oublié.

This button shows a modal where we will gather the login form, the link for
register and the link for the forgotten password.
*/

function MyAccountButton() {
  const isLogged = useSelector(selectIsLogged);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut())
    setShowModal(false)
  }

  return (
    <>
      <button
        className="cursor-pointer flex flex-row items-center mr-4 sm:text-nav-yellow text-nav-blue opacity-100"
        onClick={() => setShowModal(!showModal)}
      >
       
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
       
      </button>

      {/* condition pour qui verifie la constante showmodal avec sa valeur boléenne,
      true => le modal s'affiche
      false => le modal se ferme */}

      <>
        <div
          className={`transition-all duration-500 bg-nav-blueClar absolute overflow-scroll z-40 top-16 left-0 w-screen ${
            showModal ? "h-screen overflow-hidden" : "h-0 overflow-hidden"
          }
            ${
              showModal
                ? "md:h-screen md:bg-gray-800 md:bg-opacity-50 md:top-0"
                : "md:h-0 overflow-hidden"
            }
            ${
              showModal
                ? "lg:h-screen lg:bg-gray-800 lg:bg-opacity-50 lg:z-0 lg:top-40"
                : "lg:h-0 overflow-hidden"
            }
             ${
               showModal
                 ? "xl:h-screen xl:bg-gray-800 xl:bg-opacity-50 xl:pr-36 xl:z-0 xl:top-28 xl:mt-3"
                 : "xl:h-0 overflow-hidden"
             }
             ${
               showModal
                 ? "2xl:h-screen 2xl:bg-gray-800 2xl:bg-opacity-50 2xl:pr-36 2xl:z-0 2xl:top-28 2xl:mt-2 "
                 : "2xl:h-0 overflow-hidden"
             }
            `}
        >
          <div
            className={`w-full relative bg-white h-6/12 overflow-scroll

            md:w-5/6 md:h-auto md:mx-auto md:mt-10 md:transition-all md:duration-500 ${
              showModal ? null : "md:h-0"
            }
            lg:w-2/6 lg:h-screen lg:float-right lg:mr-12 lg:transition-all lg:duration-500 ${
              showModal ? null : "lg:h-0"
            }
            xl:w-2/6 xl:h-screen xl:float-right xl:mr-12 xl:transition-all xl:duration-500 ${
              showModal ? null : "xl:h-0"
            }
            2xl:w-2/6 2xl:h-screen 2xl:float-right 2xl:mr-12 2xl:transition-all 2xl:duration-500 ${
              showModal ? null : "2xl:h-0"
            }`}
          >
            {/* Bouton croix pour fermer le modal */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 transition-all opacity-50 overflow-hidden hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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

            {/*partie login*/}
            <div className="p-5">
              {isLogged ? (
                <button
                  className="ml-8 btn btn-green"
                  onClick={() => handleSignOut()
                  }
                >
                  Se déconnecter
                </button>
              ) : (
                <LoginView hideModal={setShowModal}/>
              )}
            </div>

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
