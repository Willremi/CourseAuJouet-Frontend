import React from 'react'
import { toast } from 'react-toastify';

const successToastMessageAddProductToCart = (success) => (
<div className="text-center">
        <strong>
            {
                success == null ? (
                    null
                ) : (
                    <>
                        {success}
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

 const handleSessionStorageSuccess = (success) => {
    if (!success) return
    toast.success(successToastMessageAddProductToCart(success))
}

export default handleSessionStorageSuccess;