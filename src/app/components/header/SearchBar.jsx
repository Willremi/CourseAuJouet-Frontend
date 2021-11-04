import React from "react";
import { Formik, Form, Field } from "formik";
import { CustomInput } from "./../../shared/components/form-and-error-components/InputCustom";
import { schemaFormSearch } from "./../../shared/constants/formik-yup/yup/yupSearch";
import { SearchIcon } from "@heroicons/react/solid";

/* Barre de recherche 
pour le moment ce n'est qu'un input elle n'est pas encore rattachée au back-end*/

const SearchBar = () => {
  // Fonction qui recupère et affiche dans la console la valeur tapée dans la barre de recherche
  const SearchBarFunction = (values) => {
      console.log(values);
  };

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => SearchBarFunction(values.search)}
      validationSchema={schemaFormSearch}
    >

      <Form className={`${window.innerWidth <= 1024 ? 'w-full' : 'w-2/5' } px-4`}>
        
          <SearchIcon className="h-6 w-6 absolute mt-2.5 ml-2.5 z-30 text-yellow-500" />
          <Field
            className="pl-10 w-full rounded-full"
            type="search"
            name="search"
            placeholder="Rechercher..."
            component={CustomInput}
            noError
            searchBar
          />
        
      </Form>
    </Formik>
  );
};

export default SearchBar;
