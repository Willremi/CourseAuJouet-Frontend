import { configureStore, createReducer } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice';
import cartReducer from './cartSlice'

/**
 * To configure the store redux. 
 * 
 * @author Peter Mollet
 */
 export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		cart: cartReducer,
	},
});
