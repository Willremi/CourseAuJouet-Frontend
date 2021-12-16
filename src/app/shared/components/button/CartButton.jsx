import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetallProductInCart } from "../../../api/backend/cart";
import { selectIsLogged } from "../../redux-store/authenticationSlice"; 
import { selectInCart, setInCart } from "../../redux-store/cartSlice";
import { URL_CART } from './../../constants/urls/urlConstants';
import { accountId } from './../../services/accountServices';

const CartButton = () => {
  const isLogged = useSelector(selectIsLogged);
  const getInCart = useSelector(selectInCart); //Renvoi un tableau des produits
  const dispatch = useDispatch()

useEffect(() => {
  if(isLogged){
    var id =  accountId()
    GetallProductInCart(id)
  .then((res) => {
    dispatch(setInCart(res.data.cart))
  })
  .catch((err) => console.log(err))
  }
  
}, [dispatch, isLogged])

  return (
    <div>
      <Link
        to={URL_CART}
        className="flex flex-row mr-4 2xl:mr-10 cursor-pointer items-center sm:text-nav-yellow text-nav-blue opacity-100
        md:mr-10
        lg:mr-12
        xl:mr-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 md:w-8 md:h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {isLogged ? (
          <span className="text-black font-bold mt-6 -ml-4 bg-yellow-300 w-1 h-1 p-3 flex items-center justify-center rounded-full">
            {getInCart.length}
          </span>
        ) : null}
        
      </Link>
    </div>
  );
};

export default CartButton;
