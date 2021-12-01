import React from 'react'
import { useSelector } from 'react-redux';
import { selectSearchResult } from './../shared/redux-store/searchSlice';
import SearchResultList from '../components/search/SearchResultList';

const SearchView = () => {
    
    const searchResult = useSelector(selectSearchResult);
    console.log(searchResult)
    return (
        <div className="w-11/12 mx-auto my-5">
           <SearchResultList />
        </div>
    )
}

export default SearchView
