import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { CustomInput } from "../../shared/components/form-and-error-components/InputCustom";
import { defaultValuesChangePassword } from "../../shared/constants/formik-yup/default-values-form/idefaultValuesUser";
import { ChangePasswordSchema } from "../../shared/constants/formik-yup/yup/yupUser";


const ChangePassword = ({submit}) => (
    <Formik
    initialValues={defaultValuesChangePassword}
    validationSchema={ChangePasswordSchema}
    onSubmit={submit}
  >
    <Form className="mx-auto flex flex-col 
    sm:space-y-3
    md:flex-row md:space-x-3 
    lg:mt-5 lg:space-x-3 lg:w-full lg:flex-row lg:justify-between
    xl:mt-5 xl:space-x-3 xl:w-full xl:flex-row xl:justify-between
    2xl:mt-5 2xl:space-y-3 2xl:w-full 2xl:flex-col 2xl:justify-between ">
        <Field
         type="password"
         name="oldPassword"
         placeholder="Ancien mot de passe"
         component={CustomInput}
         className="rounded-lg w-full p-3"
        />
        <ErrorMessage
          name="phone"
          className="text-red-500 sm:place-items-end"
          component="span"
        />
      <Field
        type="password"
        name="password"
        placeholder="Nouveau mot de passe"
        component={CustomInput}
        className="rounded-lg w-full p-3"
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
        className="rounded-lg w-full p-3 "
      />
      <ErrorMessage
          name="phone"
          className="text-red-500 sm:place-items-end"
          component="span"
        />  

      <button
        type="submit"
        className="bg-yellow-500 text-white font-semibold rounded-lg w-full p-3"
      >
        Changer le mot de passe
      </button>
    </Form>
  </Formik>
);

export default ChangePassword
