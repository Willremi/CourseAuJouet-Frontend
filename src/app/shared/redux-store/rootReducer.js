import { combineReducers } from "redux";
import { authenticationSlice } from './authenticationSlice';
import { searchSlice } from "./searchSlice";
import { cartSlice } from './cartSlice';
import { ProfilSlice } from './ProfilSlice';
/**
 * Combine all the reducers create in different files, to add them in the redux-store
 * So, if you create a new reducer, it needs to be added here
 * 
 * @author Peter Mollet
 */
export default combineReducers({
    authenticationSlice,
    searchSlice,
    cartSlice,
    ProfilSlice

})