import React, { useEffect, useState } from "react";
import { GetPopularProduct } from "./../../api/backend/product";
import Card from './../../shared/components/pdt-components/Card';

/**
 * SortProductDate()
 * @param 1er parametre données a envoyer 
 * @param 2eme parametre nombre de jours d'apparition
 * @author Mathieu
 */

const PopularProduct = () => {
  const [showPopularProduct, setShowPopularProduct] = useState([]);

  useEffect(() => {
    GetPopularProduct()
      .then((res) => {
        setShowPopularProduct(res.data.popularProduct)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <h2 className="font-Annie font-semibold text-4xl text-secondary-600">Les + Populaires</h2>
      {showPopularProduct !== undefined ? (
        <ul className="flex flex-row sm:overflow-scroll justify-between space-x-3 w-full mt-4">
          {showPopularProduct.map((show, index) => 
            <li key={index} className="w-2/6 sm:w-full">
             
              <Card key={index} products={show} />
            
            </li>
            
          
           )}
        </ul>
      ) : null}
    </>
  );
};

export default PopularProduct;
