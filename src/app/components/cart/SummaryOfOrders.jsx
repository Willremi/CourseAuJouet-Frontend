import React from 'react'

const SummaryOfOrders = ({product}) => {

    function Pricing(){
        let calculating = 0
        if(product)
        product.map((p) => 
        calculating = calculating + p.price
        )
        return calculating/100    
    }
    const totalPrice = Pricing()
    return (
        <div>
            <h2>Récapitulatif de votre commande</h2>
            <p>{totalPrice}€</p>
        </div>
    )
}

export default SummaryOfOrders
