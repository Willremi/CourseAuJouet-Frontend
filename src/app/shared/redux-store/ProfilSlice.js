import { createSlice } from '@reduxjs/toolkit';
import { getValueMenu } from '../services/profilNavigationServices';
import { setValueMenu } from '../services/profilNavigationServices';

 const initialState = { 
    selectMenu : getValueMenu()
}

export const ProfilSlice = createSlice({
    name: 'DashBoardMenu',
    initialState,
    reducers: {
        setComponent: (state, action) => {
            setValueMenu(action.payload)
            state.selectMenu = action.payload
        }
    }
})

export const { setComponent } = ProfilSlice.actions

export default ProfilSlice.reducer