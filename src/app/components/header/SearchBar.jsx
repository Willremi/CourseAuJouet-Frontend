import React from "react";
import { Formik, Form, Field } from "formik";
import { CustomInput } from "./../../shared/components/form-and-error-components/InputCustom";
import { schemaFormSearch } from "./../../shared/constants/formik-yup/yup/yupSearch";
import { SearchIcon } from "@heroicons/react/solid";
import { useDispatch } from 'react-redux';
import { getValues } from "../../shared/redux-store/searchSlice";
import { getSearchResult } from "../../api/backend/search";
import { useHistory } from 'react-router';
import { URL_SEARCH_PAGE } from "../../shared/constants/urls/urlConstants";

const SearchBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  

  const SearchBarFunction = (values) => {
    const searchedData = {search: values}
    getSearchResult(searchedData)
    .then((res) => {
         dispatch(getValues(res.data.result, searchedData.search))
         history.push(URL_SEARCH_PAGE)
    })
    .catch((error) => console.log(error));
    
  };

  return (
    <Formik
      initialValues={{ search: ''}}
      onSubmit={(values) => SearchBarFunction(values.search)}
      validationSchema={schemaFormSearch}
    >
      <Form className="w-full px-4 flex mt-2 items-center md:pb-2">
        <div className="bg-white p-2 rounded-l-full sm:p-1.65 border border-r-0">
           <SearchIcon className="h-6 w-6 text-yellow-500" />
        </div>
        <Field
          className="w-full rounded-r-full border-l-0 pl-0"
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
