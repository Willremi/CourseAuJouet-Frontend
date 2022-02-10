import React, { useEffect, useState } from "react";
import { GetNewProduct } from "./../../api/backend/product";
import Card from './../../shared/components/pdt-components/Card';

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
    <h2 className="ml-10 font-Annie font-semibold text-4xl text-secondary-600 my-3">ÇA VIENT D'ARRIVER</h2>
      {showNewProduct !== undefined ? (
        <ul className={`grid grid-cols-4 gap-x-3
        sm:overflow-scroll
        md:overflow-scroll`}
        >
          {showNewProduct.map((show, index) => 
            <li key={index} className="flex w-4/6 pt-3 mx-auto lg:w-full xl:w-full md:w-full sm:w-full">
             
              <Card key={index} products={show} />
            
            </li>
            
          
           )}
        </ul>
      ) : null}
    </>
  );
};

export default NewProduct;
