import React, { useEffect, useState } from "react";
import { SortProductDate } from "../../shared/services/productServices";
import { GetNewProduct } from "./../../api/backend/product";

const NewProduct = () => {
  const [showNewProduct, setShowNewProduct] = useState([]);

  useEffect(() => {
    GetNewProduct()
      .then((res) => {
        setShowNewProduct(SortProductDate(res.data.product, 7)) 
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      {showNewProduct !== undefined ? (
        <div className="flex flex-row">
          {showNewProduct.map((show, index) => 
            <div key={index} className="w-1/6">
              {index <= 2 ? <>
              <img src={show.products.images[0]} alt={show.products.product_name} />
              <p>{show.products.product_name}</p>
              <p>{show.products.trademark}</p>
              <p>{show.products.price}</p>
              <p>{show.products.on_sale_date}</p>
            </> : null }
            </div>
            
          
           )}
        </div>
      ) : null}
    </>
  );
};

export default NewProduct;
