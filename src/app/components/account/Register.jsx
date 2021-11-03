import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { defaulValuesRegister } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";

const RegisterForm = () => (
  <Formik initialValues={defaulValuesRegister}>
    <Form>
      <div className="space">
      <label>
        <Field name="gender" id="gender" value="Man" type="radio"  />
        Mr
      </label>
      <label>
        <Field name="gender" id="gender" value="Woman" type="radio" />
        Mme
      </label>
      </div>
      <br />
    

      <Field name="lastName" id="lastName" type="text" placeholder="Nom"   className="input" />
      <br />
      <Field name="name" id="name" type="text" placeholder="Prénom"   className="input" />
      <br />
      <Field
        name="email"
        id="email"
        type="email"
        placeholder="Adresse E-mail"
        className="input"
      />
      <br />
      <Field
        name="password"
        id="password"
        type="password"
        placeholder="Mot de Passe"
        className="input"
      />
      <br />
      <Field
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
        className="input"
      />
      <br />
      <Field
        name="phoneNumber"
        id="phoneNumber"
        type="text"
        placeholder="Numéro de téléphone"
        className="input"
      />
      <br />
      <Field
        name="birthDate"
        id="birthDate"
        type="text"
        placeholder="Date de naissance"
        className="input"
      />
      <br />
      <br />
      <button className="btn btn-primary">S'inscrire</button>
    </Form>
  </Formik>
);

const Register = () => {
  return (
    <div className="register">
      <RegisterForm />
      <br/>
      <p>
        En vous inscrivant vous acceptez notre politique de RGPD. Les données
        recueillies sont déstinées aux services de la courseaujouet.fr et ses
        partenaires pour le traitement de vos commandes.
      </p>
    </div>
  );
};

export default Register;
