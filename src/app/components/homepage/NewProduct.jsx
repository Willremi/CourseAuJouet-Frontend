import React, { useEffect, useState } from "react";
import { SortProductDate } from "../../shared/services/productServices";
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
        setShowNewProduct(SortProductDate(res.data.product, 30))
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
    <h2 className="font-Annie font-semibold text-4xl text-secondary-600">CA VIENS D'ARRIVER</h2>
      {showNewProduct !== undefined ? (
        <ul className="flex flex-row sm:overflow-scroll justify-between space-x-3 w-full mt-4">
          {showNewProduct.map((show, index) => 
            <li key={index} className="w-2/6 sm:w-full">
              {index <= 3 ? <>
              <Card products={show} />
            </> : null }
            </li>
            
          
           )}
        </ul>
      ) : null}
    </>
  );
};

export default NewProduct;
