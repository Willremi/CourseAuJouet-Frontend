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
    <Form>
      <div className="space">
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
      <br />

      <Field
        name="lastName"
        id="lastName"
        type="text"
        placeholder="Nom"
        className="input"
      />
      <ErrorMessage name="lastName" className="yupError" component="span" />
      <br />
      <Field
        name="firstname"
        id="firstname"
        type="text"
        placeholder="Prénom"
        className="input"
      />
      <ErrorMessage name="firstname" className="yupError" component="span" />
      <br />
      <Field
        name="email"
        id="email"
        type="email"
        placeholder="Adresse E-mail"
        className="input"
      />
      <ErrorMessage name="email" className="yupError" component="span" />
      <br />
      <Field
        name="password"
        id="password"
        type="password"
        placeholder="Mot de Passe"
        className="input"
      />
      <ErrorMessage name="password" className="yupError" component="span" />
      <br />
      <Field
        name="confirmPassword"
        id="confirmPassword"
        type="password"
        placeholder="Confirmation mot de passe"
        className="input"
      />
      <ErrorMessage
        name="confirmPassword"
        className="yupError"
        component="span"
      />
      <br />
      <Field
        name="phone"
        id="phone"
        type="text"
        placeholder="Numéro de téléphone"
        className="input"
      />
      <ErrorMessage name="phone" className="yupError" component="span" />
      <br />
      <Field
        name="birthday_date"
        id="birthday_date"
        type="text"
        placeholder="Date de naissance"
        className="input"
      />
      <ErrorMessage
        name="birthday_date"
        className="yupError"
        component="span"
      />
      <br />
      <br />
      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </Form>
  </Formik>
);

const Register = () => {
  return (
    <div className="register">
      <RegisterForm />
      <br />
      <p>
        En vous inscrivant vous acceptez notre politique de RGPD. Les données
        recueillies sont déstinées aux services de la courseaujouet.fr et ses
        partenaires pour le traitement de vos commandes.
      </p>
    </div>
  );
};

export default Register;
