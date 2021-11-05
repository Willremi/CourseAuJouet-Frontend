import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { defaulValuesRegister } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { schemaFormRegister } from "../../shared/constants/formik-yup/yup/yupUser";

const submit = (values) => {
  return console.log(values);
};

const RegisterForm = () => (
  <Formik
    initialValues={defaulValuesRegister}
    validationSchema={schemaFormRegister}
    onSubmit={submit}
  >
    <Form className="flex-col flex sm:ml-24 sm:-mt-96 lg:-mt-0 lg:ml-0 border border-gray-300 rounded-sm p-12 shadow-xl bg-white space-y-2 md:w-10/12">
      <div className="space-x-2 flex">
        
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
      />
      <ErrorMessage name="lastName" className="text-red-500" component="span" />
      <br />
      <Field
        name="firstName"
        id="firstName"
        type="text"
        placeholder="Prénom*"
        className="input2"
      />
      <ErrorMessage
        name="firstName"
        className="text-red-500"
        component="span"
      />
      <br />
      <Field
        name="email"
        id="email"
        type="email"
        placeholder="Adresse E-mail*"
        className="input2"
      />
      <ErrorMessage name="email" className="text-red-500" component="span" />
      <br />
      <Field
        name="password"
        id="password"
        type="password"
        placeholder="Mot de Passe*"
        className="input2"
      />
      <ErrorMessage name="password" className="text-red-500" component="span" />
      <br />
      <Field
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe*"
        className="input2"
      />
      <ErrorMessage
        name="confirmPassword"
        className="text-red-500"
        component="span"
      />
      <br />
      <Field
        name="phone"
        id="phone"
        type="text"
        placeholder="Numéro de téléphone*"
        className="input2"
      />
      <ErrorMessage name="phone" className="text-red-500" component="span" />
      <br />
      <Field
        name="birthday_date"
        id="birthday_date"
        type="text"
        placeholder="Date de naissance*"
        className="input2"
      />
      <ErrorMessage
        name="birthday_date"
        className="text-red-500"
        component="span"
      />
      <br />
      <br />
      <button type="submit" className="btn btn-yellow sm:self-center">
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
    <div className=" sm:w-9/12 sm: mt-48 md:mt-24 lg:flex lg:justify-center">
      <RegisterForm />
    </div>
  );
};

export default Register;
