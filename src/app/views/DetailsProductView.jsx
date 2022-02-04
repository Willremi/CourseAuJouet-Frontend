import React, { useEffect, useState } from "react";
import { getOneProduct } from "../api/backend/product";
import { useParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  increment,
  selectInCart,
} from "../shared/redux-store/cartSlice";
import HandleQuantityProductInCart from "../shared/components/form-and-success-components/HandleQuantityProductInCart";
import { Icon } from "@iconify/react";

const DetailsProductView = () => {
  const id = useParams();
  const [data, setData] = useState();
  const productInCart = useSelector(selectInCart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(0)

  useEffect(() => {
    getOneProduct(id.id)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [id.id]);

  console.log(quantity);

  const nextImage = () => {
    // setImage(image === data.product.images.length -1 ? 0 : image + 1)
    setImage(image === data.product.driveFilesId ? data.product.driveFilesId.length -1 : data.product.images.length -1 ? 0 : image + 1)
  }
  
  const prevImage = () => {
    // setImage(image === 0 ? data.product.images.length -1 : image - 1)
    setImage(image === 0 ? data.product.driveFilesId ? data.product.driveFilesId.length -1 : data.product.images.length -1 : image - 1)
  }

  return (
    <>
      {data && (
        <div className="flex flex-col w-11/12 mx-auto">
          <div className="flex-col flex my-5 lg:flex-row xl:flex-row 2xl:flex-row">
            <div className="w-full flex lg:w-1/2 xl:w-1/2 2xl:w-1/2">
              {/* caroussel d'images */}
              <div className="w-full flex mx-auto object-center overflow-hidden relative">
                 <div className="w-3/12 overflow-hidden overflow-y-scroll overscroll-contain no-scrollbar absolute h-full ml-0 p-3 rounded-md
                    sm:hidden">
                    {/* {data.product.images && data.product.images.map((image, i) => (                    
                        <img
                        key={i}
                        src={image}
                        alt={data.product.product_name}
                        onClick={() => setImage(i)}
                        />
                    
                      ))} */
                    }
                    {
                    data.product.driveFilesId ? data.product.driveFilesId.map((image, i) => (
                        <img
                        key={i}
                        src={"https://drive.google.com/uc?export=view&id="+image}
                        alt={data.product.product_name}
                        onClick={() => setImage(i)}
                      />
                    ))
                    :
                    data.product.images.map((image, i) => (                    
                        <img
                        key={i}
                        src={image}
                        alt={data.product.product_name}
                        onClick={() => setImage(i)}
                        />
                    
                      ))
                    }
                  </div>
              <div className="border-4 border-yellow-500 bg-white rounded-xl p-1 mx-auto w-9/12 mr-3
                  sm:overflow-y-hidden sm:w-full sm:relative sm:mr-0
                  md:overflow-y-hidden md:object-center md:mr-0
                  lg:overflow-y-hidden lg:object-center lg:inline
                  xl:overflow-y-hidden xl:object-center
                  2xl:overflow-y-hidden 2xl:object-center">
                <FaChevronLeft className="hidden text-4xl text-black z-10 cursor-pointer select-none opacity-70  left-1
                  sm:absolute sm:block inset-y-1/2 "
                  onClick={prevImage}
                />
                <FaChevronRight className="hidden text-4xl text-black z-10 cursor-pointer select-none opacity-70 right-1
                  sm:absolute sm:block inset-y-1/2"
                  onClick={nextImage}
                />
                
                <img className="w-full h-auto"
                  src={data.product.driveFilesId ? "https://drive.google.com/uc?export=view&id="+data.product.driveFilesId[image] : data.product.images[image]}
                  alt={data.product.product_name}
                />
              </div>

            </div>

            </div>
            <div className="w-full flex flex-col justify-between font-semibold bg-white rounded-xl shadow-lg p-5 lg:w-1/2 
            xl:w-1/2 
            2xl:w-1/2">
              <div>
                <h3 className="uppercase text-2xl text-nav-blue font-annie md:text-3xl lg:text-3xl xl:text-3xl">
                  {data.product.product_name}
                </h3>
                <p className="font-light uppercase text-gray-400 text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  {data.product.trademark}
                </p>
                <div className="flex-col items-start flex justify-between text-gray-400 
                lg:items-center lg:flex-row
                xl:items-center xl:flex-row
                2xl:items-center 2xl:flex-row">
                  <p className="font-light text-lg">De {data.product.required_age}</p>
                  {/* Commentaires en brut pour le moment*/}
                  <div className="flex items-center">
                    <StarIcon className="w-10 h-10 text-yellow-400" />
                    <StarIcon className="w-10 h-10 text-yellow-400" />
                    <StarIcon className="w-10 h-10 text-yellow-400" />
                    <StarIcon className="w-10 h-10 text-yellow-400" />
                    <StarIcon className="w-10 h-10 text-yellow-400" />

                    <button>(nb_com)<span className="text-lg"> commentaires</span></button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center flex-col border-0
                lg:flex-row
                xl:flex-row
                2xl:flex-row">
                  {/* Quantité */}
                  <div className="w-full justify-center flex flex-row my-3
                  lg:w-2/3 lg:justify-end
                  xl:w-2/3 
                  2xl:w-2/3 2xl:justify-end">
                    <p className="py-2 text-2xl mr-3 text-nav-blue">Quantité :</p>
                    <button
                      className="border-2 border-nav-blueClar p-2 shadow-xl rounded-l-xl"
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        } else {
                          const message =
                            "la quantité de l'article ne peut pas être inférieur à 1";
                          HandleQuantityProductInCart(message);
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>

                    <span className="w-1/6 border-t-2 border-b-2 border-nav-blueClar shadow-xl text-center py-2 text-lg md:text-lg xl:text-xl
                    md:w-1/12
                    lg:w-1/12
                    xl:w-1/12                    
                    2xl:w-1/12">
                      {quantity}
                    </span>

                    <button
                      className="border-2 border-nav-blueClar p-2 shadow-xl rounded-r-xl"
                      onClick={() => {
                        if (quantity < 5) {
                          setQuantity(quantity + 1);
                        } else {
                          const message =
                            "la quantité de l'article ne peut pas être supérieur à 5";
                          HandleQuantityProductInCart(message);
                        }
                      }}
                    >
                      <Icon icon="carbon:add-filled" className="w-6 h-6 text-yellow-500" />
                    </button>
                  </div>
                  <div className="w-full justify-center my-3 flex flex-row
                  lg:w-1/3 lg:justify-end
                  xl:w-1/3 xl:justify-start
                  2xl:w-1/3 2xl:justify-end">
                    <p className="text-2xl">
                      <span className="text-nav-blue">Prix : </span>{data.product.price / 100}€
                    </p>
                  </div>
                  
                </div>

                {/* Bouton Ajout Panier*/}
                <div className="flex justify-center">
                  <button
                    className="py-2 px-6 rounded-full bg-yellow-500 font-semibold text-white cursor-pointer"
                    onClick={() => {
                      if (productInCart === undefined) {
                        dispatch(AddToCart(data.product));
                      } else {
                        let inCart = productInCart.findIndex(
                          (element) =>
                            element.product_name === data.product.product_name
                        );
                        if (inCart === -1) {
                          dispatch(AddToCart(data.product));
                        } else {
                          dispatch(increment(inCart));
                        }
                      }
                    }}
                  >
                    <span className="text-lg">Ajouter au panier</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="flex-col flex bg-white text-nav-blue 
          lg:flex-row
          xl:flex-row
          2xl:flex-row">
            <div className="border-0 flex flex-col border-yellow-500 
            lg:w-1/2 lg:border-r-4 
            xl:w-1/2 xl:border-r-4 
            2xl:w-1/2 2xl:border-r-4">
              <p className="bg-yellow-500 font-semibold text-center rounded-l-lg rounded-r-lg lg:rounded-r-none xl:rounded-r-none py-1 text-2xl">
                Description
              </p>
              <p className="p-5 text-xl">{data.product.description}</p>
            </div>
            <div className="flex flex-col
            lg:w-1/2
            xl:w-1/2
            2xl:w-1/2">
              <p className="bg-yellow-500 font-semibold text-center rounded-r-lg rounded-l-lg lg:rounded-l-none xl:rounded-l-none py-1 text-2xl">
                Informations
              </p>
              <p className="px-5 pt-5 text-xl">Catégorie : {data.product.category}</p>

              {/* Condition sur l'existence d'une valeur à sous-catégorie*/}
              {data.product.subcategory && 
                <p className="px-5 text-xl">
                  Sous-catégorie : {data.product.subcategory}
                </p>
              }

              <p className="px-5 pb-5 text-xl">Age : {data.product.required_age}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsProductView;
