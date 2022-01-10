import { createSlice } from '@reduxjs/toolkit';



 const initialState = {
     product : []
 }

export const updateProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductToChange: (state, action) => {
            state.product.push( action.payload)
            console.log(action.payload);
        }
    }
})

export const { setProductToChange } = updateProductSlice.actions

export const selectComponent = (state) => state.productToUpdate.product

export default updateProductSlice.reducer