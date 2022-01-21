import {
    createSlice
} from "@reduxjs/toolkit";

/**
 * initial state: Recup delivery mode for use it in payment component
 * @author Peter Mollet
 */

const initialState = {
    payment : undefined
}

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        paymentControl : (state, action) => {
            state.payment = action.payload
        }
    }
})




export const {
    paymentControl
} = paymentSlice.actions;

export const selectPayment = (state) => state.payment.payment
export default paymentSlice.reducer;
