import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GetallProductInCart, RemoveOneProductInCart } from "../api/backend/cart";
import ProductInCart from "../components/cart/ProductInCart";
import { getData, setInCart, removeInCart, selectInCart } from "../shared/redux-store/cartSlice";
import { accountId } from "../shared/services/accountServices";
import { CreditCardIcon, ReplyIcon, TruckIcon } from "@heroicons/react/solid";
import SummaryOfOrders from "../components/cart/SummaryOfOrders";
import { Link } from 'react-router-dom';
import { URL_ORDER_ADDRESS } from "../shared/constants/urls/urlConstants";

/**
 * ReloadComponent is used to update the component when a product is removed from cart
 * without refresh the page
 * @author Mathieu
 */

const CartView = () => {
  const userId = accountId();
  const [ReloadComponent, setReloadComponent] = useState(false);
  const inCart = useSelector(selectInCart)
  const quantityProduct = useSelector(selectInCart)
  const dispatch = useDispatch()
  
  useEffect(() => {
    //Récupère tous les produits de l'utilisateur logué via axios pour les dispatch au store Redux 
    GetallProductInCart(userId)
      .then((res) => {
        dispatch(setInCart(res.data.cart))
      })
      .catch((error) => console.log(error));
  }, [userId, ReloadComponent, dispatch]);

  //Supprime le produit à la fois dans la BDD et également dans le State redux
  const handleRemoveProduct = (productId) => {
    const values = { userId: userId, productId: productId };
    RemoveOneProductInCart(values)
      .then(() => {
        setReloadComponent(!ReloadComponent)
        dispatch(removeInCart(values))
      })
      .catch((err) => console.log(err));
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
                    component={onCart}
                    remove={handleRemoveProduct}
                    index={index}
                  />
                </li>

            ))}

            <SummaryOfOrders product={quantityProduct} />
            <div className="w-9/12 ml-auto text-center mr-5 py-6
            sm:mx-auto
            md:mx-auto
            lg:mx-auto
            ">
              <Link to={URL_ORDER_ADDRESS} className="btn btn-yellow rounded-full transition duration-300">
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
