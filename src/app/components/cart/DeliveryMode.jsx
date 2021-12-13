import React from 'react'
import { Formik, Form, Field } from 'formik';
import { schemaFormDeliveryMode } from './../../shared/constants/formik-yup/yup/yupDeliveryMode';

const DeliveryMode = ({ change }) => {

    return (
        <Formik 
        validationSchema={schemaFormDeliveryMode}
        >
            <Form className="flex flex-row sm:flex-col items-center sm:justify-between sm:w-full">
                <label htmlFor="DeliveryMode">Mode de livraison : </label>
                <Field
                as="select"
                name="DeliveryMode"
                className="border-gray-300 border ml-3 rounded-md outline-none sm:mt-2"
                onChange={(e) => change(e) }>
                    <option value="Magasin" className="">En magasin</option>
                    <option value="Relais">En point relais</option>
                    <option value="Domicile">A domicile</option>
                </Field>
            </Form>
        </Formik>
    )
}

export default DeliveryMode
