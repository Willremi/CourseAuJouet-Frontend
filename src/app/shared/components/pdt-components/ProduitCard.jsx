import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";


function ProduitCard() {

  let data = {
    img: "monop.jpg",
    name: "Monopoly ville de Nantes",
    price: "30,99",
  };
  // const [produit, setProduit] = useState([]);

  // useEffect(() => {
    
  //      axios
  //      .get("http://localhost:3001/product")
  //       .then((res)=> {
  //           setProduit(res.data);
  //       })
  // .catch((err) => {
  //   console.log(err)
  // });


  // }, [])



  console.log(useState());
  return (
    <>
    {/* {data.map((pdt) => {
      <div className="w-48 h-80 border border-gray rounded-md ml-8 shadow-md ">
      <div className="flex w-48 h-48 border border-gray rounded-md shadow-xl">
        <img
          key={pdt.id}
          src={pdt.img}
          alt="im pdt"
          className="w-40 h-40 flex  self-center mx-auto border border-gray-200 "
        />
      </div>
      <div className="mt-2 flex flex-col space-y-1">
        <h2 className="ml-2" key={pdt.id}>
          <b>{pdt.name}</b>
        </h2>
        <h2 className="ml-2" key={pdt.id}>
          <b>{pdt.price} €</b>
        </h2>
      </div>
    </div>
    })} */}
      <div className="w-48 h-80 border border-gray rounded-md ml-8 shadow-md ">
        <div className="flex w-48 h-48 border border-gray rounded-md shadow-xl">
          <img
            src={data.img}
            alt="im pdt"
            className="w-40 h-40 flex  self-center mx-auto border border-gray-200 "
          />
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h2 className="ml-2">
            <b>{data.name}</b>
          </h2>
          <h2 className="ml-2">
            <b>{data.price} €</b>
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProduitCard;
