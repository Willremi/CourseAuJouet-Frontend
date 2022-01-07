import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../../api/backend/product";
import { Icon } from "@iconify/react";
import { MinusCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import { URL_ADD_PRODUCT } from "../../../../shared/constants/urls/urlConstants";

const ListOfProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then((res) => setProduct(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  const onSaleDate = (data) => {

    let date =new Date(data)
    let day = date.getDay()
    let Month = date.getMonth() + 1
    let Year = date.getFullYear()
    
    if(day < 10){
      day = "0" + day
    }
    if(Month < 10){
      Month = "0"+ Month
    }

    return day + "/" + Month + "/" + Year
  }

  return (
    <>
      <div className="flex flex-row justify-end 
      sm:justify-center">
        <button
          type="button"
          className="flex flex-row font-semibold text-lg text-darkblue-100 items-center"
        >
          <MinusCircleIcon className="w-6 h-6 mr-2 text-secondary-600" />{" "}
          Supprimer la sélection
        </button>
      </div>

      <h2 className="flex flex-row justify-between items-center uppercase font-semibold text-xl text-nav-blue my-3 ml-1
      sm:text-lg sm:flex-col">
        Liste des produits
        <Link
        to={URL_ADD_PRODUCT}
          className={`flex flex-row justify-center items-center text-white font-semibold bg-secondary-600 px-5 py-2 rounded-xl
          sm:text-xs sm:w-4/5 sm:mt-3`}
        >
          <PlusIcon className="w-6 h-6 mr-1 text-darkblue-100" /> Ajouter un
          produit
        </Link>
      </h2>

      <table className=" w-full ">
        <thead>
          <tr className="flex text-left font-semibold w-full border-2 border-gray-400 bg-white rounded-full my-1">
            <th className="flex w-5/12 py-1 px-5 sm:hidden">Nominations</th>
            <th className="flex w-3/12 ml-5">Références</th>
            <th className="flex w-3/12 ">Date</th>
            <th className="flex w-1/12 ">Prix</th>
            <th className="flex w-2/12 ">Stock</th>
            <th className="flex w-1/12 ">Actions</th>
          </tr>
        </thead>
        <tbody className=" bg-white">
          {product.map((product, index) => (
            <tr
              key={index}
              className="flex justify-between w-full items-center first:rounded-t-xl first:border-t-2 last:rounded-b-xl last:border-b-2 border-r-2 border-l-2 border-gray-400"
            >
              <td className="flex w-5/12 py-1 pl-5 truncate sm:hidden">
                {product.product_name}
              </td>
              <td className="flex w-3/12 ml-5">{product.reference}</td>
              <td className="flex w-3/12 ">{onSaleDate(product.on_sale_date)}</td>
              <td className="flex w-1/12 ">{product.price / 100}€</td>
              <td className="flex w-2/12 ">
                <input
                  type="text"
                  placeholder={product.stock}
                  className="w-2/3 h-8"
                />
                <button>
                  <Icon
                    icon="dashicons:update-alt"
                    className="scale-200 text-nav-blue mx-3"
                  />
                </button>
              </td>
              <td className="flex flex-row justify-around pr-3 w-1/12">
                <button>
                  <Icon
                    icon="carbon:change-catalog"
                    className="scale-150 text-nav-blue"
                  />
                </button>
                <button>
                  <Icon
                    icon="bx:bxs-trash"
                    className="scale-150 text-nav-blue"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListOfProduct;
