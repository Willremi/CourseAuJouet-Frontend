import { createSlice } from "@reduxjs/toolkit";
import { RemoveOneProductInCart } from "../services/cart";
import { setUserCart } from './../services/cart';


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
        setInCart: (state, action ) => {
            state.inCart = action.payload
        },
        removeInCart: (state, action) => {
            let temporaryArray = []
            state.inCart.map((product, index) => {
                if(index === action.payload){
                   
                }
                else {
                   temporaryArray.push(product)
                }
                return temporaryArray
            })
            RemoveOneProductInCart(action.payload)
            state.inCart = temporaryArray
        },
        
        AddToCart: (state, action) => {
           state.inCart.push(action.payload)
           setUserCart(action.payload)
        }
    }
})




export const { increment, decrement, setInCart , removeInCart, AddToCart } = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;
