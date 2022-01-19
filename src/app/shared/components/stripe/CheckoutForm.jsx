import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CheckoutPayment } from "../../../api/backend/payment";
import { useSelector } from "react-redux";
import { selectInCart } from "../../redux-store/cartSlice";

const CheckoutForm = () => {
  const getCartProduct = useSelector(selectInCart);
  const stripe = useStripe();
  const elements = useElements();
  console.log(getCartProduct);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log("Token Généré", paymentMethod);
      try {
        const { id } = paymentMethod;

        const InfoPaiement = {
          uuid: getCartProduct[0]._id,
          product_name: getCartProduct[0].product_name,
          amount: getCartProduct[0].price * getCartProduct[0].quantity,
          id: id,
        };
        const response = await CheckoutPayment(InfoPaiement);
        if (response.data.success) {
          console.log("paiement réussie");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
        <button>Payer</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
