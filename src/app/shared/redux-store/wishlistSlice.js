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
        addProductWhishlist: () => {
            console.log('add');
        },
        deleteProductWishlist: () => {
            console.log('delete');
        }
    }
})

export const {
    setWishlist,
    addProductWhishlist,
    deleteProductWishlist
} = wishlistSlice.actions;

export const selectWishlist = (state) => state.wish.wishlist

export default wishlistSlice.reducer