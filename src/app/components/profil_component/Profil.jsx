import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { editProfil } from '../../api/backend/account';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
import { EditUserSchema } from '../../shared/constants/formik-yup/yup/yupUser';
import { accountId, accountUser } from '../../shared/services/accountServices';
import { encodeToken, getPayloadToken, setToken } from '../../shared/services/tokenServices';

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
        const getToken = getPayloadToken()
        getToken.civility = values.civility
        getToken.lastname = values.lastName
        getToken.firstname = values.firstName
        getToken.email = values.email.toLowerCase()
        getToken.birthday_date = values.birthday_date
        getToken.phone = values.phone
        
        const userUpdate = encodeToken(getToken)
        const userId = accountId();
        editProfil(userId, values).then(res => {
            console.log(res.data.message)
            setToken(userUpdate)

        })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <h2 className='text-nav-blue font-bold uppercase text-xl mb-8'>Données personnelles</h2>

            <Formik initialValues={valuesProfil} validationSchema={EditUserSchema} onSubmit={handleEdit}>
                <Form>
                    {/* genre */}
                    <div className=" grid md:flex lg:flex xl:flex md:space-x-2 xl:space-x-2 mb-2">
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
                    <div className='md:flex lg:flex xl:flex'>
                        <div className='w-full xl:w-2/4 md:mr-2 lg:mr-2 xl:mr-2'>
                        <label className='text-nav-blue font-semibold text-lg'>Nom
                        </label>
                            <Field type="text" name="lastName" component={CustomInput} placeholder="Nom" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                            <ErrorMessage name="lastName" className="text-red-500" component="span" />
                        </div>
                        <div className='w-full xl:w-2/4'>
                            <label className='text-nav-blue font-semibold text-lg sm:my-4 xl:ml-2'>Prénom
                            </label>
                                <Field type="text" name="firstName" component={CustomInput} placeholder="Prénom" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                                <ErrorMessage name="firstName" className="text-red-500" component="span" />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                    <label className='text-nav-blue font-semibold text-lg'>E-mail
                    </label>
                        <Field type="text" name="email" component={CustomInput} placeholder="E-mail" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                        <ErrorMessage name="email" className="text-red-500" component="span" />
                    </div>

                    {/* Date de naissance */}
                    <div>
                    <label className='text-nav-blue font-semibold text-lg'>Date de naissance
                    </label>
                        <Field type="date" name="birthday_date" component={CustomInput} placeholder="Date de naissance" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                        <ErrorMessage name="birthday_date" className="text-red-500" component="span" />
                    </div>
                    {/* Téléphone */}
                    <div>
                    <label className='text-nav-blue font-semibold text-lg'>Téléphone
                    </label>
                        <Field type="text" name="phone" component={CustomInput} placeholder="Téléphone (optionnel)" className="border-b-4 border-r-4  border-gray-300 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                        <ErrorMessage name="phone" className="text-red-500" component="span" />
                    </div>

                    <button type="submit" className="btn btn-yellow mt-3 text-yellow-50 font-semibold">
                        Modifier
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default ProfilUser;