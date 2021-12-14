import React from "react";
import { FilteringSearchProduct } from "../../shared/services/searchServices";
import Card from "./../../shared/components/pdt-components/Card";

const SearchResultList = ({searchResult, filterValue}) => {

  // Fonction qui compare certain élément de l'objet avec les valeur du filtre
const Product = FilteringSearchProduct(searchResult, filterValue)

  return (

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-2">
      {Product.map((result, index) => (
          <Card key={index} products={result} />
        ))}

        
      </div>

  );
};

export default SearchResultList;
