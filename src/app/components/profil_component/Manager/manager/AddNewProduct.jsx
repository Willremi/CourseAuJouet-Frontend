import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { defaulValuesAddProduct } from "../../../../shared/constants/formik-yup/default-values-form/defaultValuesProduit";
import { schemaFormAddProduct } from "../../../../shared/constants/formik-yup/yup/yupProduct";
import { CustomInput } from "./../../../../shared/components/form-and-error-components/InputCustom";
import { XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { PostNewProduct } from "../../../../api/backend/product";


const AddNewProduct = () => {
  const [ImagesArray, setImagesArray] = useState(null);
  const [ImagesValues, setImagesValues] = useState(null);

  function submitProduct(values, images) {

    const formData = new FormData();

    formData.append("product_name", values.product_name);
    formData.append("trademark", values.trademark);
    for(let i = 0 ; i < images.length ; i++){
      formData.append("images", images[i]);
    }
    
    formData.append("reference", values.reference);
    formData.append("stock", values.Stock);
    formData.append("price", values.Price);
    formData.append("category", values.category);
    formData.append("subcategory", values.SubCategory);
    formData.append("required_age", values.required_age);
    formData.append("description", values.description);
    formData.append("status", values.status);

    for (var value of formData.values()) {
        console.log(value);
     }

     PostNewProduct(formData)
      .then((res) => console.log(res.data.message))
      .catch((error) => console.log(error));
  }

  return (
    <Formik
      initialValues={defaulValuesAddProduct}
      validationSchema={schemaFormAddProduct}
      onSubmit={(values) => submitProduct(values, ImagesValues)}
    >
      <Form className="flex-col flex space-y-4 ">
        <h2 className="text-center uppercase">Ajouter un nouveau produit</h2>
        <p className="text-xs">* Champ obligatoire.</p>
        <div className="flex flex-row items-center">
          <Field
            label="Nomination"
            type="text"
            name="product_name"
            className="w-1/2 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />
        </div>

        <div className="flex flex-row items-center">
          <Field
            label="Marque"
            type="text"
            name="trademark"
            className="w-1/2 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />
        </div>

        <div className="flex flex-row items-center w-9/12">
          <Field
            label="Référence"
            type="text"
            name="reference"
            className="w-2/5 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />

          <Field
            label="Stock"
            type="number"
            name="Stock"
            className="w-2/5 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />
        </div>

        <div className="flex flex-row items-center w-9/12">
          <Field
            label="Prix"
            type="number"
            name="Price"
            className="w-2/5 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />

          <Field
            label="Âge Requis"
            type="number"
            name="required_age"
            className="w-2/5 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />
        </div>

        <div className="flex flex-row items-center w-9/12">
          <Field
            label="Catégorie"
            type="text"
            name="category"
            className="w-2/5 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />

          <Field
            label="Sous-catégorie"
            type="text"
            name="SubCategory"
            className="w-2/5 rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />
        </div>

        <div>
          <input
            type="file"
            name="images"
            className="w-3/12 rounded-xl mr-3 border-0"
            id="image"
            multiple
            onChange={(e) => {
              if (ImagesValues) {
                setImagesValues(
                [ ...ImagesValues,
                  e.currentTarget.files[0]],
                );
              } else {
                setImagesValues([e.currentTarget.files[0]]);
              }
              const fileReader = new FileReader();
              fileReader.onload = () => {
                if (fileReader.readyState === 2) {
                  if (ImagesArray) {
                    setImagesArray([...ImagesArray, fileReader.result]);
                  } else {
                    setImagesArray([fileReader.result]);
                  }
                }
              };
              fileReader.readAsDataURL(e.target.files[0]);
            }}
          />
          {ImagesArray ? (
            <div className="flex flex-row">
              {ImagesArray.map((viewImage, index) => (
                <div
                  key={index}
                  className="relative w-1/10 h-32 flex flex-row m-3 bg-white border p-2 border-gray-400 shadow-md rounded-lg"
                >
                  <img
                    src={viewImage}
                    alt="uploadimage"
                    className="w-24 max-h-24 rounded-full m-auto object-cover"
                  />
                  <button>
                    <XIcon className="h-6 w-4 absolute m-1 top-0 right-0 text-gray-500 duration-200 hover:text-gray-700" />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-row items-center">
          <label htmlFor="description" className="font-semibold px-3">
            Description
          </label>
          <Field
            label="Description"
            name="description"
            className="w-1/2 rounded-xl mr-3 resize-y"
            component="textarea"
          />
          <ErrorMessage
            name="description"
            className={`text-xs text-red-500 absolute bottom-0 right-0`}
          />
        </div>
        <div className="flex flex-row items-center">
          <label htmlFor="status" className="font-semibold px-3">
            Status{" "}
          </label>
          <Field as="select" name="status" className="w-1/10 rounded-xl mr-3">
            <option value="Online">En ligne</option>
            <option value="Offline">Hors ligne</option>
          </Field>
        </div>

        <button type="submit" className="btn btn-yellow self-center">
          Ajouter le produit
        </button>
      </Form>
    </Formik>
  );
};

export default AddNewProduct;
