import React from "react";
import { Field, Formik, Form } from "formik";
import { noDoubleDataFilter } from "../../shared/services/searchServices";

const SearchFilter = ({ filterValue, handleChange, searchResult }) => {
  

  const Filter = noDoubleDataFilter(searchResult);// cette fonction evite les données qui pourrait etre des doublons (ca evite d'avoir jeux vidéo 3 fois dans le select des filtres) 

  return (
    <Formik>
      <Form className="w-11/12 mx-auto flex flex-wrap ">
        <Field
          as="select"
          name="trademarkFilter"
          className="border-0 rounded-lg shadow-md m-1 text-nav-blue font-semibold"
          onChange={(e) =>
            handleChange(
              e.target.value,
              filterValue.requiredAge,
              filterValue.category
            )
          }
        >
          <option value="undefined">
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
          className="border-0 rounded-lg shadow-md m-1 text-nav-blue font-semibold"
          onChange={(e) =>
            handleChange(
              filterValue.trademark,
              e.target.value,
              filterValue.category
            )
          }
        >
          <option value="undefined">
            AGE
          </option>
          {Filter.AgeFilter.map((ageFilter, index) => (
            <option key={index} value={`${ageFilter}`}>
              {ageFilter}
            </option>
          ))}
        </Field>

        <Field
          as="select"
          name="categoryFilter"
          className="border-0 rounded-lg shadow-md m-1 text-nav-blue font-semibold"
          onChange={(e) =>
            handleChange(
              filterValue.trademark,
              filterValue.requiredAge,
              e.target.value
            )
          }
        >
          <option value="undefined">
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
