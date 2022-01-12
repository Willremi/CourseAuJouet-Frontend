import React from 'react'
import { toast } from 'react-toastify';

const successToastMessageProductQuantity = (message) => (
<div className="text-center">
        <strong>
            {
                message == null ? (
                    null
                ) : (
                    <>
                        {message}
                    </>
                )
            }

        </strong>
    </div>
)

/**
 * Component to handle the success from add to sessionStorage
 * 
 * @param {object} success 
 * 
 * @author Mathieu
 */

 const HandleQuantityProductInCart = (message) => {
    if (!message) return
    toast.success(successToastMessageProductQuantity(message))
}

export default HandleQuantityProductInCart;