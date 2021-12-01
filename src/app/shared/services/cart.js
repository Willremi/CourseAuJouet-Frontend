import { AddToCart } from "../../api/backend/cart"

export const addProductInCart = (ProductId, userId) => {
    const values = {
        ProductId: ProductId,
        userId: userId
    }
    AddToCart(values)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error))
}