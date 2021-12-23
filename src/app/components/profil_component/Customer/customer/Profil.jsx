import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CustomInput } from '../../../../shared/components/form-and-error-components/InputCustom';
import { accountUser } from '../../../../shared/services/accountServices';

const ProfilUser = () => {
    const user = accountUser()
    const valuesProfil = {
        lastName: user.lastname,
        firstName: user.firstname, 
        email: user.email,
        birthday_date: user.birthday_date,
        phone: user.phone
    }
    return (
        <>
            <h2 className='text-nav-blue font-semibold uppercase text-xl'>Données personnelles</h2>
            {/* <p>{user.civility}</p> */}
            
            <Formik initialValues={valuesProfil}>
                <Form>
                    <div className='flex'>
                        <Field type="text" name="lastName" component={CustomInput} value={user.lastname} />
                        <Field type="text" name="firstName" component={CustomInput} value={user.firstname} />
                    </div>
                    <Field type="text" name="email" component={CustomInput} value={user.email} />
                    <Field type="date" name="birthday_date" component={CustomInput} value={user.birthday_date} />
                    <Field type="text" name="phone" component={CustomInput} value={user.phone === null ? 'Non renseigné' : user.phone} />
                </Form>
            </Formik>
        </>
    );
};

export default ProfilUser;