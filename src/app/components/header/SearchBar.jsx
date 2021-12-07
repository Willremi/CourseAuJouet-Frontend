import React, { useState } from "react";
import { Formik, Form } from "formik";
import { schemaFormSearch } from "./../../shared/constants/formik-yup/yup/yupSearch";
import { SearchIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { getValues } from "../../shared/redux-store/searchSlice";
import { autoCompleteSearch, getSearchResult } from "../../api/backend/search";
import { useHistory } from "react-router";
import { URL_SEARCH_PAGE } from "../../shared/constants/urls/urlConstants";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Autocompletion, setAutocompletion] = useState([]);

  const SearchBarFunction = (values) => {
    const searchedData = { search: values };
    getSearchResult(searchedData)
      .then((res) => {
        dispatch(getValues(res.data.result, searchedData.search));
        history.push(URL_SEARCH_PAGE);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (values) => {
    if (values) {
      autoCompleteSearch(values)
        .then((res) => {
          setAutocompletion(res.data.suggestion);
        })
        .catch((error) => console.log(error));
    } else {
      setAutocompletion(null);
    }
  };
console.log(Autocompletion)
  return (
    <>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => SearchBarFunction(values.search)}
        validationSchema={schemaFormSearch}
      >
        <Form className="w-full px-4 flex mt-2 items-center md:pb-2 relative">
          <div className="bg-white p-2 rounded-l-full sm:p-1.65 border border-r-0 border-gray-300">
            <SearchIcon className="h-6 w-6 text-yellow-500" />
          </div>
          <input
            className="w-full border-gray-300 pl-5 rounded-r-full border-l-0 z-10"
            type="search"
            name="search"
            placeholder="Rechercher..."
            autoComplete="off"
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                SearchBarFunction(e.target.value);
              }
            }}
          />
            {Autocompletion ? (
        <ul className={`${Autocompletion.length > 0 ? 'bg-white rounded-lg top-11 z-20 absolute w-autocompletion border border-gray-300 shadow-xl' : 'hidden'}`}>
          {Autocompletion.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => SearchBarFunction(suggestion.product_name)}
              className="py-2 px-5 cursor-pointer font-semibold text-gray-400 hover:bg-nav-blueClar hover:text-white"
            >
              {suggestion.product_name}
            </li>
          ))}
        </ul>
      ) : null}
        </Form>
      
      </Formik>
      
    </>
  );
};

export default SearchBar;
