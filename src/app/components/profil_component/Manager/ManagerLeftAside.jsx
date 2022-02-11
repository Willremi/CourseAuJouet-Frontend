import React from "react";
import { Icon } from '@iconify/react';
import { NavLink } from "react-router-dom";
import { URL_DASHBOARD, URL_LIST_OF_PRODUCT, URL_MANAGER_ORDER, URL_BACK_TO_STORE, URL_MANAGER_MESSAGE, URL_MANAGER_STATISTIQUES, URL_MANAGER_SETTINGS, URL_PROFIL } from "../../../shared/constants/urls/urlConstants";

const ManagerLeftAside = () => {

  return (
    <aside className="bg-nav-yellow h-screen w-60 flex flex-col text-center text-gray-600 pt-16
    sm:hidden
    md:hidden
    ">
      <NavLink
        to={URL_DASHBOARD}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}>
        <Icon icon="bx:bxs-dashboard" className="text-cyan-100 mr-2 scale-150" />Dashboard
      </NavLink>
      <NavLink
        to={URL_PROFIL}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}
      >
        <Icon icon="healthicons:ui-user-profile" className="text-cyan-100 mr-2 scale-150 hidden xl:block" />Mon profil
      </NavLink>
      <NavLink
        to={URL_LIST_OF_PRODUCT}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}>
        <Icon icon="bi:basket-fill" className="text-cyan-100 mr-2 scale-150" />Produits
      </NavLink>

      <NavLink
        to={URL_MANAGER_ORDER}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}>
        <Icon icon="icon-park-outline:transaction-order" className="text-cyan-100 mr-2 scale-150" />Commandes
      </NavLink>

      <NavLink
        to={URL_BACK_TO_STORE}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}>
        <Icon icon="tabler:truck-return" className="text-cyan-100 mr-2 scale-150" />Retours
      </NavLink>

      <NavLink
        to={URL_MANAGER_MESSAGE}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}>
        <Icon icon="mdi:android-messages" className="text-cyan-100 mr-2 scale-150" />Messages
      </NavLink>
      <NavLink
        to={URL_MANAGER_STATISTIQUES}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}>
        <Icon icon="icomoon-free:stats-dots" className="text-cyan-100 mr-2 scale-150" />Statistiques
      </NavLink>
      <NavLink
        to={URL_MANAGER_SETTINGS}
        activeClassName='bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400'
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200`}>
        <Icon icon="ci:settings-filled" className="text-cyan-100 mr-2 scale-150" />Paramètres
      </NavLink>
    </aside>
  );
};

export default ManagerLeftAside;
