import {
    AddToCart
} from "../../api/backend/cart"
import {
    accountId
} from './accountServices';

export const addProductInCart = (Product) => {
    const userId = accountId()

    const values = {
        Product: Product,
        userId: userId
    }
    
    AddToCart(values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error))
}

export function Pricing(productList, Delivery) {
    let calculating = {
        TotalPrice: 0,
        taxes: 0,
        Delivery: 0
    }

    switch (Delivery) {
        case 'Magasin':
            calculating.Delivery = 0
            break
        case 'Relais':
            calculating.Delivery = 0
            break
        case 'Domicile':
            calculating.Delivery = 350
            break
        default:
            return calculating.Delivery = "Gratuit";
    }
    
    if (productList)
        productList.map((p) => {
            calculating.TotalPrice = calculating.TotalPrice + (p.price * p.quantity)
            calculating.taxes = calculating.taxes + (p.price * p.quantity * 0.20)
            return null
        })

    return calculating

}

export const ReduxProduct = (product) => {
    if(product === undefined){ 
      
      return undefined
  } else { return {product: product} }}