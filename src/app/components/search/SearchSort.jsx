import { Formik } from 'formik';
import React from 'react';
import { noDoubleDataFilter } from '../../shared/services/searchServices';

const SearchSort = ({sortValue, handleChange, searchResult}) => {

    const Sort = noDoubleDataFilter(searchResult)

    return (
        <Formik>
            <Form className="w-11/12 mx-auto flex flex-wrap">
                <Field 
                as="select"
                name="sortFilter" 
                className="border-0 rounded-lg shadow-md m-1 to-nav-blue font-semibold"
                onChange={(e) => handleChange(
                    e.target.value
                )}
                >
                    <option value="undefined">Trier par</option>
                </Field>
            </Form>
        </Formik>
    );
};

export default SearchSort;