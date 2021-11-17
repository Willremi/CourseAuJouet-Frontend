import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLogged } from "../../redux-store/authenticationSlice"; 
import { accountId } from "../../services/accountServices"; 
import { GetallProductInCart } from './../../../api/backend/cart';

const CartButton = () => {
  const [count, setCount] = useState(null); // state qui enregistre le nombre d'éléments dans le panier
  const isLogged = useSelector(selectIsLogged);
  useEffect(() => {
    //Si l'utilisateur est connecté on va rechercher dans la BDD si son panier contient des articles
    if (isLogged) {
      const id = accountId();
      GetallProductInCart(id) // mettre l'id de l'utilisateur quand le token sera dans le localstorage sera terminé
        .then((res) => {
          
          setCount(Object.keys(res.data.cart).length);

        })
        .catch((error) => console.log(error));
        
    }
  }, [isLogged, count]);

  return (
    <div>
      <Link
        to="/cart/:id"
        className="flex flex-row mr-4 2xl:mr-10 cursor-pointer items-center sm:text-nav-yellow text-nav-blue opacity-100
        md:mr-10
        lg:mr-12
        xl:mr-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
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
            {count}
          </span>
        ) : null}
        
      </Link>
    </div>
  );
};

export default CartButton;
