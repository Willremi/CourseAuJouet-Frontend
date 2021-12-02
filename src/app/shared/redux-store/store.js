import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice'
import inCartReducer from './inCartSlice';

/**
 * To configure the store redux. 
 * 
 * @author Peter Mollet
 */
 export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		inCart: inCartReducer
	},
});
