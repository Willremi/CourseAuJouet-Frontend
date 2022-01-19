import React from 'react'
import { Formik, Form, Field } from 'formik';
import { schemaFormDeliveryMode } from './../../shared/constants/formik-yup/yup/yupDeliveryMode';
import { useSelector } from 'react-redux';
import { selectDelivery } from '../../shared/redux-store/deliverySlice';

const DeliveryMode = ({ change }) => {
    const DeliveryValue = useSelector(selectDelivery)

    return (
        <Formik 
        validationSchema={schemaFormDeliveryMode}
        >
            <Form className="flex flex-row sm:flex-col items-center sm:justify-between sm:w-full">
                <label htmlFor="DeliveryMode">Mode de livraison : </label>
                <Field
                as="select"
                value={DeliveryValue}
                name="DeliveryMode"
                className="border-gray-300 border ml-3 rounded-md outline-none sm:mt-2"
                onChange={(e) => change(e) }>
                    <option value="Magasin">En magasin</option>
                    <option value="Relais">En point relais</option>
                    <option value="Domicile">A domicile</option>
                </Field>
            </Form>
        </Formik>
    )
}

export default DeliveryMode
