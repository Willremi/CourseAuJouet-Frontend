import React, {useState,useEffect} from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import { CustomInput } from "./../../../../shared/components/form-and-error-components/InputCustom";
import { useSelector } from 'react-redux';
import { selectComponent } from '../../../../shared/redux-store/updateProductSlice';
import { ModifyProductSchema } from '../../../../shared/constants/formik-yup/yup/yupProduct';
import { deleteOneStockedImage, PostModifyProduct } from "../../../../api/backend/product";
import { UploadIcon, XIcon } from "@heroicons/react/solid";
import { Icon } from "@iconify/react";

const ModifyProduct = () => {
    const product = useSelector(selectComponent)
    const [ImagesArray, setImagesArray] = useState(null);
    const [ImagesValues, setImagesValues] = useState(null);
    const [stockedImages, setStockedImages] = useState(null);
    const [reload, setReload] = useState(false)

    useEffect( () => {
      setStockedImages(product.images)
    },[])

  // TODO: toujours un probleme de supression d'un element du tableau
  //       qui décale les index et fait supprimer une image uniquement en dur et non en BDD
    const removeImages = (index) => {
      console.log(index)
      ImagesArray.splice(index, 1)
      setReload(!reload)
    };
  
    const removeStockedImages = (index) => {
      let imagesArray = []

      stockedImages.forEach(element =>{
        imagesArray.push(element)
      })
      delete imagesArray[index];
      deleteOneStockedImage({_id:product._id,stockedImage: stockedImages ,deletedImage:product.images[index]})
      .then((res) => console.log(res.data.message))
      .catch((error) => console.log(error));
      setStockedImages(imagesArray)
      setReload(!reload);
      console.log("ceci est imageArray: ",imagesArray);
    };
    
    function submitProduct(values, images) {
      var formData = new FormData();
  
      formData.append("_id", product._id)
      formData.append("product_name", values.product_name);
      formData.append("trademark", values.trademark);
      if(images){
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        } 
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
  

    return (
      <Formik
        // obligé de placer les values initiales au niveau du form pour faire appel au state redux
        initialValues={{
            product_name: product.product_name ,
            trademark: product.trademark,
            reference: product.reference,
            stock: product.stock,
            price: product.price,
            required_age: product.required_age,
            category: product.category,
            subcategory : product.subcategory,
            images: [],
            description: product.description,
            status : product.status
        }}
        validationSchema={ModifyProductSchema }
        onSubmit={(values) => submitProduct(values, ImagesValues)}
      >
        <Form className="flex-col flex space-y-4">
        <h2 className="text-center uppercase my-5 w-full font-semibold text-2xl text-darkblue-100
            sm:text-md">
            Modifier ce produit : {product.product_name}
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
              hidden
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
              <label htmlFor="stock" className="w-2/6 font-semibold 
              sm:w-full">
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
  
          <div className="flex flex-row w-59/100 mx-auto 
          sm:w-full sm:flex-col">
            <div className="flex flex-row w-full 
            sm:w-full sm:flex-col">
              <div className="flex flex-row items-center w-1/2 
              sm:w-full sm:flex-col">
                <label htmlFor="price" className="w-5/12 font-semibold
                sm:w-full">
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
                as="select"
                name="required_age"
                className="rounded-xl w-full"
                >
                    <option >Selection</option>
                    <option value="0 - 12 mois">0 - 12 mois</option>
                    <option value="12 - 36 mois">12 - 36 mois</option>
                    <option value="3 - 5 ans">3 - 5 ans</option>
                    <option value="6 - 8 ans">6 - 8 ans</option>
                    <option value="9 - 11 ans">9 - 11 ans</option>
                    <option value="12 ans et +">12 ans et +</option>
                </Field>
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
          <div className="flex flex-col w-full">
          <div
              className="font-semibold mx-auto flex flex-row"
            >
              Images déjà uploaded
            </div>
            {stockedImages ? (
              <div className="flex flex-wrap w-8/12 mx-auto">
                {stockedImages.map((stockedImage, index) => (
                  <div
                    key={index}
                    className="relative w-1/6 h-32 flex flex-row m-3 bg-white border border-gray-400 shadow-md rounded-lg"
                  >
                    <img
                      src={stockedImage}
                      alt="uploadimage"
                      className="w-full p-1 h-full rounded-lg m-auto object-cover"
                    />
                    <button type="button" onClick={() => removeStockedImages(index)}>
                      <XIcon className="h-6 w-4 absolute m-1 top-0 right-0 text-gray-500 duration-200 hover:text-gray-700" />
                    </button>
                  </div>
                ))}
              </div>
            ) : <span>Il n'y a plus d'images stockées veuillez en ajouter ci dessous</span>}

          </div>


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
