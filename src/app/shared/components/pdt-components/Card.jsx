import React from "react";
import { Link } from "react-router-dom";
import { expirationProductDate } from "../../services/productServices";
import { URL_PRODUCT_DETAIL } from "./../../constants/urls/urlConstants";

const Card = ({ products }) => {
  const expirationNewProductDate = expirationProductDate(products.on_sale_date, 30)
  return (
    <>
      <fieldset className="w-4/5 sm:w-full h-full border-gray border-2 rounded-b-xl bg-white flex flex-col justify-between">
        { expirationNewProductDate ? <legend className="rounded-full bg-secondary-100 ml-1 font-semibold border text-lg border-white text-nav-blue py-0.5 px-10">
          Nouveau
        </legend> : null }


        <Link to={URL_PRODUCT_DETAIL + products._id}>
          <img
            src={products.images[0]}
            alt={products.product_name}
            className="w-full h-full flex self-center p-2 rounded-b-xl border-b-4 border-gray-300 mx-auto shadow-md"
          />
        </Link>

        <div className="flex flex-col space-y-1 font-medium p-2 justify-between h-full">
          <div>
            <Link to={URL_PRODUCT_DETAIL + products.product_code}>
            {products.product_name}
          </Link>

          <p className="uppercase font-normal text-gray-400">
            {products.trademark}
          </p>
          </div>
          

          <p>{products.price / 100} €</p>

          {/** Mettre la suite du code ici */}
        </div>
      </fieldset>
    </>
  );
};

export default Card;
