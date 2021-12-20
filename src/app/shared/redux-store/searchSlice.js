import { createSlice } from '@reduxjs/toolkit';
import { setSearch, getSearch } from './../services/searchServices';


/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */
const initialState = {
    searchResult: getSearch(),
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getValues: (state, action) => {
            setSearch(action.payload)
            state.searchResult = action.payload
        },
    }
})

export const { getValues } = searchSlice.actions
    
export const selectSearchResult = (state) => state.search.searchResult

export default searchSlice.reducer