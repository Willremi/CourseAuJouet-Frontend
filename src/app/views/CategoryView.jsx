import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getProductByCategory } from "../api/backend/product"

const CategoryView = () => {
    const {category} = useParams()
    const [products, setProducts] = useState()

    useEffect(() => {
        console.log("categorie =>",category);
        getProductByCategory({category})
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error))
    },[category])

    console.log(products)

    return (
        <>
            <div>ceci est la page Categorie pour la categorie {category} </div>
        </>
        )
}

export default CategoryView