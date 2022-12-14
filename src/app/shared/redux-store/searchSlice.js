import { createSlice } from '@reduxjs/toolkit';
import { setSearch, getSearch, setInput, getInput } from './../services/searchServices';


/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */
const initialState = {
    searchResult: getSearch(), 
    valueInput: getInput()
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getValues: (state, action) => {
            setSearch(action.payload)
            state.searchResult = action.payload
        },
        getValueInput: (state, action) => {
            setInput(action.payload)
            state.valueInput = action.payload
        }
    }
})

export const { getValues, getValueInput } = searchSlice.actions
    
export const selectSearchResult = (state) => state.search.searchResult

export const inputValue = (state) => state.search.valueInput

export default searchSlice.reducer