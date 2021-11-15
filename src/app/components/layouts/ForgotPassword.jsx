import { Formik, Form, Field } from "formik";
import React from "react";
import { CustomInput } from "../../shared/components/form-and-error-components/InputCustom";
import { defaulValuesForgotPassword } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { ForgotPasswordSchema } from "../../shared/constants/formik-yup/yup/yupUser";

const ForgotPassword = ({ submit }) => (
  <Formik
    initialValues={defaulValuesForgotPassword}
    onSubmit={submit}
    validationSchema={ForgotPasswordSchema}
  >
    <Form className="mx-auto flex flex-col 
    sm:space-y-3
    md:flex-row md:space-x-3
    lg:mt-5 lg:space-x-3 lg:w-full lg:flex-row lg:justify-between
    xl:mt-5 xl:space-x-3 xl:w-full xl:flex-row xl:justify-between
    2xl:mt-5 2xl:space-x-3 2xl:w-full 2xl:flex-row 2xl:justify-between ">
      <Field
        type="email"
        name="email"
        placeholder="Adresse e-mail"
        component={CustomInput}
        className="rounded-lg w-full p-3 lowercase"
        noError
      />

      <button
        type="submit"
        className="bg-yellow-500 text-white font-semibold p-3 rounded-lg w-full"
      >
        Reinitialiser mon mot de passe
      </button>
    </Form>
  </Formik>
);

export default ForgotPassword;
