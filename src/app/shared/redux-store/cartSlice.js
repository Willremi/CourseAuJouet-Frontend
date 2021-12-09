import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    inCart : []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setInCart: (state, {payload}) => {
            state.inCart = payload
        },
        removeInCart: (state, action) => {
            state.inCart = state.inCart.filter((inCart) => inCart._id !== action.payload.productId);
        }
    }
})

export const { setInCart , removeInCart } = cartSlice.actions;

export const selectInCart = (state) => state.cart.inCart

export default cartSlice.reducer;