import React from "react";
import ListOfProduct from "./manager/ListOfProduct";
import AddNewProduct from './manager/AddNewProduct';

const ManagerProduct = ({selectMenu, dispatch}) => {

  return (
    <div className="w-full flex flex-col">
      
      <div className="bg-nav-yellowClar">
          <div className="w-11/12 mx-auto">
              {/* LIST OF PRODUCT */}
              {selectMenu === "Produits" ? <ListOfProduct selectMenu={selectMenu} dispatch={dispatch}/> : null}

              {/* ADD ONE PRODUCT */}
              {selectMenu === "Add Product" ? <AddNewProduct selectMenu={selectMenu} dispatch={dispatch}/>: null}
              {/* SEARCH PRODUCT   */}
          </div>
        
      </div>
    </div>
  );
};

export default ManagerProduct;
