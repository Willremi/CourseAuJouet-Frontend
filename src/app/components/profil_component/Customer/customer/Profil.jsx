import { Field, Form, Formik } from 'formik';
import React from 'react';
import { editProfil } from '../../../../api/backend/account';
import { CustomInput } from '../../../../shared/components/form-and-error-components/InputCustom';
import { EditUserSchema } from '../../../../shared/constants/formik-yup/yup/yupUser';
import { accountUser } from '../../../../shared/services/accountServices';

const ProfilUser = () => {
    const user = accountUser()
    const valuesProfil = {
        civility: user.civility,
        lastName: user.lastname,
        firstName: user.firstname,
        email: user.email,
        birthday_date: user.birthday_date,
        phone: user.phone === null ? '' : user.phone
    }


    const handleEdit = (values) => {
        const userId = user.userId;
        editProfil(userId, values).then(res => {
            console.log(res.data.message)

        })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <h2 className='text-nav-blue font-bold uppercase text-xl mb-8'>Données personnelles</h2>

            <Formik initialValues={valuesProfil} validationSchema={EditUserSchema} onSubmit={handleEdit}>
                <Form>
                    {/* genre */}
                    <div className=" grid md:flex xl:flex md:space-x-2 xl:space-x-2 mb-4">
                        <p className='text-nav-blue font-semibold text-lg'>Civilité : </p>
                        <label>
                            <Field type="radio" name="civility" value="Man" className="ml-3  mr-2" />
                            Monsieur
                        </label>
                        <label>
                            <Field
                                type="radio"
                                name="civility"
                                value="Woman"
                                className="ml-3 mr-2"
                            />
                            Madame
                        </label>
                        <label>
                            <Field
                                type="radio"
                                name="civility"
                                value="Other"
                                className="ml-3 mr-2"
                            />
                            Autre
                        </label>
                    </div>

                    {/* Nom et Prénom */}
                    <div className='flex'>
                        <Field type="text" name="lastName" component={CustomInput} placeholder="Nom" className="mr-2 border-b-4 border-r-4  border-gray-300" />
                        <Field type="text" name="firstName" component={CustomInput} placeholder="Prénom" className="ml-2 border-b-4 border-r-4  border-gray-300" />
                    </div>

                    {/* Email/Date de naissance/téléphone */}
                    <Field type="text" name="email" component={CustomInput} placeholder="E-mail" className="my-4 border-b-4 border-r-4  border-gray-300" />
                    <Field type="date" name="birthday_date" component={CustomInput} placeholder="Date de naissance" className="my-4 border-b-4 border-r-4  border-gray-300" />
                    <Field type="text" name="phone" component={CustomInput} placeholder="Téléphone (optionnel)" className="my-4 border-b-4 border-r-4  border-gray-300" />

                    <button type="submit" className="btn btn-yellow mb-2 text-nav-blue font-semibold">
                        Modifier
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default ProfilUser;