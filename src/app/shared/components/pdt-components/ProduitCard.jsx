import React from "react";

function ProduitCard() {
  return (
    <>
      <div className="w-48 h-80 border border-gray rounded-md ml-8 shadow-md ">
        <div className="flex w-48 h-48 border border-gray rounded-md shadow-xl">
          <img src="monop.jpg" alt="im pdt" className="w-40 h-40 flex  self-center mx-auto border border-gray-200 "/>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h2 className="ml-2"><b>Monopoly</b></h2>
          <h2  className="ml-2"><b>29,99 €</b></h2>

        </div>
      </div>
    </>
  );
}

export default ProduitCard;
