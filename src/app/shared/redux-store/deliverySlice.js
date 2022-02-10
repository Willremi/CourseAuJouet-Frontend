import {
    createSlice
} from "@reduxjs/toolkit";

/**
 * initial state: Recup delivery mode for use it in payment component
 * @author Peter Mollet
 */

const initialState = {
    delivery : "Magasin"
}

export const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        deliveryMode : (state, action) => {
            state.delivery = action.payload
        }
    }
})




export const {
    deliveryMode
} = deliverySlice.actions;

export const selectDelivery = (state) => state.delivery.delivery

export default deliverySlice.reducer;
