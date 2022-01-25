import React from 'react'
import { useSelector } from 'react-redux';
import { GetOneUser } from '../api/backend/account';
import { CheckoutPayment } from '../api/backend/payment';
import { selectInCart } from '../shared/redux-store/cartSlice';
import { selectDelivery } from '../shared/redux-store/deliverySlice';
import { Pricing } from '../shared/services/cart';
import { accountId } from './../shared/services/accountServices';
import { Icon } from '@iconify/react';
import { URL_CART } from './../shared/constants/urls/urlConstants';
import { Link } from 'react-router-dom';

const PaymentView = () => {
  
    const getCartProduct = useSelector(selectInCart)
    const userId = accountId()
    const delivery = useSelector(selectDelivery)
    const recupPricing = Pricing(getCartProduct, delivery)
    
    const handleSubmit = (cart, id) => {
        GetOneUser(id)
        .then((res) => {
            const user = res.data.user
            const values = {cart, user}
            CheckoutPayment(values)
            .then((res) => {
                window.location.assign(res.data.url)})
            .catch((error) => console.log(error))
        })
        .catch((error) => console.log(error)) 
    }
        
    return (
        <div className='my-5'>
            <Link to={URL_CART} className='flex flex-row w-1/2 mx-auto font-semibold text-xl text-secondary-700 duration-300 my-2 hover:text-secondary-500'><Icon icon="akar-icons:arrow-back-thick" className='w-6 h-6 mr-2' />Retour</Link>
            <div className='mx-auto w-1/3 flex flex-col bg-white rounded-xl shadow-xl'>
                <h2 className='font-semibold text-2xl text-center text-white rounded-t-xl py-2 bg-nav-blue'>Contenu de votre commande</h2>
                {getCartProduct.map((product, index) =>
                <div key={index} className='flex flex-row border-2 rounded-xl m-1 p-1'>
                    <div key={index} className='flex w-full'>
                    <img className='w-3/12 rounded-xl object-cover' src={product.images[0]} alt={product.product_name}/>
                    <div className='flex flex-col m-2'>
                        <h3 className='font-semibold'>{product.product_name}</h3>
                        <p className='text-gray-500'>{product.price / 100} €</p>
                        <p className='text-gray-500'>quantité : {product.quantity}</p>
                    </div>
                </div>
                    <div className='w-1/3 flex flex-col my-2 justify-end items-end'>
                       <p className='font-bold text-2xl p-1'>{(product.price * product.quantity) / 100 }€</p> 
                    </div>
                </div>
                )}
                <div className='grid grid-cols-2 justify-items-end gap-2 font-semibold mx-4 my-2'>
                    <p>Montant Hors Taxes :</p><span>{(recupPricing.TotalPrice/100).toFixed(2)}€</span>
                    <p>Montant de la livraison : </p><span>{(recupPricing.Delivery/100).toFixed(2)}€</span>
                    <p>Montant de la TVA : </p><span>{(recupPricing.taxes /100).toFixed(2)}€</span>
                    <p>Montant de la commande : </p><span>{((recupPricing.TotalPrice + recupPricing.taxes + recupPricing.Delivery) / 100).toFixed(2)}€</span>
                </div>
                <button onClick={() => handleSubmit(getCartProduct, userId)} className='py-2 rounded-b-xl bg-nav-blue duration-300 hover:bg-nav-blueClar font-semibold text-white'>Passer au paiement</button>
            </div>   
        </div>
    )
}

export default PaymentView
