import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CustomInput } from '../../../../shared/components/form-and-error-components/InputCustom';
import { EditUserSchema } from '../../../../shared/constants/formik-yup/yup/yupUser';
import { accountUser } from '../../../../shared/services/accountServices';

const ProfilUser = () => {
    const user = accountUser()
    const valuesProfil = {
        lastName: user.lastname,
        firstName: user.firstname,
        email: user.email,
        birthday_date: user.birthday_date,
        phone: user.phone === null ? 'Non renseigné' : user.phone
    }
    return (
        <>
            <h2 className='text-nav-blue font-semibold uppercase text-xl'>Données personnelles</h2>
            {/* <p>{user.civility}</p> */}

            <Formik initialValues={valuesProfil} validationSchema={EditUserSchema} onSubmit={values => console.log(values)}>
                <Form>
                    <div className='flex'>
                        <Field type="text" name="lastName" component={CustomInput} />
                        <Field type="text" name="firstName" component={CustomInput} />
                    </div>
                    <Field type="text" name="email" component={CustomInput} />
                    <Field type="date" name="birthday_date" component={CustomInput} />
                    <Field type="text" name="phone" component={CustomInput} />
                    <button type="submit" className="btn btn-yellow mb-2">
                        Modifier
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default ProfilUser;