import React, { useEffect, useState } from "react";
import {
  GetallProductInCart,
  RemoveOneProductInCart,
} from "../api/backend/cart";
import ProductInCart from "../components/cart/ProductInCart";
import { accountId } from "../shared/services/accountServices";
import { CreditCardIcon, ReplyIcon, TruckIcon } from "@heroicons/react/solid";
import SummaryOfOrders from "../components/cart/SummaryOfOrders";

/**
 * ReloadComponent is used to update the component when a product is removed from cart
 * without refresh the page
 * @author Mathieu
 */

const CartView = () => {
  const [product, setProduct] = useState();
  const userId = accountId();
  const [ReloadComponent, setReloadComponent] = useState(false);

  useEffect(() => {
    GetallProductInCart(userId)
      .then((res) => {
        setProduct(res.data.cart);
      })
      .catch((error) => console.log(error));
  }, [userId, ReloadComponent]);

  const handleRemoveProduct = (productId) => {
    const values = { userId: userId, productId: productId };
    RemoveOneProductInCart(values)
      .then(() => setReloadComponent(!ReloadComponent))
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
        {product !== undefined ? (
          <ul className="space-y-3 w-full md:w-8/12">
            {product.map((onCart, index) => (
              <li key={index}>
                <ProductInCart
                  component={onCart}
                  remove={handleRemoveProduct}
                />
              </li>
            ))} 
            <SummaryOfOrders product={product}/>
          </ul>
         
        ) : (
          <p>Votre panier est vide</p>
        )} 
      </div>
     
    </div>
  );
};

export default CartView;
