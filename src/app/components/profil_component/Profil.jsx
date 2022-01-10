import { Field, Form, Formik } from 'formik';
import React from 'react';
import { editProfil } from '../../api/backend/account';
import { CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
import { EditUserSchema } from '../../shared/constants/formik-yup/yup/yupUser';
import { accountUser } from '../../shared/services/accountServices';


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
                        <label className='text-nav-blue font-semibold text-lg w-2/4'>Nom
                            <Field type="text" name="lastName" component={CustomInput} placeholder="Nom" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                        </label>
                        <label className='text-nav-blue font-semibold text-lg sm:my-4 xl:ml-2 w-2/4'>Prénom
                            <Field type="text" name="firstName" component={CustomInput} placeholder="Prénom" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                        </label>
                    </div>

                    {/* Email */}
                    <label className='text-nav-blue font-semibold text-lg'>E-mail
                        <Field type="text" name="email" component={CustomInput} placeholder="E-mail" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                    </label>

                    {/* Date de naissance */}
                    <label className='text-nav-blue font-semibold text-lg'>Date de naissance
                        <Field type="date" name="birthday_date" component={CustomInput} placeholder="Date de naissance" className="border-b-4 border-r-4  border-gray-300 mb-3 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                    </label>

                    {/* Téléphone */}
                    <label className='text-nav-blue font-semibold text-lg'>Téléphone
                        <Field type="text" name="phone" component={CustomInput} placeholder="Téléphone (optionnel)" className="border-b-4 border-r-4  border-gray-300 hover:border-nav-blue focus:border-b-4 focus:border-r-4 focus:border-nav-blue" />
                    </label>

                    <button type="submit" className="btn btn-yellow mt-3 text-nav-blue font-semibold">
                        Modifier
                    </button>
                </Form>
            </Formik>
        </>
    );
};

export default ProfilUser;