import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { XIcon } from "@heroicons/react/solid";
import { URL_PRODUCT_DETAIL } from "./../../shared/constants/urls/urlConstants";
import { decrement, increment, selectQuantity } from "../../shared/redux-store/cartSlice";


const ProductInCart = ({ component, remove, index }) => {

  const cart = useSelector(selectQuantity);
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-row w-full justify-between h-auto 
       sm:bg-white sm:border-2 sm:border-gray-200 sm:rounded-xl sm:shadow-xl sm:items-center
       md:bg-white md:border-2 md:border-gray-200 md:rounded-xl md:shadow-xl"
    >
      <Link
        to={URL_PRODUCT_DETAIL + component._id}
        className="
      sm:w-3/6 sm:h-3/6 sm:border-0 
      md:w-2/6 md:border-0 
      border-secondary-100 border-8 rounded-xl w-2/12 flex justify-center p-2 bg-white "
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
          <div className="flex justify-between font-semibold text-2xl sm:text-base sm:items-start md:text-lg">
            <Link to={URL_PRODUCT_DETAIL + component._id} className="flex">
              {component.product_name}
            </Link>
            <button onClick={() => remove(component._id)}>
              <XIcon className="w-6 h-6 sm:ml-1 text-gray-400 duration-300 hover:text-gray-700" />
            </button>

          </div>
          <p className="font-light text-2xl sm:text-base md:text-lg">
            {component.trademark}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="font-semibold text-3xl sm:text-base md:text-lg">
            {cart ? (cart[index].quantity * component.price) / 100 : null}€
          </p>
          <p className="font-semibold text-yellow-600 text-2xl sm:hidden md:text-lg">
            Disponible
          </p>

          {/* Quantité */}
          <div className="font-semibold flex">
          <p className="text-lg lg:text-2xl xl:text-2xl">Qté :</p>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 lg:h-9 lg:w-9 xl:h-8 xl:w-8 text-yellow-500 xl:ml-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => dispatch(decrement(index))}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <span className="px-4 border-2 border-yellow-500 rounded border-opacity-85 md:h-7 xl:h-8">{cart ? cart[index].quantity : null}</span>

          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 lg:h-9 lg:w-9 xl:h-8 xl:w-8 text-yellow-500 cursor-pointer" viewBox="0 0 20 20" fill="currentColor" onClick={() => dispatch(increment(index))}>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          </div>
          {/** Vérifier la disponibilité dans un futur ticket */}

          {/**
           * TODO Mettre le composant quantité ici
           */}
          

        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
