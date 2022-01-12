import { createSlice } from '@reduxjs/toolkit';
import { setProductState } from '../services/productServices';



 const initialState = {
     product : {}
 }

export const updateProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductToChange: (state, action) => {
            state.product = action.payload
            setProductState(action.payload)
        }
    }
})

export const { setProductToChange } = updateProductSlice.actions

export const selectComponent = (state) => state.productToUpdate.product

export default updateProductSlice.reducer