import React from "react";
import { Pricing } from "../../shared/services/cart";
const SummaryOfOrders = ({ product }) => {
  const totalPrice = Pricing(product);

  return (
    <>
      <h2
        className="font-semibold text-nav-blue text-2xl pt-5 ml-48 uppercase
  sm:ml-0 sm:text-lg sm:text-center
  md:ml-2 md:text-lg
  lg:ml-2"
      >
        Récapitulatif de votre commande
      </h2>
      <div
        className="grid grid-cols-2 gap-3 w-10/12 ml-auto mr-5 bg-white p-5 font-semibold text-xl rounded-lg shadow-xl
    sm:w-full sm:text-base
    md:text-lg md:w-full
    lg:w-full
    xl:ml-2"
      >
        {/* Option de livraison à remplacer ici */}

        <p>Option de livraison</p>
        <span className="justify-self-end">Gratuit</span>

        {/** Fin option de Livraison */}

        <p>Sous-total</p>
        <span className="justify-self-end">
          {(totalPrice.TotalPrice / 100).toFixed(2)}€
        </span>

        <p>Montant TVA(20%)</p>
        <span className="justify-self-end">
          {(totalPrice.taxes / 100).toFixed(2)}€
        </span>

        <p>Total à régler</p>
        <span className="justify-self-end">
          {((totalPrice.TotalPrice + totalPrice.taxes) / 100).toFixed(2)}€
        </span>
      </div>
    </>
  );
};

export default SummaryOfOrders;
