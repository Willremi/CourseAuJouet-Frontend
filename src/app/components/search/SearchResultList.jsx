import React from "react";
import { FilteringSearchProduct } from "../../shared/services/searchServices";
import Card from "./../../shared/components/pdt-components/Card";

const SearchResultList = ({searchResult, filterValue}) => {

  // Fonction qui compare certain élément de l'objet avec les valeur du filtre
const Product = FilteringSearchProduct(searchResult, filterValue)

  return (
        <ul className={`grid grid-cols-4 gap-x-3 mt-5
        sm:gap-x-3 sm:grid-cols-2
        md:overflow-scroll md:grid-cols-3  ${window.innerWidth < 700 && window.innerWidth > 504 ? 'md:gap-x-10' : 'md:gap-x-10'}`}
        >
          {Product.map((result, index) => (
            <li key={index}>
              <Card key={index} products={result} />
            </li>
          
        ))}
        </ul>
  );
};

export default SearchResultList;
