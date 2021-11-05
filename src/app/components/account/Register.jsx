import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { defaulValuesRegister } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { schemaFormRegister } from "../../shared/constants/formik-yup/yup/yupUser";
import axios from "axios";
import { register } from "../../api/backend/account";

const submit = (values) => {
  return register()
  
};

const RegisterForm = () => (
  <Formik
    initialValues={defaulValuesRegister}
    validationSchema={schemaFormRegister}
    onSubmit={submit}
  >
    <Form className="flex-col flex space-y-4">
      <div className="flex space-x-2">
        <p>Civilité* :</p>
        <label>
          <Field type="radio" name="Civility" id="CivilityMan" value="Man" />
          Mr
        </label>
        <label>
          <Field
            type="radio"
            name="Civility"
            id="CivilityWoman"
            value="Woman"
          />
          Mme
        </label>
      </div>

      <Field
        name="lastName"
        id="lastName"
        type="text"
        placeholder="Nom*"
        className="input2 "
        required
      />
      <ErrorMessage name="lastName" className="text-red-500" component="span" />

      <Field
        name="firstName"
        id="firstName"
        type="text"
        placeholder="Prénom*"
        className="input2"
        required
      />
      <ErrorMessage
        name="firstName"
        className="text-red-500"
        component="span"
      />

      <Field
        name="email"
        id="email"
        type="email"
        placeholder="Adresse E-mail*"
        className="input2"
        required
      />
      <ErrorMessage name="email" className="text-red-500" component="span" />

      <Field
        name="password"
        id="password"
        type="password"
        placeholder="Mot de Passe*"
        className="input2"
        required
      />
      <ErrorMessage name="password" className="text-red-500" component="span" />

      <Field
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe*"
        className="input2"
        required
      />
      <ErrorMessage
        name="confirmPassword"
        className="text-red-500"
        component="span"
      />

      <div className="flex sm:space-x-2 md:space-x-4 lg:space-x-4 xl:space-x-4 2xl:space-x-4">
        <Field
          name="phone"
          id="phone"
          type="text"
          placeholder="Numéro de téléphone"
          className="input2 sm:w-1/2 md:w-1/2"
        />

        <Field
          name="birthday_date"
          id="birthday_date"
          type="text"
          placeholder="Date de naissance"
          className="input2 sm:w-1/2 md:w-1/2"
        />
      </div>
      <div className="flex sm:space-x-2 md:space-x-6 lg:space-x-32 xl:space-x-32  2xl:space-x-32">
        <ErrorMessage
          name="phone"
          className="text-red-500 sm:place-items-end"
          component="span"
        />
        <ErrorMessage
          name="birthday_date"
          className="text-red-500"
          component="span"
        />
      </div>

      <button type="submit" className="btn btn-yellow self-center">
        S'inscrire
      </button>
      <p className="text-xs">* Champ obligatoire.</p>
      <p className="text-xs mt-4">
        En vous inscrivant vous acceptez notre politique de RGPD. Les données
        recueillies sont déstinées aux services de la courseaujouet.fr et ses
        partenaires pour le traitement de vos commandes.
      </p>
    </Form>
  </Formik>
);

const Register = () => {
  return (
    <div className="sm:flex sm:mt-40 sm:ml-14 sm:w-9/12 md:flex md:mt-40 md:w-3/4 md:ml-28 lg:flex lg: mt-40 lg:ml-40 lg:w-9/12
    xl:flex xl:ml-72 2xl:flex 2xl:ml-72">
      <RegisterForm />
    </div>
  );
};

export default Register;
