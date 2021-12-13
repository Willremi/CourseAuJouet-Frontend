import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice'
import cartReducer from './cartSlice';
import searchReducer from './searchSlice';

/**
 * To configure the store redux. 
 * 
 * @author Peter Mollet
 */
 export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		search: searchReducer, 
		cart: cartReducer
	},
});
