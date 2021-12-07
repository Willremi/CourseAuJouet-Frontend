import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { store } from "../shared/redux-store/store";
import {
  GetallProductInCart,
  RemoveOneProductInCart,
} from "../api/backend/cart";
import ProductInCart from "../components/cart/ProductInCart";
import { setInCart } from "../shared/redux-store/cartSlice";
import { accountId } from "../shared/services/accountServices";
import { CreditCardIcon, ReplyIcon, TruckIcon } from "@heroicons/react/solid";

/**
 * ReloadComponent is used to update the component when a product is removed from cart
 * without refresh the page
 * @author Mathieu
 */

const CartView = () => {
  const [product, setProduct] = useState();
  const userId = accountId();
  const [ReloadComponent, setReloadComponent] = useState(false);
  const dispatch = useDispatch()

  // console.log(product)

  useEffect(() => {
    GetallProductInCart(userId)
      .then((res) => {
        setProduct(res.data.cart);
        console.log(res.data.cart);
        dispatch(setInCart(res.data.cart));
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
      md:text-xl"
      >
        VOTRE PANIER
      </h2>
      <div className="flex flex-row ">
        <div className="w-6/12 space-y-10 text-yellow-600 font-semibold text-2xl sm:hidden md:mr-4">
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
          <ul className="space-y-5 w-full">
            {product.map((onCart, index) => (
              <li key={index}>
                <ProductInCart
                  component={onCart}
                  remove={handleRemoveProduct}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Votre panier est vide</p>
        )}
      </div>
    </div>
  );
};

export default CartView;
