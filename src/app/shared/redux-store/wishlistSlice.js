import { createSlice } from "@reduxjs/toolkit"
import handleSessionStorageSuccess from "../components/form-and-success-components/HandleStorageSuccess";
import { setLocalWishlist, getLocalWishlist, removeOneInLocalWishlist } from "../services/wishlistService";


const initialState={
    wishlist: getLocalWishlist()
}

export const wishlistSlice = createSlice({
    name: 'wish',
    initialState,
    reducers:{
        setWishlist:() => {
            console.log('set');
        },
        addToWishlist: (state, action) => {
            console.log('add');
            let pushToWish = { ...action.payload }
            if (state.wishlist === undefined) {
                state.wishlist = [pushToWish]
            } else {
                state.wishlist.push(pushToWish)
            }
            setLocalWishlist(pushToWish)
            let message = "Vous avez ajouté " + action.payload.product_name + " dans votre liste de souhaits"
            handleSessionStorageSuccess(message)
        },
        deleteFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(element => element._id !== action.payload._id);
            removeOneInLocalWishlist(action.payload)
            let message = "Vous avez retiré " + action.payload.product_name + " dans votre liste de souhaits"
            handleSessionStorageSuccess(message)
        }
    }
})

export const {
    setWishlist,
    addToWishlist,
    deleteFromWishlist
} = wishlistSlice.actions;

export const selectWishlist = (state) => state.wish.wishlist

export default wishlistSlice.reducer