import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { CustomInput } from "./../../../../shared/components/form-and-error-components/InputCustom";
import { useSelector } from "react-redux";
import { selectComponent } from "../../../../shared/redux-store/updateProductSlice";
import { ModifyProductSchema } from "../../../../shared/constants/formik-yup/yup/yupProduct";
import { PostModifyProduct } from "../../../../api/backend/product";
import { UploadIcon, XIcon } from "@heroicons/react/solid";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

const ModifyProduct = () => {
  const product = useSelector(selectComponent);
  const [ImagesArray, setImagesArray] = useState([]);
  const [ImagesValues, setImagesValues] = useState([]);
  const [errorImage, setErrorImage] = useState(false);
  const [reload, setReload] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [stockedImagesArray, setStockedImagesArray] = useState([]);

  console.log("Selected Images : ", selectedImages);
  console.log("Images Values : ", ImagesValues);
  console.log("stocked images : ",stockedImagesArray);

  useEffect(() => {
   setStockedImagesArray([...stockedImagesArray, ...product.images])
  }, [product.images])

  function submitProduct(values, images) {
    var formData = new FormData();

    formData.append("_id", product._id);
    formData.append("product_name", values.product_name);
    formData.append("trademark", values.trademark);
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    for (let i = 0; i < values.stockedImages.length; i++) {
      formData.append("stockedImages", values.stockedImages[i]);
    }
    formData.append("reference", values.reference);
    formData.append("stock", values.stock);
    formData.append("price", values.price);
    formData.append("category", values.category);
    formData.append("subcategory", values.subcategory);
    formData.append("required_age", values.required_age);
    formData.append("description", values.description);
    formData.append("status", values.status);

    PostModifyProduct(formData)
      .then((res) => console.log(res.data.message))
      .catch((error) => console.log(error));
  }

  const imagesHandleChange = (e) => {
    
    if(e.target.files){
      setImagesValues([...ImagesValues, ...e.target.files])
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setSelectedImages((prevImages) => prevImages.concat(fileArray))
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
      setErrorImage(false);
    }
  }

  const PreviewImages = (source) => {
    return source.map((photo, index) => {
      return <div
      key={index}
      className="relative w-1/6 h-32 flex flex-row m-3 bg-white border border-gray-400 shadow-md rounded-lg
      sm:w-1/3 
      md:w-1/5"
    >
      <img
        src={photo}
        alt="uploadimage"
        className="w-full p-1 h-full rounded-lg m-auto object-cover"
      />
      <button type="button" onClick={() => removeImages(index)}>
        <XIcon className="h-6 w-4 absolute m-1 top-0 right-0 text-gray-500 duration-200 hover:text-gray-700" />
      </button>
    </div>
    })
  }

  const removeImages = (index) => {
    selectedImages.splice(index, 1);
    ImagesValues.splice(index, 1);
    stockedImagesArray.splice(index, 1);
    setReload(!reload);
  };

  return (
    <Formik
      // obligé de placer les values initiales au niveau du form pour faire appel au state redux
      initialValues={{
        product_name: product.product_name,
        trademark: product.trademark,
        reference: product.reference,
        stock: product.stock,
        price: product.price,
        required_age: product.required_age,
        category: product.category,
        subcategory: product.subcategory,
        stockedImages: product.images,
        images: [],
        description: product.description,
        status: product.status,
      }}
      validationSchema={ModifyProductSchema}
      onSubmit={(values) => submitProduct(values, ImagesValues)}
    >
      <Form className="flex-col flex space-y-4">
        <h2
          className="text-center uppercase my-5 w-full font-semibold text-2xl text-darkblue-100
            sm:text-md"
        >
          Modifier ce produit : {product.product_name}
        </h2>

        <p
          className="text-md text-red-700 w-59/100 mx-auto underline
          sm:w-full
          "
        >
          * Champs obligatoire.
        </p>

        <div
          className="flex flex-row items-center w-59/100 mx-auto 
          sm:flex-col sm:w-full"
        >
          <label
            htmlFor="product_name"
            className="w-1/6 font-semibold
            sm:w-full"
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
          className="flex flex-row items-center w-59/100 mx-auto 
          sm:w-full sm:flex-col"
        >
          <label
            htmlFor="trademark"
            className="w-1/6 font-semibold
            sm:w-full"
          >
            Marque*
          </label>
          <div className="flex flex-col w-full mr-3">
            <Field
              type="text"
              name="trademark"
              className="w-full rounded-xl mr-3"
              component={CustomInput}
              hidden
            />
          </div>
        </div>

        <div
          className="flex flex-row w-59/100 mx-auto 
          sm:w-full sm:flex-col"
        >
          <div
            className="flex flex-row items-center w-1/2 
            sm:w-full sm:flex-col"
          >
            <label
              htmlFor="reference"
              className="w-5/12 font-semibold
              sm:w-full"
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
            className="flex flex-row items-center w-1/2 
            sm:w-full sm:flex-col"
          >
            <label
              htmlFor="stock"
              className="w-2/6 font-semibold 
              sm:w-full"
            >
              Stock*
            </label>
            <div className="flex flex-col w-full mr-3 sm:flex-col">
              <Field
                type="number"
                name="stock"
                className="rounded-xl w-full"
                component={CustomInput}
                errorRight
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-row w-59/100 mx-auto 
          sm:w-full sm:flex-col"
        >
          <div
            className="flex flex-row w-full 
            sm:w-full sm:flex-col"
          >
            <div
              className="flex flex-row items-center w-1/2 
              sm:w-full sm:flex-col"
            >
              <label
                htmlFor="price"
                className="w-5/12 font-semibold
                sm:w-full"
              >
                Prix*
              </label>
              <div className="flex flex-col w-full mr-3 ">
                <Field
                  type="number"
                  name="price"
                  className="rounded-xl w-full"
                  component={CustomInput}
                  errorRight
                />
              </div>
            </div>

            <div
              className="flex flex-row items-center w-1/2 
              sm:w-full sm:flex-col"
            >
              <label
                htmlFor="required_age"
                className="w-2/6 font-semibold
                sm:w-full"
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
          className="flex flex-row w-59/100 mx-auto 
          sm:w-full"
        >
          <div
            className="flex flex-row w-full 
            sm:w-full sm:flex-col"
          >
            <div
              className="flex flex-row items-center w-1/2 
              sm:w-full sm:flex-col"
            >
              <label
                htmlFor="category"
                className="w-5/12 font-semibold
                sm:w-full"
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
              className="flex flex-row items-center w-1/2 
              sm:w-full sm:flex-col"
            >
              <label
                htmlFor="SubCategory"
                className="font-semibold w-2/6
                sm:w-full"
              >
                Sous-catégorie
              </label>
              <div className="flex flex-col w-full mr-3">
                <Field
                  type="text"
                  name="subcategory"
                  className="rounded-xl w-full"
                  component={CustomInput}
                  errorRight
                />
              </div>
            </div>
          </div>
        </div>
        {/** div pour manipuler les fichiers déjà en BDD */}
       
        {stockedImagesArray && PreviewImages(stockedImagesArray)}
       

        {/* div pour ajouter des fichiers  */}
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
            onClick={(e) => {e.target.value = null}}
            onChange={(e) => {imagesHandleChange(e)}}

          />

        </div>
        {selectedImages && PreviewImages(selectedImages)}
        <div
          className="flex flex-row justify-center 
          sm:w-full sm:flex-col"
        >
          <label
            htmlFor="description"
            className="font-semibold w-1/12
            sm:w-full"
          >
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
        <div
          className="flex flex-row items-center w-59/100 mx-auto 
          sm:w-full sm:flex-col"
        >
          <label
            htmlFor="status"
            className="font-semibold w-14/100 
            sm:w-full"
          >
            Statut*
          </label>
          <Field as="select" name="status" className="rounded-xl sm:w-full">
            <option value="Online">En ligne</option>
            <option value="Offline">Hors ligne</option>
          </Field>
        </div>

        <div className="font-semibold mx-auto flex flex-row">
          <button type="submit" className="btn btn-yellow font-bold">
            <Icon icon="fa-solid:upload" className="mr-3 w-10 h-10" /> Modifier
            le produit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ModifyProduct;
