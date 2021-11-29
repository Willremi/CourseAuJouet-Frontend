import React from "react";
import { Link } from "react-router-dom";
import { expirationProductDate } from "../../services/productServices";
import { URL_PRODUCT_DETAIL } from "./../../constants/urls/urlConstants";
import { accountId } from "../../services/accountServices";
import { AddToCart } from "../../../api/backend/cart";

/**
 * expirationProductDate()
 * fonction qui verifie la date du produit et retourne true s'il est valide ou false s'il est expiré
 * @param {Date} param0 
 * @param {Number} param1
 * @author Mathieu 
 */

const Card = ({ products }) => {

  const expirationNewProductDate = expirationProductDate(products.products.on_sale_date, 30);

  const userid = accountId();

  const addCart = (e) => {
    // e.preventDefault();
    const id = e.target.id
    AddToCart({ id, userid }).then(res =>
      console.log(res))
  }

  return (
    <>
      <fieldset className="w-4/5 sm:w-screen-90 h-full border-gray border-2 rounded-b-xl">
        {expirationNewProductDate ? <legend className="rounded-full bg-secondary-100 ml-1 font-semibold border text-lg border-white text-nav-blue py-0.5 px-10">
          Nouveau
        </legend> : null}

        <Link to={URL_PRODUCT_DETAIL + products.products._id}>
          <img
            src={products.products.images[0]}
            alt={products.products.product_name}
            className="w-full h-auto flex self-center p-2 rounded-b-xl border-b-4 border-gray-300 mx-auto shadow-md"
          />
        </Link>

        <div className="flex flex-col space-y-1 font-medium p-2 ">
          <Link to={URL_PRODUCT_DETAIL + products.products._id}>
            <p>{products.products.product_name}</p>
          </Link>

          <p className="uppercase font-normal text-gray-400">
            {products.products.trademark}
          </p>

          <div className="flex flex-row justify-between">
            <p id="prix" className=" w-20">{products.products.price / 100} €</p>

          {/* Bouton Ajout Panier */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 md:h-10 md:w-10 text-yellow-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" id={products.products._id} onClick={addCart}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Card;
