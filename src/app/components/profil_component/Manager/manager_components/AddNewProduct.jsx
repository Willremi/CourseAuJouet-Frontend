import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { defaulValuesAddProduct } from "../../../../shared/constants/formik-yup/default-values-form/defaultValuesProduit";
import { schemaFormAddProduct } from "../../../../shared/constants/formik-yup/yup/yupProduct";
import { CustomInput } from "./../../../../shared/components/form-and-error-components/InputCustom";
import { ArrowCircleLeftIcon, UploadIcon, XIcon } from "@heroicons/react/solid";
import { PostNewProduct } from "../../../../api/backend/product";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { URL_LIST_OF_PRODUCT } from "./../../../../shared/constants/urls/urlConstants";

const AddNewProduct = () => {
  const [ImagesArray, setImagesArray] = useState([]);
  const [ImagesValues, setImagesValues] = useState([]);
  const [errorImage, setErrorImage] = useState(false);
  const [reload, setReload] = useState(false);
  const [success, SetSuccess] = useState();

  function submitProduct(values, images, resetForm) {
    console.log("images values : ", images);
    if (images.length === 0) {
      setErrorImage(true);
    } else {
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

      for (var value of formData.values()) {
        console.log(value);
      }

      PostNewProduct(formData)
        .then((res) => {
          console.log(res.data.message);
          SetSuccess(<div className="sm:w-full md:w-full animate-FadeIn text-center  bg-green-700 text-white font-bold w-1/2 p-2 mx-auto rounded-lg"> {res.data.message} </div>)
          resetForm()
          setImagesArray([])
          setImagesValues([])
        })
        .catch((error) => {console.log(error)});
      setErrorImage(false);
    }
  }
  console.log(ImagesArray, ImagesValues)
  const removeImages = (index) => {
    ImagesArray.splice(index, 1);
    ImagesValues.splice(index, 1);
    setReload(!reload);
  };

  return (
    <>
      <Link
        to={URL_LIST_OF_PRODUCT}
        className="hover:underline flex font-semibold text-darkblue-100 text-lg
        lg:text-base
        xl:text-base
        2xl:text-base"
      >
        <ArrowCircleLeftIcon 
        className="mr-2 w-8 h-8
        lg:h-6 lg:w-6
        xl:h-6 xl:w-6
        2xl:h-6 2xl:w-6" />
       
       
        Retour à la liste des produits
      </Link>
      <Formik
        initialValues={defaulValuesAddProduct}
        validationSchema={schemaFormAddProduct}
        onSubmit={(values, {resetForm}) => {submitProduct(values, ImagesValues, resetForm)
          }}
      >
        {({resetForm}) => (
          <Form className="flex-col flex space-y-2
          lg:space-y-4
          xl:space-y-4
          2xl:space-y-4">
          <h2
            className="text-2xl text-center uppercase my-5 w-full font-semibold  text-darkblue-100
        sm:text-md"
       
          >
            Ajouter un nouveau produit
          </h2>

          <p
            className="w-full text-md text-red-700 mx-auto underline
            lg:w-59/100
            xl:w-59/100
           2xl:w-59/100"
          >
            * Champs obligatoire.
          </p>

          <div
            className="flex items-center mx-auto flex-col w-full
            lg:flex-row lg:w-59/100
            xl:flex-row xl:w-59/100
            2xl:flex-row 2xl:w-59/100"
          >
            <label
              htmlFor="product_name"
              className="font-semibold w-full mr-3
              lg:w-1/6
              xl:w-1/6
              2xl:w-1/6"
            >
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

          <div
            className="flex items-center  mx-auto  flex-col w-full
            lg:flex-row lg:w-59/100
            xl:flex-row xl:w-59/100
            2xl:flex-row 2xl:w-59/100"
          >
            <label
              htmlFor="trademark"
              className="font-semibold w-full mr-3
              lg:w-1/6
              xl:w-1/6
              2xl:w-1/6"
            >
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

          <div
            className="flex w-full flex-col mx-auto
            lg:flex-row lg:w-59/100
            xl:flex-row xl:w-59/100
            2xl:flex-row 2xl:w-59/100"
          >
            <div
              className="w-full flex-col flex items-center
              lg:w-1/2 lg:flex-row
              xl:w-1/2 xl:flex-row
              2xl:w-1/2 2xl:flex-row"
            >
              <label
                htmlFor="reference"
                className="w-full font-semibold mr-3
                lg:w-5/12
                xl:w-5/12
                2xl:w-5/12"
              >
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
            <div
              className="w-full flex-col flex items-center
              lg:w-1/2 lg:flex-row
              xl:w-1/2 xl:flex-row
              2xl:w-1/2 2xl:flex-row"
            >
              <label
                htmlFor="Stock*"
                className="w-full font-semibold mr-3
                lg:w-7/12
                xl:w-7/12
                2xl:w-5/12"
              >
                Stock*
              </label>
              <div className="flex flex-col w-full mr-3">
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

          <div
            className="flex w-full flex-col mx-auto" 
          
          >
            <div
            className="flex w-full flex-col mx-auto 
            lg:flex-row lg:w-59/100
            xl:flex-row xl:w-59/100
            2xl:flex-row 2xl:w-59/100"
          >
            <div
              className="w-full flex-col flex items-center
              lg:w-1/2 lg:flex-row
              xl:w-1/2 xl:flex-row
              2xl:w-1/2 2xl:flex-row"
            >
                <label
                  htmlFor="Price"
                  className="w-full font-semibold mr-3
                  lg:w-5/12
                  xl:w-5/12
                  2xl:w-5/12"
                >
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

              <div
                className="w-full flex-col flex items-center
                lg:w-1/2 lg:flex-row
                xl:w-1/2 xl:flex-row
                2xl:w-1/2 2xl:flex-row"
              >
                <label
                  htmlFor="required_age"
                  className="w-full font-semibold mr-3
                  lg:w-7/12
                  xl:w-7/12
                  2xl:w-5/12"
                >
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

          <div
            className="flex w-full flex-col mx-auto"
            
          >
           <div
            className="flex w-full flex-col mx-auto
            lg:flex-row lg:w-59/100
            xl:flex-row xl:w-59/100
            2xl:flex-row 2xl:w-59/100"
          >
            <div
              className="w-full flex-col flex items-center
              lg:w-1/2 lg:flex-row
              xl:w-1/2 xl:flex-row
              2xl:w-1/2 2xl:flex-row"
            >
                <label
                  htmlFor="category"
                  className="w-full font-semibold mr-3
                  lg:w-5/12
                  xl:w-5/12
                  2xl:w-5/12"
                >
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

              <div
                className="w-full flex-col flex items-center
                lg:w-1/2 lg:flex-row
                xl:w-1/2 xl:flex-row
                2xl:w-1/2 2xl:flex-row"
              >
                <label
                  htmlFor="SubCategory"
                  className="w-full font-semibold mr-3
                  lg:w-7/12
                  xl:w-7/12
                  2xl:w-5/12"
                >
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
              <span className="btn btn-yellow font-bold mx-auto">
                <UploadIcon className="w-10 h-10 mr-3" /> Ajouter une image
              </span>
            </label>
            <input
              type="file"
              name="images"
              className="hidden"
              id="images"
              multiple
              onChange={(e) => {
                if (ImagesValues.length !== 0) {
                  setErrorImage(false);
                  setImagesValues([...ImagesValues, e.currentTarget.files[0]]);
                } else {
                  setErrorImage(false);
                  setImagesValues([e.currentTarget.files[0]]);
                }
                const fileReader = new FileReader();
                fileReader.onload = () => {
                  if (fileReader.readyState === 2) {
                    if (ImagesArray.length !== 0) {
                      setImagesArray([...ImagesArray, fileReader.result]);
                    } else {
                      setImagesArray([fileReader.result]);
                    }
                  }
                };
                fileReader.readAsDataURL(e.target.files[0]);
              }}
            />

            {errorImage ? (
              <span className="text-center mt-3 text-red-500">
                *Veuillez ajouter au moins une image
              </span>
            ) : null}

            {ImagesArray ? (
              <div className="flex flex-wrap mx-auto w-full  
              sm:justify-around
              md:justify-around
              xl:w-8/12
              2xl:w-8/12">
                {ImagesArray.map((viewImage, index) => (
                  <div
                    key={index}
                    className="relative w-1/6 h-32 flex flex-row m-3 bg-white border border-gray-400 shadow-md rounded-lg
                    sm:w-1/3 
                    md:w-1/5"
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

          <div
            className="flex w-full flex-col justify-center
            lg:flex-row
            xl:flex-row
        2xl:flex-row"
          >
            <label
              htmlFor="description"
              className="font-semibold w-1/12 mr-3
          sm:w-full"
            >
              Description*
            </label>
            <div className="flex flex-col w-full font-semibold
                  lg:w-51/100
                  xl:w-51/100
                  2xl:w-51/100">
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
          <div
            className="flex items-center mx-auto flex-col w-full
            lg:flex-row lg:w-59/100
            xl:flex-row xl:w-59/100
            2xl:flex-row 2xl:w-59/100"
          >
            <label
              htmlFor="status"
              className="font-semibold w-full mr-3
              lg:w-1/6
              xl:w-1/6
              2xl:w-1/6"
            >
              Status*
            </label>
            <Field as="select" name="status" className="rounded-xl w-full
            ">
              <option value="Online">En ligne</option>
              <option value="Offline">Hors ligne</option>
            </Field>
          </div>

          <div className="font-semibold flex flex-row ">
            <button type="submit" className="btn btn-yellow font-bold mx-auto my-5">
              <Icon icon="fa-solid:upload" className="mr-3 w-10 h-10" /> Ajouter
              le produit
            </button>
          </div>
          <div>{success}</div>
        </Form>
        )}
        
      </Formik>
    </>
  );
};

export default AddNewProduct;
