import React from 'react'
import { useSelector } from 'react-redux';
import { CheckoutPayment } from '../api/backend/payment';
import Payment from '../shared/components/stripe/Payment'
import { selectInCart } from '../shared/redux-store/cartSlice';


const PaymentView = () => {
    
    const getCartProduct = useSelector(selectInCart)
    
    const handleSubmit = (cart) => {
        CheckoutPayment(cart)
        .then((res) => window.location.assign(res.data.url))
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <button>Retour</button>
            <div className='mx-auto w-1/3 flex flex-col bg-white rounded-xl shadow-xl'>
            
                {getCartProduct.map((product, index) =>
                <div key={index} className='flex flex-row'>
                    <img className='w-15/100 rounded-xl p-3' src={product.images[0]} alt={product.product_name}/>
                    <div className='flex flex-col my-2'>
                        <h3 className='font-semibold'>{product.product_name}</h3>
                        <p className='text-gray-500'>{product.price / 100} €</p>
                        <p className='text-gray-500'>quantité : {product.quantity}</p>
                    </div>
                </div>
                )}
                <button onClick={() => handleSubmit(getCartProduct)} className='py-2 rounded-b-xl bg-nav-blue font-semibold text-white'>Checkout</button>
            </div>
           
            {/* <Payment /> */}
        </div>
    )
}

export default PaymentView
