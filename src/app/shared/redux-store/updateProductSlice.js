import { createSlice } from '@reduxjs/toolkit';



 const initialState = {
     productId : {}
 }

export const updateProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductId: (state, action) => {
            state.productId = action.payload
        }
    }
})

export const { setProductId } = updateProductSlice.actions

export const selectComponent = (state) => state.productToUpdate.productId

export default updateProductSlice.reducer