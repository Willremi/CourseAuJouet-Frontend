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
    <h2 className="font-Annie font-semibold text-4xl text-secondary-600 my-3 uppercase">Les + Populaires</h2>
      {showPopularProduct !== undefined ? (
        <ul className={`grid grid-cols-4 gap-x-3
        sm:overflow-scroll
        md:overflow-scroll`}>
          {showPopularProduct.map((show, index) => 
            <li key={index} className="flex w-4/6 pt-3 lg:w-full xl:w-full md:w-full sm:w-full">
             
              <Card key={index} products={show} />
            
            </li>
            
          
           )}
        </ul>
      ) : null}
    </>
  );
};

export default PopularProduct;
