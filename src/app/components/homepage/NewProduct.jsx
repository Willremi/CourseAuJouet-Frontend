import React, { useEffect, useState } from "react";
import { GetNewProduct } from "./../../api/backend/product";
import Card from './../../shared/components/pdt-components/Card';

/**
 * SortProductDate()
 * @param 1er parametre données a envoyer 
 * @param 2eme parametre nombre de jours d'apparition
 * @author Mathieu
 */

const NewProduct = () => {
  const [showNewProduct, setShowNewProduct] = useState([]);

  useEffect(() => {
    GetNewProduct()
      .then((res) => {
        setShowNewProduct(res.data.product)
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
    <h2 className="font-Annie font-semibold text-4xl text-secondary-600">ÇA VIENT D'ARRIVER</h2>
      {showNewProduct !== undefined ? (
        <ul className="flex flex-row sm:overflow-scroll md:overflow-scroll lg:overflow-scroll justify-between space-x-3 w-full mt-4 sm:pr-10 md:pr-8">
          {showNewProduct.map((show, index) => 
            <li key={index} className="w-2/6 sm:w-full md:w-full">
             
              <Card key={index} products={show} />
            
            </li>
            
          
           )}
        </ul>
      ) : null}
    </>
  );
};

export default NewProduct;
