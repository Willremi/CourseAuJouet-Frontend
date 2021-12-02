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