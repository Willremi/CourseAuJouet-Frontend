import React ,{ useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectWishlist } from "../shared/redux-store/wishlistSlice"

const WishlistView = () => {
    const [wishlist, setWishlist ] = useState()
    const useWishlist = useSelector(selectWishlist)
    
    
    return (
        <div>
            {wishlist[0].product_name}
        </div>
    )
}

export default WishlistView