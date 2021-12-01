import React from "react";
import { useSelector } from "react-redux";
import Card from "./../../shared/components/pdt-components/Card";
import { selectSearchResult } from "./../../shared/redux-store/searchSlice";

const SearchResultList = () => {
  const searchResult = useSelector(selectSearchResult);

  return (
    <>
      <div className="flex flex-row items-center my-6 sm:flex-col sm:items-start">
        <h2 className="font-Annie font-semibol text-4xl text-secondary-600 mr-3">
          Résultat pour "Texte de l'input recherche"
        </h2>
        <span>{`(nombres) article(s) trouvé(s)`}</span>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-2">
        {searchResult.map((result, index) => (
          <Card key={index} products={result} />
        ))}
      </div>
    </>
  );
};

export default SearchResultList;
