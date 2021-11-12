import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import { defaulValuesLogin } from '../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormLogin } from '../../shared/constants/formik-yup/yup/yupUser';
import { CustomCheckbox, CustomInput } from '../../shared/components/form-and-error-components/InputCustom';
//import { ErrorMessSmall } from '../../shared/components/form-and-error-components/ErrorMessSmall';


const LoginForm = ({ submit, errorLog }) => (
  <Formik
    initialValues={defaulValuesLogin}
    validationSchema={schemaFormLogin}
    onSubmit={ submit }
  >
    <Form className="flex flex-col mt-4">
      <div className="flex-col">
        <label htmlFor="firstname"> Adresse email </label>
        <Field
          type="text"
          name="email"
          placeholder="Mail"
          component={CustomInput}
        />

        <label htmlFor="password" className="mt-4"> Votre mot de passe </label>
        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          component={CustomInput}
        />
      </div>

      <div>
        <div className="flex items-center justify-between my-4">
          <Field
            name="rememberMe"
            label="Se souvenir de moi"
            component={CustomCheckbox}
            value={true}
          />
          <div className="text-sm">
            <Link to="/forgot-password">
              <span className="font-medium text-primary-600 hover:text-primary-500 cursor-pointer">
                Mot de passe oublié ?
              </span>
            </Link>
          </div>
        </div>
      </div>


      <div className="flex flex-col self-center w-3/4 max-w-lg">
        <button type="submit" className="btn btn-yellow mb-2">
          Se connecter
        </button>

        <p className="self-center mt-4 mb-1"> 
          vous êtes nouveau ici ?
        </p>

        <button className="btn btn-yellow-border ">
          <Link to="/register">
            S'inscrire
        </Link>
        </button>

      </div>
      {/* { errorLog && <ErrorMessSmall middle message="Login/Password incorrect(s)" /> } */}
    </Form> 
  </Formik>
);

const Login = (props) => {
    return (
        <div>
          <h2 className="my-5 text-2xl">Vous avez déjà un compte ?</h2>
          <LoginForm {...props} />
        </div>
    );
};

export default Login;