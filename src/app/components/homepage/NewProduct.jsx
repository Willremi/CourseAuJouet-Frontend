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
    <h2 className="font-Annie font-semibold text-4xl text-secondary-600 my-3">ÇA VIENT D'ARRIVER</h2>
      {showNewProduct !== undefined ? (
        <ul className={`grid grid-cols-4 gap-x-3 w-2/3 mx-auto
        sm:overflow-scroll sm:gap-x-44
        md:overflow-scroll  ${window.innerWidth < 700 && window.innerWidth > 504 ? 'md:gap-x-44' : 'md:gap-x-10'}`}
        
        
        >
          {showNewProduct.map((show, index) => 
            <li key={index}>
             
              <Card key={index} products={show} />
            
            </li>
            
          
           )}
        </ul>
      ) : null}
    </>
  );
};

export default NewProduct;
