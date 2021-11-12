import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { CustomInput } from "../../shared/components/form-and-error-components/InputCustom";
import { defaulValuesResetPassword } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { ResetPasswordSchema } from "../../shared/constants/formik-yup/yup/yupUser";


const ResetPassword = (submit) => (
    <Formik
    initialValues={defaulValuesResetPassword}
    onSubmit={submit}
    validationSchema={ResetPasswordSchema}
  >
    <Form className="mx-auto flex flex-col 
    sm:space-y-3
    md:flex-row md:space-x-3
    lg:mt-5 lg:space-x-3 lg:w-full lg:flex-row lg:justify-between
    xl:mt-5 xl:space-x-3 xl:w-full xl:flex-row xl:justify-between
    2xl:mt-5 2xl:space-y-3 2xl:w-full 2xl:flex-col 2xl:justify-between ">
      <Field
        type="password"
        name="password"
        placeholder="Nouveau mot de passe"
        component={CustomInput}
        className="rounded-lg w-full p-3 mb-2"
      />
        <ErrorMessage
          name="phone"
          className="text-red-500 sm:place-items-end"
          component="span"
        />

      <Field
        type="password"
        name="confirmPassword"
        placeholder="Confirmer votre nouveau mot de passe"
        component={CustomInput}
        className="rounded-lg w-full p-3 mb-2"
      />
      <ErrorMessage
          name="phone"
          className="text-red-500 sm:place-items-end"
          component="span"
        />  

      <button
        type="submit"
        className="bg-yellow-500 text-white font-semibold p-3 rounded-lg w-full"
      >
        Changer le mot de passe
      </button>
    </Form>
  </Formik>
);

export default ResetPassword
