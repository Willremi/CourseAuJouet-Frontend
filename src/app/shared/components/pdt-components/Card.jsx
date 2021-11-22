import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="w-48 h-80 border border-gray rounded-md ml-8 shadow-md ">
        <div className="flex w-48 h-48 border border-gray rounded-md shadow-xl">
          <img
            key={props.id}
            src={props.img}
            alt="im pdt"
            className="w-40 h-40 flex  self-center mx-auto border border-gray-200 "
          />
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <h2 className="ml-2" key={props.id}>
            <b>{props.name}</b>
          </h2>
          <h2 className="ml-2" key={props.id}>
            <b>{props.price} €</b>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Card;
