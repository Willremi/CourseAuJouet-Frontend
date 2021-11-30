import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice'
import cartLengthSlice from './inCartReducer';

/**
 * To configure the store redux. 
 * 
 * @author Peter Mollet
 */
 export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		cartLength: cartLengthSlice
	},
});
