import React from "react";
import { setComponent } from "../../../shared/redux-store/ProfilSlice";
import ListOfProduct from "./manager/ListOfProduct";
import AddNewProduct from './manager/AddNewProduct';

const ManagerProduct = ({selectMenu, dispatch}) => {

  return (
    <div className="w-full flex flex-col">
      <div className="bg-nav-yellow flex flex-row justify-between">
        <button 
        type="button"
        onClick={() => dispatch(setComponent("Add Product"))}
        className="py-3 w-full uppercase font-semibold text-lg border-l border-b shadow-md border-gray-400 text-gray-500">
          Ajouter un produit
        </button>
        <button
        type="button"
        className="py-3 w-full uppercase font-semibold text-lg border-l border-b shadow-md border-gray-400 text-gray-500">
          Modifier le produit
        </button>
        <button
        type="button"
        className="py-3 w-full uppercase font-semibold text-lg border-l border-b shadow-md border-gray-400 text-gray-500">
          Supprimer le produit
        </button>
      </div>
      <div className="bg-nav-yellowClar">
          <div className="w-11/12 mx-auto">
              {/* LIST OF PRODUCT */}
              {selectMenu === "Produits" ? <ListOfProduct dispatch={dispatch}/> : null}

              {/* ADD ONE PRODUCT */}
              {selectMenu === "Add Product" ? <AddNewProduct />: null}
              {/* SEARCH PRODUCT   */}
          </div>
        
      </div>
    </div>
  );
};

export default ManagerProduct;
