import React ,{ useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getOneProduct } from "../api/backend/product"

const WishlistView = () => {
    const [wishlist, setWishlist ] = useState()
    const selectWishlist = useSelector()
    
    useEffect(() => {
        getOneProduct(selectWishlist._id)
            .then( (res) => setWishlist(res.data))
    },[])
    
    return (
        <div>
            
        </div>
    )
}

export default WishlistView