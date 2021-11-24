import React from "react";

const ProductInCart = ({ component }) => {
  console.log(component);

  return (
    <div className="flex flex-row w-full justify-between h-36">
      <div className="border-secondary-100 border-8 rounded-xl w-2/12 flex justify-center p-2 bg-white">
        <img
          src={component.images[0]}
          alt={component.product_name}
        />
      </div>

      <div className="w-10/12 shadow-xl rounded-xl p-5 flex flex-col ml-10 justify-between bg-white border-4 border-gray-200">
        <div>
          <p className="flex items-center justify-between font-semibold text-2xl">
            {component.product_name}
            <button className="text-gray-400 transition-all duration-300 hover:text-gray-600">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </p>
          <p className="font-light text-2xl">{component.trademark}</p>
        </div>

        <div className="flex flex-row justify-between">
          <p className="font-semibold text-3xl">{component.price / 100}€</p>
          <p className="font-semibold text-yellow-600 text-2xl">Disponible</p>
          {/** Vérifier la disponibilité dans un futur ticket */}

          {/**
           * TODO Mettre le composant quantitée ici
           */}
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
