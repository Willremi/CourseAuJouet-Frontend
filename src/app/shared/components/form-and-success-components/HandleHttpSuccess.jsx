import React from 'react'
import { toast } from 'react-toastify'

const isHandlerEnabled = (config = {}) => {
    return !(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled)
}

const successToastMessage = (success) => (
    <div className="text-center">
        <strong>
            {
                success.data.message == null ? (
                    null
                ) : (
                    <>
                        {success.data.message}
                    </>
                )
            }

        </strong>
    </div>
) 

/**
 * Component to handle the success (like success from an api back end)
 * 
 * @param {object} success 
 * 
 * @author Mohamed Nechab
 */
const handleHttpSuccess = (success) => {
    if (!success) return
    else if (isHandlerEnabled(success.config)) toast.success(successToastMessage(success))
    return Promise.resolve(success);
}

export default handleHttpSuccess;