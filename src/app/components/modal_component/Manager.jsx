import React from "react";
import { Link } from "react-router-dom";
import { URL_DASHBOARD } from "../../shared/constants/urls/urlConstants";
import { useDispatch } from 'react-redux';
import { setComponent } from "../../shared/redux-store/ProfilSlice";

const Manager = ({ handleSignOut, setShowModal }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col">
        <h2 className="font-semibold uppercase text-xl m-4">Nom Prenom</h2>
        <Link
        onClick={() => {
          dispatch(setComponent("DashBoard"))
          setShowModal(false)}}
        to={URL_DASHBOARD}
        className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10"
        >
            Menu du manager
        </Link>
      <Link
        onClick={() => {
          dispatch(setComponent("Produits"))
          setShowModal(false)}}
        to={URL_DASHBOARD}
        className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10"
      >
        Gestion des produits
      </Link>
      <button className="btn btn-green" onClick={() => handleSignOut()}>
        Se déconnecter
      </button>
    </div>
  );
};

export default Manager;
