import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'inCart',
    initialState: {
        inCart:[]
    },
    reducers: {
        setInCart: (state, {payload}) => {
            console.log(state)
            state.inCart.push(payload)
            // return {inCart: [...state.inCart, ...payload]}
        }
    }
})

export const { setInCart } = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;