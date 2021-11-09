import React from 'react';
import { Formik, Form, Field } from 'formik';
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

import { defaulValuesLogin } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormLogin } from './../../shared/constants/formik-yup/yup/yupUser';
import { CustomCheckbox, CustomInput } from '../../shared/components/form-and-error-components/InputCustom';


const submit = (values) => {
    return Login()
}

const LoginForm = () => (
  <Formik
    initialValues={defaulValuesLogin}
    validationSchema={schemaFormLogin}
    onSubmit={ submit }
  >
    <Form className="flex flex-col flex space-y-4">
      <div className="flex-col ">
        <Field
          type="text"
          name="email"
          placeholder="Mail"
          component={CustomInput}
        />

        <Field
          type="password"
          name="password"
          placeholder="Mot de passe"
          component={CustomInput}
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Field
            name="rememberMe"
            label="Remember me"
            component={CustomCheckbox}
            value={true}
          />
          <div className="text-sm">
            <Link to="/forgot-password">
              <span className="font-medium text-primary-600 hover:text-primary-500 cursor-pointer">
                Forgot your password?
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-yellow self-center">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <LockClosedIcon
              className="h-5 w-5 text-primary-800 group-hover:text-primary-400"
              aria-hidden="true"
            /> */}
          </span>
          Se connecter
        </button>
      </div>
    </Form>
  </Formik>
);

const Login = (props) => {
    return (
        <div className="sm:flex sm:mt-40 sm:ml-14 sm:w-9/12 md:flex md:mt-40 md:w-3/4 md:ml-28 lg:flex lg: mt-40 lg:ml-40 lg:w-9/12
        xl:flex xl:ml-72 2xl:flex 2xl:ml-72">
            <LoginForm {...props} />
        </div>
    );
};

export default Login;