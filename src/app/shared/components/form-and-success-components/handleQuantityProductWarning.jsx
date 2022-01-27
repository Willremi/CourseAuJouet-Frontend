import React from 'react'
import { toast } from 'react-toastify';

const warningToastMessageProductQuantity = (message) => (
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

 const handleQuantityProductWarning = (message) => {
    if (!message) return
    toast.warning(warningToastMessageProductQuantity(message))
}

export default handleQuantityProductWarning;