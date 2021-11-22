import React from "react";
import { Link } from "react-router-dom";
import { expirationProductDate } from "../../services/productServices";
import { URL_PRODUCT_DETAIL } from "./../../constants/urls/urlConstants";

/**
 * expirationProductDate()
 * fonction qui verifie la date du produit et retourne true s'il est valide ou false s'il est expiré
 * @param {Date} param0 
 * @param {Number} param1
 * @author Mathieu 
 */

const Card = ({ products }) => {

  const expirationDate = expirationProductDate(products.products.on_sale_date, 30)

  return (
    <>
      <div className="w-4/5 h-auto border-gray border-2 rounded-b-xl">
        { expirationDate ? <span className="absolute rounded-full bg-secondary-100 -mt-2 ml-1 font-semibold border text-lg border-white text-nav-blue py-0.5 px-10">
          Nouveau
        </span> : null }

        <Link to={URL_PRODUCT_DETAIL + products.products.product_code}>
          <img
            src={products.products.images[0]}
            alt={products.products.product_name}
            className="w-full h-auto flex self-center p-2 rounded-b-xl border-b-4 border-gray-300 mx-auto shadow-md"
          />
        </Link>

        <div className="flex flex-col space-y-1 font-medium p-2 ">
          <Link to={URL_PRODUCT_DETAIL + products.products.product_code}>
            <p>{products.products.product_name}</p>
          </Link>

          <p className="uppercase font-normal text-gray-400">
            {products.products.trademark}
          </p>

          <p>{products.products.price / 100} €</p>

          {/** Mettre la suite du code ici */}
        </div>
      </div>
    </>
  );
};

export default Card;
