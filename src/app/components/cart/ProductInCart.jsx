import React from "react";
import { Link } from "react-router-dom";
import { URL_PRODUCT_DETAIL } from "./../../shared/constants/urls/urlConstants";

const ProductInCart = ({ component }) => {
  return (
    <div
      className="flex flex-row w-full justify-between h-36 
      sm:h-auto sm:bg-white sm:border-2 sm:border-gray-200 sm:rounded-xl sm:shadow-xl
      md:h-28 md:bg-white md:border-2 md:border-gray-200 md:rounded-xl md:shadow-xl"
    >
      <Link
        to={URL_PRODUCT_DETAIL + component._id}
        className="
      sm:w-2/6 sm:border-0 
      md:w-2/6 md:border-0 
      border-secondary-100 border-8 rounded-xl w-2/12 flex justify-center p-2 bg-white"
      >
        <img src={component.images[0]} alt={component.product_name} />
      </Link>
      <div
        className="
      sm:1/2 sm:ml-0 sm:border-0 sm:shadow-none sm:h-auto sm:p-3
      md:1/2 m:ml-0 md:border-0 md:shadow-none md:h-auto md:p-3
      w-10/12 shadow-xl rounded-xl p-5 flex flex-col ml-10 justify-between bg-white border-4 border-gray-200"
      >
        <div>
          <div className="flex items-center justify-between font-semibold text-2xl sm:text-lg sm:items-start md:text-lg">
            <Link to={URL_PRODUCT_DETAIL + component._id}>{component.product_name}</Link>
            <button className="text-gray-400 transition-all duration-300 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="font-light text-2xl sm:text-xl md:text-lg">
            {component.trademark}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="font-semibold text-3xl sm:text-xl md:text-lg">
            {component.price / 100}€
          </p>
          <p className="font-semibold text-yellow-600 text-2xl sm:hidden md:text-lg">
            Disponible
          </p>
          {/** Vérifier la disponibilité dans un futur ticket */}

          {/**
           * TODO Mettre le composant quantitée ici
           */}
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
