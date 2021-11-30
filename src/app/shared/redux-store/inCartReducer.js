// import {product} from "src/app/views/CartView.jsx"
// import { GetallProductInCart } from "../../api/backend/cart"

// initialState = GetallProductInCart()

// export const DELETE_PRODUCT_IN_CART = "DELETE_PRODUCT_IN_CART"

// export const deleteProductAction = (product) => ({
//     type: DELETE_PRODUCT_IN_CART,
//     payload: product._id
// })

// export function inCartReducer( state = initialState, action){
//     switch (action.type){
//         case DELETE_PRODUCT_IN_CART:
//             return state.filter(product => product._id != action.payload)
//             return {
//                 ...state,
//                 product: length - 1}
        
//         default:
//             return state
//     }
// }

import { createSlice } from "@reduxjs/toolkit";
import { GetallProductInCart } from "../../api/backend/cart";

const products = GetallProductInCart()
const initialState = {
    cartLength: products.length
}

export const CartLengthSlice = createSlice({
    name: 'cartLength',
    initialState,
    reducers: {
        deleteOne: (state) => {
            state.length = state.length - 1
        }
    }
})

export const {deleteOne} = CartLengthSlice.actions
export const cartLength = (state) => state.length
export default CartLengthSlice.reducer