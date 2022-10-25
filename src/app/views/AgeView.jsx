import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getProductByAge } from "../api/backend/product"

import Card from "../shared/components/pdt-components/Card"

const AgeView = () => {
    const {age} = useParams()
    const [products, setProducts] = useState()

    useEffect(() => {
        console.log("categorie =>",age);
        getProductByAge({age})
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error))
    },[age])



    return (
        <>
        <h2 className="font-Annie font-semibold text-4xl ml-10 text-secondary-600 my-3 uppercase">Catégorie : "{age}"</h2>
          {products !== undefined ? (
            <ul className={`grid grid-cols-4 gap-x-3
            sm:overflow-scroll
            md:overflow-scroll`}>
              {products.products.map((product, index) => 
                <li key={index} className="flex w-4/6 pt-3 mx-auto lg:w-full xl:w-full md:w-full sm:w-full">
                 
                  <Card key={index} products={product} />
                
                </li>
                
              
               )}
            </ul>
          ) : null}
        </>
      );
}

export default AgeView