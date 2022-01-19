import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import ProductInCart from "../components/cart/ProductInCart";
import { removeInCart, selectInCart } from "../shared/redux-store/cartSlice";
import { CreditCardIcon, ReplyIcon, TruckIcon } from "@heroicons/react/solid";
import SummaryOfOrders from "../components/cart/SummaryOfOrders";
import { Link } from 'react-router-dom';
import { URL_PAYMENT } from "../shared/constants/urls/urlConstants";

/**
 * ReloadComponent is used to update the component when a product is removed from cart
 * without refresh the page
 * @author Mathieu
 */

const CartView = () => {
  
  const inCart = useSelector(selectInCart)
  const dispatch = useDispatch()
  
  //Supprime le produit à la fois dans la BDD et également dans le State redux
  const handleRemoveProduct = (index) => {
        dispatch(removeInCart(index))
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2
        className="font-semibold text-nav-blue text-4xl text-center py-6
      md:text-xl md:py-3"
      >
        VOTRE PANIER
      </h2>
      <div className="flex flex-row">
        <div className="w-6/12 space-y-10 text-yellow-600 font-semibold text-2xl sm:hidden md:mr-4 md:w-4/12">
          <p className="flex flex-row items-end md:text-base md:items-center">
            <CreditCardIcon className="w-1/12" />
            <span className="pl-4 pb-1 md:pb-0">Paiement sécurisé</span>
          </p>
          <p className="flex flex-row items-end md:text-base md:items-center">
            <ReplyIcon className="w-1/12" />
            <span className="pl-4 pb-1 md:pb-0">15 jours pour retour</span>
          </p>
          <p className="flex flex-row items-end md:text-base md:items-center">
            <TruckIcon className="w-1/12" />
            <span className="pl-4 pb-1 md:pb-0">
              Livraison standard gratuite
            </span>
          </p>
        </div>
        {inCart !== undefined ? (
          <ul className="space-y-5 w-full">
            {inCart.map((onCart, index) => (
                <li key={index}>
                  <ProductInCart
                    inCart={inCart}
                    component={onCart}
                    remove={handleRemoveProduct}
                    index={index}
                  />
                </li>

            ))}

            <SummaryOfOrders product={inCart} />
            <div className="w-9/12 ml-auto text-center mr-5 py-6
            sm:mx-auto
            md:mx-auto
            lg:mx-auto
            ">
              <Link to={URL_PAYMENT} className="btn btn-yellow rounded-full transition duration-300">
                Passer la commande
              </Link>
            </div>

          </ul>

        ) : (
          <p>Votre panier est vide</p>
        )}

      </div>

    </div>
  );
};

export default CartView;
