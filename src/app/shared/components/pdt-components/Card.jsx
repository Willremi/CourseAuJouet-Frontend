import React from "react";
import { Link } from "react-router-dom";
import { expirationProductDate } from "../../services/productServices";
import { URL_PRODUCT_DETAIL } from "./../../constants/urls/urlConstants";
import { addProductInCart } from "./../../services/cart";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const Card = ({ products }) => {
  const isLogged = useSelector(selectIsLogged);
  const expirationNewProductDate = expirationProductDate(
    products.on_sale_date,
    30
  );

  return (
    <>
      <fieldset className="w-4/5 sm:w-full h-full border-gray border-2 rounded-b-xl bg-white flex flex-col justify-between">
        {expirationNewProductDate ? (
          <legend className="rounded-full bg-secondary-100 ml-1 font-semibold border text-lg border-white text-nav-blue py-0.5 px-10">
            Nouveau
          </legend>
        ) : null}

        <Link to={URL_PRODUCT_DETAIL + products._id}>
          <img
            src={products.images[0]}
            alt={products.product_name}
            className="w-full h-full flex self-center p-2 rounded-b-xl border-b-4 border-gray-300 mx-auto shadow-md"
          />
        </Link>

        <div className=" flex flex-col space-y-1 font-medium p-2 justify-between h-full">
          <div className="w-64 truncate">
            <Link className="" to={URL_PRODUCT_DETAIL + products.product_code}>
              {products.product_name}
            </Link>

            <p className="uppercase font-normal text-gray-400">
              {products.trademark}
            </p>
          </div>

          <div className="flex flex-row justify-between items-center">
            <p className="text-2xl font-bold">{products.price / 100} €</p>

            {/* Bouton Ajout Panier */}
            <button
              onClick={
                isLogged
                  ? () => addProductInCart(products._id)
                  : () =>
                      console.log(
                        "Vous devez être connecté pour ajouter cet article"
                      )
              }
            >
              <ShoppingCartIcon className="h-12 w-12 md:h-10 md:w-10 text-yellow-400 cursor-pointer" />
            </button>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Card;
