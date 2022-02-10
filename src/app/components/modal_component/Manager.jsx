import React from "react";
import { Link } from "react-router-dom";
import { setComponent } from "../../shared/redux-store/ProfilSlice";
import {
  URL_ACCOUNT,
  URL_DASHBOARD,
  URL_LIST_OF_PRODUCT,
  URL_PROFIL
} from "../../shared/constants/urls/urlConstants";


const Manager = ({ handleSignOut, setShowModal }) => {

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold uppercase text-xl m-4 mt-10">Nom Prenom</h2>
      <Link
        to={URL_ACCOUNT}
        onClick={() => {
          setShowModal(false);
        }}
        className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10 w-full"
      >
        Mon compte
      </Link>
      <Link
        to={URL_DASHBOARD}
        onClick={() => {
         
          setShowModal(false);
        }}
        className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10"
      >
        Menu du manager
      </Link>
      <Link to={URL_PROFIL} 
            onClick={() => {
          // dispatch(setComponent(true))
          setShowModal(false)}} 
          className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10">Mon compte</Link>

      <Link
        onClick={() => {
          setShowModal(false)}}
        to={URL_LIST_OF_PRODUCT}
        className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10"
      >
        Gestion des produits
      </Link>
      <button
        className="w-1/3 mx-auto btn btn-yellow my-3"
        onClick={() => handleSignOut()}
      >
        Se déconnecter
      </button>
    </div>
  );
};

export default Manager;
