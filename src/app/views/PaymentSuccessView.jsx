import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { URL_HOME } from "./../shared/constants/urls/urlConstants";
import { useDispatch } from "react-redux";
import { onSaleDate } from "../shared/services/dateServices";
import { emptyCart } from "../shared/redux-store/cartSlice";
import { getOneOrder } from "../api/backend/orders";

const PaymentSuccessView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [order, setOrder] = useState([]);
  const [session, setSession] = useState();
  const params = new URL(document.location).searchParams;
  const StripeCheckoutId = params.get("id");
  const presentTime = new Date()
  var deliveryDate = presentTime.setDate(presentTime.getDate() + 5)
  console.log(deliveryDate);

  useEffect(() => {
    if(StripeCheckoutId){
      getOneOrder(StripeCheckoutId)
    .then((res) => {
      
      setOrder(res.data.order.product)
      setSession(res.data.order)
      console.log("Order", res.data.order.product);
      console.log("Session", session);
      sessionStorage.removeItem("userCart")
      dispatch(emptyCart())
    })
    .catch((error) => console.log( error ))
    }
    else{
      history.push(URL_HOME)
    }

    // eslint-disable-next-line
  }, []);
  
  

  return (
    <>
      {order && session && (
        <div className="sm:w-11/12 md:w-11/12 lg:w-1/2 w-1/3 mx-auto my-5 font-semibold text-nav-blue">
          <h2 className="text-center text-2xl uppercase mb-6">
            Confirmation de la commande.
          </h2>
          <div className="w-11/12 mx-auto space-y-3 mb-10">
            <p>
              Votre commande a été enregistré. Nous mettons tout en oeuvre pour
              vous l'envoyer au plus vite.
            </p>
            <p>N° commande : {session.stripe_session_id}</p>
            <p>Livraison estimée le : {onSaleDate(session.delivery_date)} </p>
          </div>

          <div className="text-black border-4 border-yellow-400 px-10 py-3 bg-white rounded-xl">
            {order.map((product, index) => (
              <div key={index} className="flex flex-row my-2">
                <div className="w-full">
                  <h3 className="text-xl">{product.description}</h3>
                  <div className="flex flex-row justify-between">
                  <p className="text-gray-400">qté : {product.quantity}</p>
                  <p className="text-2xl text-right">{product.amount_subtotal/100}€</p>
                  </div>
                </div>
               
              </div>
            ))}
           <div className="grid grid-cols-2 text-right text-xl mt-5 border-t-2 pt-3 border-yellow-300">
              <p>Sous-total :</p>
              <span>{(session.order_HT_price / 100).toFixed(2)}€</span>
              <p>Frais de livraison :</p>
              <span>
                {session.delivery_price === 0
                  ? "Gratuit"
                  : (session.delivery_price / 100).toFixed(2) + "€"}
              </span>
              <p>TVA (20%) : </p>
              <span>{(session.order_taxes / 100).toFixed(2)}€</span>
              <p className="text-2xl mt-2">Total :</p>
              <span className="text-2xl mt-2">{((Number(session.delivery_price) + Number(session.order_HT_price) + Number(session.order_taxes)) / 100).toFixed(2)}€</span>
            </div>
            
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 text-center my-5">
            <Link className="btn-secondary btn w-2/3 mx-auto" to={URL_HOME}>Continuer mes achats</Link>
            <Link className="btn-secondary btn w-2/3 mx-auto" to={URL_HOME}>Voir ma commande</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentSuccessView;
