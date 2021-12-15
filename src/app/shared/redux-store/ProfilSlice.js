import { createSlice } from '@reduxjs/toolkit';

/**
 * Recupere la valeur des bouton dans le aside gauche du dashboard dans le composant profil pour mettre à jour l'affichage
 * @author Mathieu
 */
 const initialState = { 
    selectMenu : ""
}

export const ProfilSlice = createSlice({
    name: 'DashBoardMenu',
    initialState,
    reducers: {
        setComponent: (state, action) => {
            state.selectMenu = action.payload
        },
    }
})

export const { setComponent } = ProfilSlice.actions

export const selectComponent = (state) => state.DashBoardValue.selectMenu

export default ProfilSlice.reducer