import { createSlice } from "@reduxjs/toolkit"

/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */
 const initialState = {}

 export const cartSlice = createSlice({
     name: 'cart', 
     initialState, 
     reducers: {}
 })

 export default cartSlice.reducer