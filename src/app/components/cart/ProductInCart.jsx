import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { XIcon } from "@heroicons/react/solid";
import { URL_PRODUCT_DETAIL } from "./../../shared/constants/urls/urlConstants";
import { decrement, increment } from "../../shared/redux-store/cartSlice";

const ProductInCart = ({ component, remove }) => {
  const count = useSelector(state => state.cart.product)
  const prix = useSelector(state => state.cart.price)
  const dispatch = useDispatch()

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
              <XIcon className="w-6 h-6 sm:ml-1 text-gray-400 duration-300 hover:text-gray-700"/>
            </button>
            
          </div>
          <p className="font-light text-2xl sm:text-base md:text-lg">
            {component.trademark}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="font-semibold text-3xl sm:text-base md:text-lg">
            {component.price / 100}€
          </p>
          <p className="font-semibold text-yellow-600 text-2xl sm:hidden md:text-lg">
            Disponible
          </p>
          
          <span>{prix * count}€</span>
          <span>{component.stock - count}</span>
          <p className="font-semibold">
            Quantité :
            <button className="rounded-lg mx-1 px-1 py-1 bg-blue-500 text-blue-100" onClick={() => dispatch(decrement())}>-</button>
            <label>{count}</label>
            <button className="rounded-lg mx-1 px-1 py-1 bg-blue-500 text-blue-100" onClick={() => dispatch(increment())}>+</button>
          </p>
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
