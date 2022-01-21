import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { URL_HOME } from "./../shared/constants/urls/urlConstants";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart, selectInCart } from "./../shared/redux-store/cartSlice";
import { accountId } from "./../shared/services/accountServices";
import { registerOrder } from "../api/backend/orders";
import { selectDelivery } from "./../shared/redux-store/deliverySlice";
import { Pricing } from "../shared/services/cart";
import {
  paymentControl,
  selectPayment,
} from "./../shared/redux-store/PaymentVerification";
import { onSaleDate } from "../shared/services/dateServices";

const PaymentSuccessView = () => {
  const Cart = useSelector(selectInCart);
  const delivery = useSelector(selectDelivery);
  const verificationPayment = useSelector(selectPayment);
  const dispatch = useDispatch();
  const userId = accountId();
  const history = useHistory();
  const [order, setOrder] = useState([]);
  const params = new URL(document.location).searchParams;
  const paymentStatus = params.get("success");

  console.log(order);
  console.log(verificationPayment);
  useEffect(() => {
    if (verificationPayment && Cart) {
      const pricing = Pricing(Cart, delivery);
      const values = { id: userId, cart: Cart, pricing: pricing };
      registerOrder(values)
        .then((res) => {
          console.log(res.data.order);
          setOrder(res.data.order);
          sessionStorage.removeItem("userCart");
          dispatch(emptyCart());
          dispatch(paymentControl(false));
        })
        .catch((error) => console.log(error));
    } else if (verificationPayment === undefined) {
      console.log("cdt undefined");
      dispatch(paymentControl(paymentStatus));
      console.log(verificationPayment);
    } else {
      // history.push(URL_HOME);
    }
  }, [verificationPayment]);

  return (
    <>
      {order.product && (
        <div className="w-1/3 mx-auto my-5 font-semibold text-nav-blue">
          <h2 className="text-center text-2xl uppercase mb-6">
            Confirmation de la commande.
          </h2>
          <div className="w-11/12 mx-auto space-y-3 mb-10">
            <p>
              Votre commande a été enregistré. Nous mettons tout en oeuvre pour
              vous l'envoyer au plus vite.
            </p>
            <p>N° commande : {order._id}</p>
            <p>Livraison estimée le : {onSaleDate(order.delivery_date)} </p>
          </div>

          <div className="text-black border-4 border-yellow-400 px-10 py-3 bg-white rounded-xl">
            {order.product.map((product) => (
              <div className="flex flex-row my-2">
                <img
                  className="w-15/100 object-cover rounded-xl mr-4"
                  src={product.images[0]}
                  alt={product.product_name}
                />
                <div className="w-full">
                  <h3 className="text-xl">{product.product_name}</h3>
                  <p className="text-gray-400">{product.trademark}</p>
                  <div className="flex flex-row justify-between">
                  <p className="text-gray-400">qté : {product.quantity}</p>
                  <p className="text-2xl text-right">{product.price/100}€</p>
                  </div>
                </div>
               
              </div>
            ))}

            <div className="grid grid-cols-2 text-right text-xl mt-5 border-t-2 pt-3 border-yellow-300">
              <p>Sous-total :</p>
              <span>{(order.order_HT_price / 100).toFixed(2)}€</span>
              <p>Frais de livraison :</p>
              <span>
                {order.delivery_price === "0"
                  ? "Gratuit"
                  : (order.delivery_price / 100).toFixed(2) + "€"}
              </span>
              <p>TVA (20%) : </p>
              <span>{(order.order_taxes / 100).toFixed(2)}€</span>
              <p className="text-2xl mt-2">Total :</p>
              <span className="text-2xl mt-2">{(order.order_price / 100).toFixed(2)}€</span>
            </div>
          </div>
          <div className="grid grid-cols-2 text-center my-5">
            <Link className="btn-secondary btn w-2/3 mx-auto" to={URL_HOME}>Continuer mes achats</Link>
            <Link className="btn-secondary btn w-2/3 mx-auto" to={URL_HOME}>Voir ma commande</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentSuccessView;
