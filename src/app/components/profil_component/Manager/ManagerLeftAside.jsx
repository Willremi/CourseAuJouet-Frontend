import React from "react";
import { Icon } from '@iconify/react';
import { setComponent } from "../../../shared/redux-store/ProfilSlice";

const ManagerLeftAside = ({selectMenu, dispatch}) => {
    


  return (
    <aside className="bg-nav-yellow h-screen w-60 flex flex-col text-center text-gray-600 pt-16">
      <button 
      onClick={() => dispatch(setComponent("DashBoard"))}
      className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "DashBoard" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}>
        <Icon icon="bx:bxs-dashboard" className="text-cyan-100 mr-2 scale-150" />Dashboard
      </button>
      <button
      onClick={() => dispatch(setComponent("Produits"))}
      className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "Produits" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}>
      
        <Icon icon="bi:basket-fill" className="text-cyan-100 mr-2 scale-150"/>Produits
      </button>
      <button
       onClick={() => dispatch(setComponent("Commandes"))}
       className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "Commandes" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}>
      
        <Icon icon="icon-park-outline:transaction-order" className="text-cyan-100 mr-2 scale-150"/>Commandes
      </button>
      <button
        onClick={() => dispatch(setComponent("Retours"))}
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "Retours" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}
      >
        <Icon icon="tabler:truck-return" className="text-cyan-100 mr-2 scale-150"/>Retours
      </button>

      <button
        onClick={() => dispatch(setComponent("Messages"))}
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "Messages" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}
      >
        <Icon icon="mdi:android-messages" className="text-cyan-100 mr-2 scale-150"/>Messages
      </button>
      <button
        onClick={() => dispatch(setComponent("Statistiques"))}
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "Statistiques" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}
      >
        <Icon icon="icomoon-free:stats-dots" className="text-cyan-100 mr-2 scale-150"/>Statistiques
      </button>
      <button
        onClick={() => dispatch(setComponent("Parametres"))}
        className={`flex flex-row justify-center items-center border-b-2 border-blue-200 py-4 font-semibold hover:bg-secondary-200  ${selectMenu === "Parametres" ? 'bg-secondary-300 hover:bg-secondary-300 text-white border-blue-400' : ''}`}
      >
        <Icon icon="ci:settings-filled" className="text-cyan-100 mr-2 scale-150"/>Paramètres
      </button>
    </aside>
  );
};

export default ManagerLeftAside;
