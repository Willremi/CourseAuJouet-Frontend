import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { editProfil } from '../../../../api/backend/account';
import { CustomInput } from '../../../../shared/components/form-and-error-components/InputCustom';
import { EditUserSchema } from '../../../../shared/constants/formik-yup/yup/yupUser';
import { modifUser } from '../../../../shared/redux-store/ProfilSlice';
import { accountUser } from '../../../../shared/services/accountServices';

const ProfilUser = () => {
    const user = accountUser()
    const dispatch = useDispatch()
    
    const valuesProfil = {
        civility: user.civility,
        lastName: user.lastname,
        firstName: user.firstname,
        email: user.email,
        birthday_date: user.birthday_date,
        phone: user.phone === null ? '000000000' : user.phone
    }

    
    const handleEdit = (values) => {
        const userId = user.userId;
        editProfil(userId, values).then(res => {
            // console.log(res.data.user)
            dispatch(modifUser(values))
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
            <h2 className='text-nav-blue font-semibold uppercase text-xl'>Données personnelles</h2>

            <Formik initialValues={valuesProfil} validationSchema={EditUserSchema} onSubmit={handleEdit}>
                <Form>
                    <div className="flex space-x-2">
                        <p>Civilité : </p>
                        <label>
                            <Field type="radio" name="civility" id="CivilityMan" value="Man" />
                            Mr
                        </label>
                        <label>
                            <Field
                                type="radio"
                                name="civility"
                                id="CivilityWoman"
                                value="Woman"
                            />
                            Mme
                        </label>
                        <label>
                            <Field
                                type="radio"
                                name="civility"
                                id="CivilityOther"
                                value="Other"
                            />
                            Autre
                        </label>
                    </div>

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