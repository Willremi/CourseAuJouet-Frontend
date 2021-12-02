import {
    AddToCart
} from "../../api/backend/cart"
import {
    accountId
} from './accountServices';

export const addProductInCart = (ProductId) => {
    const userId = accountId()

    const values = {
        ProductId: ProductId,
        userId: userId
    }
    AddToCart(values)
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error))
}

export function Pricing(productList) {
    let calculating = {
        TotalPrice: 0,
        taxes: 0
    }
    if (productList)
        productList.map((p) => {
            calculating.TotalPrice = calculating.TotalPrice + p.price
            calculating.taxes = calculating.taxes + (p.price * 0.20)
            return null
        })
    return calculating
}