import { createSlice } from "@reduxjs/toolkit"

/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */
 const initialState = {
     product: 1, 
     price: 2
 }

 export const cartSlice = createSlice({
     name: 'cart', 
     initialState, 
     reducers: {
         increment: (state) => {
             if(state.product < 5) {
                state.product += 1
             }
         }, 
         decrement: (state) => {
             if(state.product > 1) {
                 state.product -= 1
             }
         }
     }
 })

 export const {increment, decrement} = cartSlice.actions

 export default cartSlice.reducer