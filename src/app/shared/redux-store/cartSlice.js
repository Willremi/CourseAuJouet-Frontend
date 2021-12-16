import { createSlice } from "@reduxjs/toolkit";
import { ReduxProduct } from "../services/cart";


/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */

const initialState = {
    product: ReduxProduct(),
    inCart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.product = action.payload
        },
        increment: (state, action) => {
            if (state.product[action.payload].quantity < 5) {
                state.product[action.payload].quantity++
            }
        },
        decrement: (state, action) => {
            if (state.product[action.payload].quantity > 1) {
                state.product[action.payload].quantity--
            }
        },
        setInCart: (state, action ) => {
            state.inCart = action.payload
        },
        removeInCart: (state, action) => {
            state.inCart = state.inCart.filter((inCart) => inCart._id !== action.payload.productId);
        }, 
        addInCart: (state, action) => {

            // state.inCart = [...state.inCart, action.payload]
            console.log(action.payload);
        }
    }
})




export const selectQuantity = (state) => state.cart.product
export const { increment, decrement, getData, setInCart , removeInCart, addInCart } = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;
