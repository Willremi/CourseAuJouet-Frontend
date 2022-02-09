import { createSlice } from "@reduxjs/toolkit"


const initialState={
    wishlist: []
}

export const wishlistSlice = createSlice({
    name: 'wish',
    initialState,
    reducers:{
        setWishlist:() => {
            console.log('set');
        },
        manageWishlist: () => {
            console.log('manage');
        },
    }
})

export const {
    setWishlist,
    manageWishlist,
} = wishlistSlice.actions;

export const selectWishlist = (state) => state.wish.wishlist

export default wishlistSlice.reducer