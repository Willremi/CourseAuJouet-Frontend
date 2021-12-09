import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice'
import searchReducer from './searchSlice';
import cartReducer from './cartSlice'

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
	},
});
