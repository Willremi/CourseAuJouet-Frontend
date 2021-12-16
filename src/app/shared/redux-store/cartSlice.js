import { createSlice } from "@reduxjs/toolkit";


/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */

const initialState = {
    inCart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, action) => {
            if (state.inCart[action.payload].quantity < 5) {
                state.inCart[action.payload].quantity++
            }
        },
        decrement: (state, action) => {
            if (state.inCart[action.payload].quantity > 1) {
                state.inCart[action.payload].quantity--
            }
        },
        setInCart: (state, { payload }) => {
            state.inCart = payload
        },
        removeInCart: (state, action) => {
            state.inCart = state.inCart.filter((inCart) => inCart._id !== action.payload.productId);
        },

        AddToCart: (state, action) => {
           state.inCart.push(action.payload)
        }

    }
})




export const selectQuantity = (state) => state.cart.product
export const { increment, decrement, getData, setInCart , removeInCart, AddToCart } = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;
