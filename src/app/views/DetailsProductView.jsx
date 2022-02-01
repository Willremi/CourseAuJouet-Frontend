import React, { useEffect, useState } from "react";
import { getOneProduct } from "../api/backend/product";
import { useParams } from "react-router-dom";
import {
  StarIcon,
} from "@heroicons/react/solid";
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
  console.log(data);
  console.log(id);

  return (
    <>
      {data && (
        <div className="flex flex-col w-11/12 mx-auto">
          <div className="flex-col flex my-5
            lg:flex-row
            xl:flex-row
            2xl:flex-row">
            <div className="w-full 
            lg:w-1/2
            xl:w-1/2
            2xl:w-1/2">
              {/* image a remplacer par le caroussel ici */}
              <div className="w-full flex mx-auto max-h-96
                lg:w-1/2
                xl:w-1/2
                2xl:w-1/2">
                 <div className="w-3/12  overflow-hidden overflow-y-scroll">
                  {data.product.images.map( (image, i) => (                    
                    <img className=""
                      key={i}
                      src={image}
                      alt={data.product.product_name}
                      onClick={() => setImage(i)}
                      />
                  ))}
                </div>
                <img className="border-4 border-yellow-500 rounded-xl w-9/12"
                  src={data.product.images[image]}
                  alt={data.product.product_name}
                />

              </div>
            </div>
            <div className="w-full flex flex-col justify-between font-semibold bg-white rounded-xl shadow-lg p-5
            lg:w-1/2
            xl:w-1/2
            2xl:w-1/2">
              <div>
                <h3 className="uppercase text-xl">
                  {data.product.product_name}
                </h3>
                <p className="font-light uppercase text-gray-400">
                  {data.product.trademark}
                </p>
                <div className="flex-col items-start flex justify-between text-gray-400 
                lg:items-center lg:flex-row
                xl:items-center xl:flex-row
                2xl:items-center 2xl:flex-row">
                  <p className="font-light ">De {data.product.required_age}</p>
                  {/* Commentaires en brut pour le moment*/}
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />

                    <button>(nbr_commentaires) commentaires</button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex  items-center flex-col border-0
                lg:flex-row
                xl:flex-row
                2xl:flex-row">
                  {/* Quantité */}
                  <div className="w-full justify-center flex flex-row my-3
                  lg:w-2/3 lg:justify-end
                  xl:w-2/3 xl:justify-end
                  2xl:w-2/3 2xl:justify-end">
                    <p className="py-2 text-xl mr-3">Quantité :</p>
                    <button
                      className="border-2 border-gray-300 p-2 shadow-xl"
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
                        className="h-6 w-6"
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

                    <span className="w-1/6 border-t-2 border-b-2 border-gray-300 shadow-xl text-center py-2
                    lg:w-1/12
                    xl:w-1/12                    
                    2xl:w-1/12">
                      {quantity}
                    </span>

                    <button
                      className="border-2 border-gray-300 p-2 shadow-xl"
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
                      <Icon icon="carbon:add-filled" className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="w-full justify-center my-3 flex flex-row
                  lg:w-1/3 lg:justify-end
                  xl:w-1/3 xl:justify-end
                  2xl:w-1/3 2xl:justify-end">
                    <p className="text-xl">
                    Prix : {data.product.price / 100}€
                  </p>
                  </div>
                  
                </div>

                {/* Bouton Ajout Panier*/}
                <div className="flex justify-center">
                  <button
                    className="py-2 px-6 rounded-full bg-yellow-500 font-semibold text-nav-blue cursor-pointer"
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
                    Ajouter au panier
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
            <div className="w-full border-0 flex flex-col border-yellow-500
            lg:w-1/2 lg:border-r-4
            xl:w-1/2 xl:border-r-4 
            2xl:w-1/2 2xl:border-r-4 ">
              <p className="bg-yellow-500 font-bold text-center rounded-l-lg py-1">
                Description
              </p>
              <p className="p-5">{data.product.description}</p>
            </div>
            <div className="w-full flex flex-col
            lg:w-1/2
            xl:w-1/2
            2xl:w-1/2">
              <p className="bg-yellow-500 font-bold text-center rounded-r-lg py-1">
                Informations
              </p>
              <p className="px-5 pt-5">Catégorie : {data.product.category}</p>
              <p className="px-5">
                Sous-catégorie : {data.product.subcategory}
              </p>
              <p className="px-5 pb-5">Age : {data.product.required_age}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsProductView;
