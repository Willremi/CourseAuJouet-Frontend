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
            state.inCart.forEach(inCart => {
                if(inCart._id === action.payload && inCart.quantity < 5) {
                    inCart.quantity++
                }
            })
        },
        decrement: (state, action) => {
            state.inCart.forEach(inCart => {
                if(inCart._id === action.payload && inCart.quantity > 1) {
                    inCart.quantity--
                }
            })
        },
        setInCart: (state, action ) => {
            state.inCart = action.payload
        },
        removeInCart: (state, action) => {
            state.inCart = state.inCart.filter((inCart) => inCart._id !== action.payload.productId);
        },

        AddToCart: (state, action) => {
           state.inCart.push(action.payload)
        }
    }
})




export const { increment, decrement, getData, setInCart , removeInCart, AddToCart } = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;
