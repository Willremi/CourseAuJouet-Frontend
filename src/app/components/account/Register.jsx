import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RegisterForm = () => (
  <Formik>
    <Form >
      <label >
        <Field name="gender" id="gender" value="Man" type="radio" />
        Mr
      </label>
      <label>
        <Field name="gender" id="gender" value="Woman" type="radio" />
        Mme
      </label><br/>

      <Field name="lastName" id="lastName" type="text" placeholder="Nom" /><br/>
      <Field name="name" id="name" type="text" placeholder="Prénom" /><br/>
      <Field
        name="email"
        id="email"
        type="email"
        placeholder="Adresse E-mail"
      /><br/>
      <Field
        name="password"
        id="password"
        type="password"
        placeholder="Mot de Passe"
      /><br/>
      <Field
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
      /><br/>
      <Field
        name="phoneNumber"
        id="phoneNumber"
        type="text"
        placeholder="Numéro de téléphone"
      /><br/>
      <Field
        name="birthDate"
        id="birthDate"
        type="text"
        placeholder="Date de naissance"
      /><br/>
    </Form>
  </Formik>
);

const Register = () => {
  return (
    <>
      <RegisterForm />
      <p>
        En vous inscrivant vous acceptez notre politique de RGPD. Les données
        recueillies sont déstinées aux services de la courseaujouet.fr et ses
        partenaires pour le traitement de vos commandes.
      </p>
    </>
  );
};

export default Register;
