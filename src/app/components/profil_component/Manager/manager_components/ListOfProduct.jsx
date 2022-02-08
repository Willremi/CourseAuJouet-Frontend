import React, { useEffect, useState } from "react";
import { deleteManyProducts, deleteProduct, getAllProducts } from "../../../../api/backend/product";
import { Icon } from "@iconify/react";
import { PlusIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import { URL_ADD_PRODUCT, URL_MODIFY_PRODUCT } from "../../../../shared/constants/urls/urlConstants";
import { useDispatch } from "react-redux";
import { setProductToChange } from "../../../../shared/redux-store/updateProductSlice";
import { onSaleDate } from "../../../../shared/services/dateServices";


const ListOfProduct = () => {

  const dispatch = useDispatch()
  const [product, setProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([])

  const [actualPage, setActualPage] = useState(1)

  let numberOfItems = 12
  let maxPages = Math.ceil(product.length / numberOfItems)

  function firstPage() {
    setActualPage(1)
  }

  function previousPage() {
    if (numberOfItems >= 0) {
      setActualPage(actualPage > 1 ? actualPage - 1 : 1)
    }
  }

  function nextPage() {
    if (numberOfItems <= product.length) {
      setActualPage(actualPage < maxPages ? actualPage + 1 : maxPages)
    }
  }

  function lastPage() {
    setActualPage(maxPages)
  }


  useEffect(() => {
    getAllProducts()
      .then((res) => setProduct(res.data.products))
      .catch((error) => console.log(error));
  }, []);



  function setProductToModify(produit) {
    dispatch(setProductToChange(produit))
  }

  function deleteOneProduct(productToDelete) {
    deleteProduct(productToDelete)
    setProduct(product.filter(item => item._id !== productToDelete._id))
  }

  function deleteOneSelectedProduct(productToDelete) {
    deleteProduct(productToDelete)
    setSelectedProduct(selectedProduct.filter(item => item._id !== productToDelete._id))
    setProduct(product.filter(item => item._id !== productToDelete._id))
  }

  function deleteList() {
    deleteManyProducts(selectedProduct)
    setSelectedProduct([])
  }
  return (
    <>
      <div
        className="flex flex-col justify-end 
      sm:justify-center"
      >
        {selectedProduct.length > 0 ?
          <div>
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
                {selectedProduct.map((product, index) => (
                  <tr
                    key={index}
                    className="flex justify-between w-full items-center first:rounded-t-xl first:border-t-2 last:rounded-b-xl last:border-b-2 border-r-2 border-l-2 border-gray-400"
                  >
                    <td className="flex w-5/12 py-1 pl-5 truncate sm:hidden">
                      {product.product_name}
                    </td>
                    <td className="flex w-3/12 ml-5">{product.reference}</td>
                    <td className="flex w-3/12 ">
                      {onSaleDate(product.on_sale_date)}
                    </td>
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
                      <button onClick={() => deleteOneSelectedProduct(product)}>
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
            <button
              type="button"
              className="flex flex-row font-semibold text-lg text-darkblue-100 items-center"
              onClick={() => deleteList()}
            >
              <Icon icon="ci:trash-full" className="w-6 h-6 mr-2 text-nav-blue" />
              Supprimer les produits
            </button>
          </div>
          : null}

      </div>

      <h2
        className="flex flex-row justify-between items-center uppercase font-semibold text-xl text-nav-blue my-3 ml-1
      sm:text-lg sm:flex-col"
      >
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
            <th className="ml-6 flex w-5/12 py-1 px-5 sm:hidden">Nominations</th>
            <th className="flex w-3/12 ">Références</th>
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
              <td>
                <input
                  type="checkbox"
                  className="ml-2"
                  name={product.product_name}
                  id={product.product_id}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedProduct([...selectedProduct, product]);
                    } else {
                      let i = selectedProduct.indexOf(product)
                      selectedProduct.splice(i, 1)
                      setSelectedProduct([...selectedProduct])
                    }
                  }}
                />
              </td>
              <td className="flex w-5/12 py-1 pl-5 truncate sm:hidden">
                {product.product_name}
              </td>
              <td className="flex w-3/12 ml-5">{product.reference}</td>
              <td className="flex w-3/12 ">
                {onSaleDate(product.on_sale_date)}
              </td>
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
                <Link to={URL_MODIFY_PRODUCT}>
                  <button onClick={() => setProductToModify(product)}>
                    <Icon
                      icon="carbon:change-catalog"
                      className="scale-150 text-nav-blue"
                    />
                  </button>
                </Link>
                <button onClick={() => deleteOneProduct(product)}>
                  <Icon
                    icon="bx:bxs-trash"
                    className="scale-150 text-nav-blue"
                  />
                </button>
              </td>
            </tr>
          )).slice((actualPage - 1) * numberOfItems, actualPage * numberOfItems)}
        </tbody>
      </table>

      {/* pagination */}
      <div className="mt-4 flex justify-center mx-12 md:mx-44 lg:mx-56 xl:mx-96">

        <button className={actualPage == 1 ? "invisible" : "border-2 border-nav-blueClar m-1 p-2 shadow-xl rounded-xl bg-nav-blueClar"} onClick={firstPage}>
          <Icon icon="fluent:arrow-previous-24-filled" className="text-gray-100" />
        </button>

        <button className={`border-2 border-nav-blueClar shadow-xl m-1 p-2 rounded-xl ${actualPage === 1 ? "disabled cursor-auto" : ''}`} onClick={previousPage}>
          <Icon icon="grommet-icons:previous" className={actualPage === 1 ? "text-gray-400" : "text-nav-blueClar"} />
        </button>
        
        <span className="border-2 border-nav-blueClar shadow-xl m-1 p-2 rounded-xl text-lg md:text-lg xl:text-xl">{actualPage} / {maxPages}</span>

        <button className={`border-2 border-nav-blueClar shadow-xl m-1 p-2 rounded-xl ${actualPage === maxPages ? "disabled cursor-auto" : ''}`} onClick={nextPage}>
          <Icon icon="grommet-icons:next" className={actualPage === maxPages ? "text-gray-400" : "text-nav-blueClar"} />
        </button>

        <button className={actualPage === maxPages ? "invisible" : "border-2 border-nav-blueClar m-1 p-2 shadow-xl rounded-xl bg-nav-blueClar"} onClick={lastPage}>
          <Icon icon="fluent:arrow-next-24-filled" className="text-gray-100" />
        </button>
      </div>
    </>
  );
};

export default ListOfProduct;
