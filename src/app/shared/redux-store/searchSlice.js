import { createSlice } from '@reduxjs/toolkit';
import { getSearchResult } from './../../api/backend/search';

/**
 * initial state: is logged check if the user is already authenticated when openning the Application
 * @author Peter Mollet
 */
 const initialState = { 
    searchValue : ""
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getValues: (state, action) => {

            getSearchResult(action.payload)
      .then((res) => {
  
      })
      .catch((error) => console.log(error));
            state.searchValue = action.payload
        },
    }
})

export const { getValues } = searchSlice.actions

export const selectSearchValue = (state) => state.search.searchValue
export default searchSlice.reducer