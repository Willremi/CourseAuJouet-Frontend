import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm'

const Payment = () => {
  const client_secret = loadStripe(process.env.REACT_APP_PUBLIC_KEY_STRIPE) //configure et initialise Stripe avec la clé publique
  return (
    <div>
      <Elements stripe={client_secret}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Payment
