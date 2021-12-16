import React from "react";
import ListOfProduct from "./manager/ListOfProduct";

const ManagerProduct = () => {


  return (
    <div className="w-full flex flex-col">
      <div className="bg-nav-yellow flex flex-row justify-between">
        <button className="py-3 w-full uppercase font-semibold text-lg border-l border-b shadow-md border-gray-400 text-gray-500">
          Ajouter un produit
        </button>
        <button className="py-3 w-full uppercase font-semibold text-lg border-l border-b shadow-md border-gray-400 text-gray-500">
          Modifier le produit
        </button>
        <button className="py-3 w-full uppercase font-semibold text-lg border-l border-b shadow-md border-gray-400 text-gray-500">
          Supprimer le produit
        </button>
      </div>
      <div className="bg-nav-yellowClar">
          <div className="w-11/12 mx-auto">
              {/* LIST OF PRODUCT */}
              <ListOfProduct />
              {/* SEARCH PRODUCT   */}
          </div>
        
      </div>
    </div>
  );
};

export default ManagerProduct;
