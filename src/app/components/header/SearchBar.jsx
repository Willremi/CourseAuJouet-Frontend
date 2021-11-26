import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { CustomInput } from "./../../shared/components/form-and-error-components/InputCustom";
import { schemaFormSearch } from "./../../shared/constants/formik-yup/yup/yupSearch";
import { SearchIcon } from "@heroicons/react/solid";
import { getSearchResult } from "./../../api/backend/search";
import { useHistory } from "react-router";
import { URL_SEARCH_PAGE } from "../../shared/constants/urls/urlConstants";

/* Barre de recherche 
pour le moment ce n'est qu'un input elle n'est pas encore rattachée au back-end*/

const SearchBar = () => {
  
  

  // Fonction qui recupère et affiche dans la console la valeur tapée dans la barre de recherche
  const SearchBarFunction = (values) => {
    
  };

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => SearchBarFunction(values.search)}
      validationSchema={schemaFormSearch}
    >
      <Form className="w-full px-4 flex mt-2 items-center md:pb-2">
        <SearchIcon className="h-6 w-6 absolute ml-2.5 z-30 text-yellow-500" />
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
