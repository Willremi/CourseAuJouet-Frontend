import React from "react";
import { Link } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";
import { URL_PRODUCT_DETAIL } from "./../../shared/constants/urls/urlConstants";

const ProductInCart = ({ component, remove }) => {
  return (
    <div
      className="flex flex-row w-full justify-around h-32
       sm:bg-white sm:border-2 sm:border-gray-200 sm:rounded-xl sm:shadow-xl sm:items-center
       md:bg-white md:border-2 md:border-gray-200 md:rounded-xl md:shadow-xl"
    >
      <Link
        to={URL_PRODUCT_DETAIL + component._id}
        className="
      sm:w-3/6 sm:h-3/6 sm:border-0 
      md:w-2/6 md:border-0 
      border-secondary-100 border-4 rounded-xl flex justify-center bg-white "
      >
        <img src={component.images[0]} alt={component.product_name} 
        className="2xl:object-contain md:object-contain p-1"/>
      </Link>
      
      <div
        className="
      sm:1/2 sm:ml-0 sm:border-0 sm:shadow-none sm:h-auto sm:p-3
      md:1/2 m:ml-0 md:border-0 md:shadow-none md:h-auto md:p-3
      w-10/12 shadow-xl rounded-xl p-3 flex flex-col justify-between bg-white border-4 border-gray-200"
      >
        <div>
          <div className="flex justify-between font-semibold text-xl 
          sm:text-base sm:items-start 
          md:text-lg">
            <Link to={URL_PRODUCT_DETAIL + component._id} className="flex sm:truncate md:truncate">
              {component.product_name}
            </Link>
            <button onClick={() => remove(component._id)}>
              <XIcon className="w-6 h-6 text-gray-400 duration-300 hover:text-gray-700 
              sm:ml-1 
              md:ml-3"/>
            </button>
            
          </div>
          <p className="font-light text-base sm:text-base md:text-lg">
            {component.trademark}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="font-semibold text-xl sm:text-base md:text-lg">
            {component.price / 100}€
          </p>
          
          {/**
           * TODO Mettre le composant quantitée ici
           */}
           
           {/** Vérifier la disponibilité dans un futur ticket */}
          <p className="font-semibold text-yellow-600 text-xl sm:hidden md:text-lg">
            Disponible
          </p>
         

        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
