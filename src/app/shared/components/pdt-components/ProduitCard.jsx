import React from "react";

function ProduitCard() {
  return (
    <>
      <div className="w-48 h-80 border border-gray rounded-md ml-8">
        <div className="w-48 h-48 border border-black rounded-md bg-gray-300">
          <img src="" alt="im pdt" />
        </div>
        <div className="mt-2 flex flex-col space-y-2">
          <h2>Monopoly</h2>
          <h2>29,99 €</h2>

        </div>
      </div>
    </>
  );
}

export default ProduitCard;
