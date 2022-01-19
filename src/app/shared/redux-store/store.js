import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice'
import cartReducer from './cartSlice';
import searchReducer from './searchSlice';
import updateReducer from './updateProductSlice'
import deliveryReducer from './deliverySlice'
/**
 * To configure the store redux. 
 * 
 * @author Peter Mollet
 */
 export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		search: searchReducer, 
		cart: cartReducer,
		productToUpdate: updateReducer,
		delivery: deliveryReducer
	},
});
