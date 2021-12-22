import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { defaulValuesAddProduct } from "../../../../shared/constants/formik-yup/default-values-form/defaultValuesProduit";
import { schemaFormAddProduct } from "../../../../shared/constants/formik-yup/yup/yupProduct";
import { CustomInput } from "./../../../../shared/components/form-and-error-components/InputCustom";
import { UploadIcon, XIcon } from "@heroicons/react/solid";
import { PostNewProduct } from "../../../../api/backend/product";
import { Icon } from "@iconify/react";

const AddNewProduct = () => {
  const [ImagesArray, setImagesArray] = useState(null);
  const [ImagesValues, setImagesValues] = useState(null);
  const [reload, setReload] = useState(false)

  function submitProduct(values, images) {
    const formData = new FormData();

    formData.append("product_name", values.product_name);
    formData.append("trademark", values.trademark);
    for (let i = 0; i < images.length; i++) {
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

    // for (var value of formData.values()) {
    //   console.log(value);
    // }

    PostNewProduct(formData)
      .then((res) => console.log(res.data.message))
      .catch((error) => console.log(error));
  }

const removeImages = (index) => {
  console.log(index)
  ImagesArray.splice(index, 1)
  setReload(!reload)
};

  console.log("ImagesArray : ",ImagesArray)


  return (
    <Formik
      initialValues={defaulValuesAddProduct}
      validationSchema={schemaFormAddProduct}
      onSubmit={(values) => submitProduct(values, ImagesValues)}
    >
      <Form className="flex-col flex space-y-4">
        <h2 className="text-center uppercase my-5 w-full font-semibold text-2xl text-darkblue-100
        sm:text-md">
          Ajouter un nouveau produit
        </h2>

        <p className="text-md text-red-700 w-59/100 mx-auto underline
        sm:w-full
        ">* Champs obligatoire.</p>

        <div className="flex flex-row items-center w-59/100 mx-auto 
        sm:flex-col sm:w-full">
          <label htmlFor="product_name" className="w-1/6 font-semibold
          sm:w-full">
            Nomination*
          </label>
          <div className="flex flex-col w-full mr-3">
          <Field
            type="text"
            name="product_name"
            className="w-full rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />
          </div>
        </div>

        <div className="flex flex-row items-center w-59/100 mx-auto 
        sm:w-full sm:flex-col">
          <label htmlFor="trademark" className="w-1/6 font-semibold
          sm:w-full">
            Marque*
          </label>
          <div className="flex flex-col w-full mr-3">
            <Field
            type="text"
            name="trademark"
            className="w-full rounded-xl mr-3"
            component={CustomInput}
            errorRight
          />
          </div>
          
        </div>

        <div className="flex flex-row w-59/100 mx-auto 
        sm:w-full sm:flex-col">
          <div className="flex flex-row items-center w-1/2 
          sm:w-full sm:flex-col">
            <label htmlFor="reference" className="w-5/12 font-semibold
            sm:w-full">
              Référence*
            </label>
            <div className="flex flex-col w-full mr-3">
              <Field
                type="text"
                name="reference"
                className="rounded-xl w-full"
                component={CustomInput}
                errorRight
              />
            </div>
          </div>
          <div className="flex flex-row items-center w-1/2 
          sm:w-full sm:flex-col">
            <label htmlFor="Stock*" className="w-2/6 font-semibold 
            sm:w-full">
              Stock*
            </label>
            <div className="flex flex-col w-full mr-3 sm:flex-col">
              <Field
                type="number"
                name="Stock"
                className="rounded-xl w-full"
                component={CustomInput}
                errorRight
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row w-59/100 mx-auto 
        sm:w-full sm:flex-col">
          <div className="flex flex-row w-full 
          sm:w-full sm:flex-col">
            <div className="flex flex-row items-center w-1/2 
            sm:w-full sm:flex-col">
              <label htmlFor="Price" className="w-5/12 font-semibold
              sm:w-full">
                Prix*
              </label>
              <div className="flex flex-col w-full mr-3 ">
                <Field
                  type="number"
                  name="Price"
                  className="rounded-xl w-full"
                  component={CustomInput}
                  errorRight
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-1/2 
            sm:w-full sm:flex-col">
              <label htmlFor="required_age" className="w-2/6 font-semibold
              sm:w-full">
                Âge Requis*
              </label>
              <div className="flex flex-col w-full mr-3 ">
                <Field
                  type="number"
                  name="required_age"
                  className="rounded-xl w-full"
                  component={CustomInput}
                  errorRight
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-59/100 mx-auto 
        sm:w-full">
          <div className="flex flex-row w-full 
          sm:w-full sm:flex-col">
            <div className="flex flex-row items-center w-1/2 
            sm:w-full sm:flex-col">
              <label htmlFor="category" className="w-5/12 font-semibold
              sm:w-full">
                Catégorie*
              </label>
              <div className="flex flex-col w-full mr-3 ">
                <Field
                  type="text"
                  name="category"
                  className="rounded-xl w-full"
                  component={CustomInput}
                  errorRight
                />
              </div>
            </div>

            <div className="flex flex-row items-center w-1/2 
            sm:w-full sm:flex-col">
              <label htmlFor="SubCategory" className="font-semibold w-2/6
              sm:w-full">
                Sous-catégorie
              </label>
              <div className="flex flex-col w-full mr-3">
                <Field
                  type="text"
                  name="SubCategory"
                  className="rounded-xl w-full"
                  component={CustomInput}
                  errorRight
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="images"
            className="font-semibold mx-auto flex flex-row"
          >
            <span className="flex flex-row items-center btn-yellow btn font-bold">
              <UploadIcon className="w-10 h-10 mr-2" /> Ajouter une image
            </span>
          </label>
          <input
            type="file"
            name="images"
            className="hidden"
            id="images"
            multiple
            onChange={(e) => {
              if (ImagesValues) {
                setImagesValues([...ImagesValues, e.currentTarget.files[0]]);
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
            <div className="flex flex-wrap w-8/12 mx-auto">
              {ImagesArray.map((viewImage, index) => (
                <div
                  key={index}
                  className="relative w-1/6 h-32 flex flex-row m-3 bg-white border border-gray-400 shadow-md rounded-lg"
                >
                  <img
                    src={viewImage}
                    alt="uploadimage"
                    className="w-full p-1 h-full rounded-lg m-auto object-cover"
                  />
                  <button type="button" onClick={() => removeImages(index)}>
                    <XIcon className="h-6 w-4 absolute m-1 top-0 right-0 text-gray-500 duration-200 hover:text-gray-700" />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-row justify-center 
        sm:w-full sm:flex-col">
          <label htmlFor="description" className="font-semibold w-1/12
          sm:w-full">
            Description*
          </label>
          <div className="flex flex-col w-51/100 sm:w-full">
            <Field
            name="description"
            className="rounded-xl resize-y h-40 "
            component="textarea"
          />
          <ErrorMessage
            name="description"
            className={`text-xs text-red-500 absolute bottom-0 right-0`}
          />
          </div>
          
        </div>
        <div className="flex flex-row items-center w-59/100 mx-auto 
        sm:w-full sm:flex-col">
          <label htmlFor="status" className="font-semibold w-14/100 
          sm:w-full">
            Status*
          </label>
          <Field as="select" name="status" className="rounded-xl sm:w-full">
            <option value="Online">En ligne</option>
            <option value="Offline">Hors ligne</option>
          </Field>
        </div>

        <div className="font-semibold mx-auto flex flex-row">
          <button type="submit" className="btn btn-yellow font-bold">
            <Icon icon="fa-solid:upload" className="mr-3 w-10 h-10" /> Ajouter
            le produit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddNewProduct;
