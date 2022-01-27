import React from "react";
import { useSelector } from "react-redux";
import { inputValue, selectSearchResult } from "./../shared/redux-store/searchSlice";
import SearchResultList from "../components/search/SearchResultList";
import SearchFilter from "./../components/search/SearchFilter";
import { useState } from "react";

const SearchView = () => {
  const searchResult = useSelector(selectSearchResult);
  const valueInput = useSelector(inputValue)

  const [filterValue, setFilterValue] = useState({
    trademark: "undefined",
    requiredAge: "undefined",
    category: "undefined",
  });

  const handleChange = (trademark, age, category) => {
    setFilterValue({
      trademark: trademark,
      requiredAge: age,
      category: category,
    });
    return filterValue;
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-11/12 mx-auto flex flex-row items-center my-6 sm:flex-col sm:items-start">
        <h2 className="font-Annie font-semibol text-4xl text-secondary-600 mr-3">
          {searchResult.length === 0 ? "Aucun résultat" : "Résultat"} pour "{valueInput.search}"
        </h2>
        {/* <span>{`${searchResult.length} article(s) trouvé(s)`}</span> */}
        <span className="text-nav-blue font-semibold text-xl">{`${searchResult.length} article${searchResult.length > 1 ? 's' : ''} trouvé${searchResult.length > 1 ? 's' : ''}`}</span>      
      
      </div>

      {/* Filtre de recherche */}
      {searchResult.length !== 0 ? <SearchFilter searchResult={searchResult} handleChange={handleChange} filterValue={filterValue}/> : null} 
      
      

      {/* Liste des résultats de la recherche */}
        <SearchResultList searchResult={searchResult} filterValue={filterValue}/>
    </div>
  );
};

export default SearchView;
