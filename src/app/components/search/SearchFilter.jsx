import React from "react";
import { Field, Formik, Form } from "formik";
import { noDoubleDataFilter } from "../../shared/services/searchServices";

const SearchFilter = ({ filterValue, handleChange, searchResult }) => {
  

  const Filter = noDoubleDataFilter(searchResult);// cette fonction evite les données qui pourrait etre des doublons (ca evite d'avoir jeux vidéo 3 fois dans le select des filtres) 

  return (
    <Formik>
      <Form className="w-11/12 mx-auto flex flex-row sm:flex-col items-center sm:justify-between sm:w-full">
        <Field
          as="select"
          name="trademarkFilter"
          className="border-gray-300 border ml-3 rounded-md outline-none sm:mt-2"
          onChange={(e) =>
            handleChange(
              e.target.value,
              filterValue.requiredAge,
              filterValue.category
            )
          }
        >
          <option value="undefined" className="">
            MARQUE
          </option>
          {Filter.TrademarkFilter.map((trademarkFilter, index) => (
            <option key={index} value={`${trademarkFilter}`}>
              {trademarkFilter.toUpperCase()}
            </option>
          ))}
        </Field>

        <Field
          as="select"
          name="sortbyage"
          className="border-gray-300 border ml-3 rounded-md outline-none sm:mt-2"
          onChange={(e) =>
            handleChange(
              filterValue.trademark,
              e.target.value,
              filterValue.category
            )
          }
        >
          <option value="undefined" className="">
            AGE
          </option>
          {Filter.AgeFilter.map((ageFilter, index) => (
            <option key={index} value={`${ageFilter}`}>
              +{ageFilter} ans
            </option>
          ))}
        </Field>

        <Field
          as="select"
          name="categoryFilter"
          className="border-gray-300 border ml-3 rounded-md outline-none sm:mt-2"
          onChange={(e) =>
            handleChange(
              filterValue.trademark,
              filterValue.requiredAge,
              e.target.value
            )
          }
        >
          <option value="undefined" className="">
            CATEGORIE
          </option>
          {Filter.CategoryFilter.map((categoryFilter, index) => (
            <option key={index} value={`${categoryFilter}`}>
              {categoryFilter}
            </option>
          ))}
        </Field>
      </Form>
    </Formik>
  );
};

export default SearchFilter;
