
import React from "react";
import { useState, useEffect } from "react";
import { getProduct } from "../../../api/backend/account";
import Card from "./Card";

function ProduitCard() {


  



  const [produit, setProduit] = useState([{img: "mono.jpg", name: "Monopoly ville de Nantes", price: "30."}]
  );

  useEffect(() => {
    getProduct()
      .then((res) => {
        setProduit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    produit.map(pdt => {
      return (
        <Card props={pdt} />
      )
    })


      );
}

export default ProduitCard;
