import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLogged,
  signOut,
} from "../../shared/redux-store/authenticationSlice";
import { hasRole } from "../../shared/services/accountServices";
import { getPayloadToken } from "../../shared/services/tokenServices";
import { getLocalWishlist } from "../../shared/services/wishlistService";
//imports pour le formLogin
import LoginView from "../../views/LoginView";
import Customer from "../modal_component/Customer";
import Account from "../modal_component/Account";
import Manager from "../modal_component/Manager";
import {
  ROLE_CUSTOMER,
  ROLE_MANAGER,
} from "./../../shared/constants/rolesConstant";

/* Ce bouton fait apparaitre un modal ou l'on rassemblera le formulaire de login, le lien pour
s'inscrire et le lien pour le mot de passe oublié.

This button shows a modal where we will gather the login form, the link for
register and the link for the forgotten password.
*/

function MyAccountButton() {
  const isLogged = useSelector(selectIsLogged);
  const [showModal, setShowModal] = useState(false);
  const [User, setUser] = useState();
  const wishlist = getLocalWishlist()
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    setShowModal(false);
  };

  
  useEffect(() => {
    if(isLogged){
      setUser(getPayloadToken())
    }
    else {
      setUser(undefined)
    }
  }, [isLogged]);
  
  // console.log(User);

  return (
    <>
      <button
        className="w-auto cursor-pointer flex flex-row items-center sm:text-nav-yellow text-nav-blue opacity-100"
        onClick={() => setShowModal(!showModal)}
      >
        
        {User ? <p className="w-full truncate text-left font-semibold font-Annie text-2xl text-secondary-400 duration-300 hover:text-secondary-600">Bonjour {User.firstName} !</p>
        
        : <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 md:w-8 md:h-8"
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
        </svg> }
      </button>

      {/* condition pour qui verifie la constante showmodal avec sa valeur boléenne,
      true => le modal s'affiche
      false => le modal se ferme */}

      <>
        <div
          className={`transition-all duration-500 bg-nav-blueClar absolute top-16 left-0 w-screen 

             ${showModal
              ? "xl:h-screen xl:bg-gray-800 xl:bg-opacity-50 xl:pr-36 xl:z-40 xl:top-28 xl:mt-3"
              : "xl:h-0 overflow-hidden"
            }
             
            `}
        >
          <div
            className={`w-full relative bg-white h-6/12 z-40

            md:w-5/6 md:h-auto md:mx-auto md:mt-10 md:transition-all md:duration-500 ${showModal ? null : "md:h-0"
              }
            lg:w-2/6 lg:h-screen lg:float-right lg:mr-12 lg:transition-all lg:duration-500 ${showModal ? null : "lg:h-0"
              }
            xl:w-2/6 xl:h-screen xl:float-right xl:mr-12 xl:transition-all xl:duration-500 ${showModal ? null : "xl:h-0"
              }
            2xl:w-2/6 2xl:h-screen 2xl:float-right 2xl:mr-12 2xl:transition-all 2xl:duration-500 ${showModal ? null : "2xl:h-0"
              }`}
          >
            {/* Bouton croix pour fermer le modal */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-3 transition-all opacity-50 overflow-hidden hover:opacity-100"
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
            <div>
              {isLogged ? (
                <>
                  {hasRole(ROLE_MANAGER) ? (
                    <Manager
                      handleSignOut={handleSignOut}
                      setShowModal={setShowModal}
                    />
                  ) : null}
                  {hasRole(ROLE_CUSTOMER) ? (
                    <div className="flex flex-col">
                      <Account
                      setShowModal={setShowModal} />
                      <button
                        className="w-1/3 mx-auto btn btn-yellow my-3"
                        onClick={() => handleSignOut()}
                      >
                        Se déconnecter
                      </button>
                    </div>
                  ) : null}                  
                </>
              ) : (
                <LoginView hideModal={setShowModal} />
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default MyAccountButton;
