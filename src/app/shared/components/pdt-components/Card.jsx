import React from "react";
import { Link } from "react-router-dom";
import { expirationProductDate } from "../../services/productServices";
import { URL_PRODUCT_DETAIL } from "./../../constants/urls/urlConstants";
import { addProductInCart } from "./../../services/cart";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { AddToCart } from "../../redux-store/cartSlice";

const Card = ({ products }) => {
  const isLogged = useSelector(selectIsLogged);
  const expirationNewProductDate = expirationProductDate(
    products.on_sale_date,
    30
  );
  const dispatch = useDispatch()

  return (
    <>
      <div className="relative w-full h-full border-gray border-2 rounded-b-xl bg-white flex flex-col justify-between">
        {expirationNewProductDate ? (
          <span className="w-2/3 absolute -top-3 left-3 text-center rounded-full bg-secondary-100 font-semibold border text-lg border-white text-nav-blue">
            Nouveau
          </span>
        ) : null}

        <Link to={URL_PRODUCT_DETAIL + products._id}>
        
          <img
            src={products.images[0]}
            alt={products.product_name}
            className="w-full flex self-center p-2 rounded-b-xl border-b-4 border-gray-300 mx-auto shadow-md"
          />
        </Link>
        <div className="px-3 pt-3 pb-1 flex flex-col space-y-1 font-medium justify-between h-full">
          <div className="overflow-hidden flex flex-col">
            <div>
              <Link
                className="truncate"
                to={URL_PRODUCT_DETAIL + products._id}
              >
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
                    ? () => {
                      dispatch(AddToCart(products))
                      addProductInCart(products)}
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
        </div>
      </div>
    </>
  );
};

export default Card;

