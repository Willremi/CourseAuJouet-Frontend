import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/solid";
import { URL_PRODUCT_DETAIL } from "./../../shared/constants/urls/urlConstants";
import { decrement, increment, selectQuantity } from "../../shared/redux-store/cartSlice";

const ProductInCart = ({ component, remove, index }) => {

  const cart = useSelector(selectQuantity);
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-row w-full justify-around h-32
       sm:bg-white sm:border-2 sm:border-gray-200 sm:rounded-xl sm:shadow-xl sm:items-center
       md:bg-white md:border-2 md:border-gray-200 md:rounded-xl md:shadow-xl"
    >
      <Link
        to={URL_PRODUCT_DETAIL + component._id}
        className="
        
      sm:w-2/6 sm:h-3/6 sm:border-0 
      md:w-2/6 md:border-0 
      w-2/12 border-secondary-100 border-4 rounded-xl flex justify-center bg-white "
      >
        <img src={component.images[0]} alt={component.product_name} 
        className="2xl:object-contain md:object-contain p-1"/>
      </Link>

      <div
        className="
      sm:1/2 sm:ml-0 sm:border-0 sm:shadow-none sm:h-auto sm:p-3
      md:1/2 m:ml-0 md:border-0 md:shadow-none md:h-auto md:p-3
      w-9/12 shadow-xl rounded-xl p-3 flex flex-col justify-between bg-white border-4 border-gray-200"
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
          <p className="font-semibold text-3xl sm:text-base md:text-lg">
            {cart ? (cart[index].quantity * component.price) / 100 : null}€
          </p>
          <p className="font-semibold text-yellow-600 text-2xl sm:hidden md:text-lg">
            Disponible
          </p>

          {/* Quantité - Rémi */}
          <div className="font-semibold flex">
            <p className="font-semibold text-2xl sm:text-base md:text-lg mr-1 xl:mr-2">Qté :</p>

            <div className="flex border-2 border-yellow-500 rounded-full px-1 xl:px-2">
              <MinusIcon className="w-5 text-yellow-500 cursor-pointer hover:text-yellow-200" onClick={() => dispatch(decrement(index))} />
              <span className="text-base md:text-lg lg:text-xl xl:text-xl px-3 xl:px-4">{cart ? cart[index].quantity : null}</span>
              <PlusIcon className="w-5 text-yellow-500 cursor-pointer hover:text-yellow-200" onClick={() => dispatch(increment(index))} />
            </div>

          </div>

          {/** Vérifier la disponibilité dans un futur ticket */}

        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
