import React  from "react"
import Card from "../shared/components/pdt-components/Card"
import { getLocalWishlist } from "../shared/services/wishlistService"

const WishlistView = () => {
    const wishlist = getLocalWishlist()
    console.log(wishlist);
    
    return (
        <>
          <h2 className="ml-10 font-Annie font-semibold text-4xl text-secondary-600 my-3">VOTRE LISTE DE SOUHAITS</h2>
            {wishlist !== undefined ? (
                <ul className={`grid grid-cols-4 gap-x-3
                sm:overflow-scroll
                md:overflow-scroll`}
                >
                {wishlist.map((show, index) => 
                    <li key={index} className="flex w-4/6 pt-3 mx-auto lg:w-full xl:w-full md:w-full sm:w-full">
                    
                        <Card key={index} products={show} />
                    
                    </li>
                    
                
                )}
                </ul>
            ) : <p className="ml-10">
                    Vous n'avez pas encore de produits dans votre Liste de souhaits, 
                    rendez-vous sur une page produit pour en ajouter
                </p>}  
        </>
    )
}

export default WishlistView