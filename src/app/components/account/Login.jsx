import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

import { defaulValuesLogin } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { schemaFormLogin } from "../../shared/constants/formik-yup/yup/yupUser";
import {
  CustomCheckbox,
  CustomInput,
} from "../../shared/components/form-and-error-components/InputCustom";
import ErrorMessSmall from "./../../shared/components/form-and-error-components/ErrorMessSmall";
import { EyeIcon } from "@heroicons/react/solid";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import { connectWithGoogle } from "../../api/backend/account";

const LoginForm = ({
  submit,
  errorLog,
  hideModal,
  setViewPassword,
  viewPassword,
  googleSuccess,
  googleFailure,
  facebookSuccess
}) => (
  <Formik
    initialValues={defaulValuesLogin}
    validationSchema={schemaFormLogin}
    onSubmit={submit}
  >
    <Form className="flex flex-col mt-4">
      <div className="flex-col space-y-3">
        <div>
          <label htmlFor="firstname"> Adresse email </label>
          <Field
            type="text"
            name="email"
            placeholder="Entrez votre e-mail"
            component={CustomInput}
            className="lowercase"
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="mt-4">
            
            Votre mot de passe
          </label>
          <button type="button" onClick={() => setViewPassword(!viewPassword)}>
            <EyeIcon className="absolute h-6 w-6 top-8 right-3 z-50 text-gray-500 duration-200 hover:text-gray-700" />
          </button>
          <Field
            type={viewPassword ? "text" : "password" }
            name="password"
            placeholder="Mot de passe"
            component={CustomInput}
          />
        </div>
      </div>

      <div className="flex items-center justify-between my-4">
        <Field
          name="rememberMe"
          label="Se souvenir de moi"
          component={CustomCheckbox}
          value={true}
        />

        <Link
          to="/forgot-password"
          className="text-sm font-medium text-primary-600 hover:text-primary-500 cursor-pointer"
        >
          Mot de passe oublié ?
        </Link>
      </div>

      <div className="flex flex-col self-center w-3/4 max-w-lg">
        <button type="submit" className="btn btn-yellow mb-2">
          Se connecter
        </button>
        <ReactFacebookLogin
            appId="458989835602531"
            autoLoad={true}
            fields="name,email,picture"
            callback={facebookSuccess}
            />

        <GoogleLogin
          clientId="286030895718-ntorq5iqa5isuht2ic96dk25fduk280k.apps.googleusercontent.com"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={"single_host_origin"}
          />

        {errorLog && (
          <ErrorMessSmall middle message="Login/Password incorrect(s)" />
        )}

        <p className="self-center mt-4 mb-1">vous êtes nouveau ici ?</p>

       
          <Link to="/register" 
          className="btn btn-yellow-border"
          onClick={() => hideModal(false)}>S'inscrire</Link>
        
      </div>
    </Form>
  </Formik>
);

const Login = (props) => {
  const [viewPassword, setViewPassword] = useState(false);


  return (
    <div className="p-3">
      <h2 className="my-5 text-2xl">Vous avez déjà un compte ?</h2>
      <LoginForm
        {...props}
        viewPassword={viewPassword}
        setViewPassword={setViewPassword}
      />
    </div>
  );
};

export default Login;
