import React, { useState } from "react";
import { Pricing } from "../../shared/services/cart";
import DeliveryMode from "./DeliveryMode";
import { useDispatch } from 'react-redux';
import { deliveryMode } from "../../shared/redux-store/deliverySlice";

const SummaryOfOrders = ({ product }) => {
  const [ModeValue, setModeValue] = useState("Magasin");
  const dispatch = useDispatch()
  const handleChange = (values) => {
    setModeValue(values.target.value);
    dispatch(deliveryMode(values.target.value))
    return ModeValue;
  };

  const totalPrice = Pricing(product, ModeValue);
  // console.log(totalPrice);

  return (
    <>
      <h2
        className="w-9/12 font-semibold text-nav-blue text-2xl mr-3 pt-5 ml-auto uppercase
  sm:ml-0 sm:text-lg sm:text-center
  md:ml-2 md:text-lg
  lg:ml-2"
      >
        Récapitulatif de votre commande
      </h2>
      <div
        className="grid grid-cols-2 gap-3 items-center w-9/12 ml-auto mr-5 bg-white p-5 font-semibold text-lg rounded-lg shadow-xl
    sm:w-full sm:text-base
    md:text-lg md:w-full
    lg:w-full
    "
      >

        <DeliveryMode change={handleChange} />
        <span className="justify-self-end">
          {totalPrice.Delivery === 0
            ? "Gratuit"
            : (totalPrice.Delivery / 100).toFixed(2) + "€"}
        </span>

        <p>Sous-total</p>
        <span className="justify-self-end">
          {(totalPrice.TotalPrice / 100).toFixed(2)}€
        </span>

        <p>Montant TVA (20%)</p>
        <span className="justify-self-end">
          {(totalPrice.taxes / 100).toFixed(2)}€
        </span>

        <p>Total à régler</p>
        <span className="justify-self-end">
          {(
            (totalPrice.TotalPrice + totalPrice.taxes + totalPrice.Delivery) /
            100
          ).toFixed(2)}
          €
        </span>
      </div>
    </>
  );
};

export default SummaryOfOrders;
