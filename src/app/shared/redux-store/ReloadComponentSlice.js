import { createSlice } from '@reduxjs/toolkit';

/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */
 const initialState = { 
    reload : false 
}

export const reloadComponentSlice = createSlice({
    name: 'reload',
    initialState,
    reducers: {
        reloadComponent: (state, action) => {
            state.reload = !state.reload
        },
    }
})

export const { reloadComponent } = reloadComponentSlice.actions

export const selectIsReloaded = (state) => state.reload.reload

export default reloadComponentSlice.reducer