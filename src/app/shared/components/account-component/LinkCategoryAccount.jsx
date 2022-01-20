import React from "react";

import { Link } from "react-router-dom";

export default function LinkCategoryAccount({props}) {

  console.log('2',props)
  return (
    <>
      <Link to={props.url} className="sm:w-10/12 sm:mt-8 md:w-10/12 md:mt-8 lg:w-5/12 lg:m-4 ">
        <div className="flex-col w-full  h-40 border border-secondary-300 cursor-pointer bg-none  hover:border-2 ">
          <div className="flex flex-row mt-6 space-x-4 sm:ml-4 md:ml-6 text-primary-500 lg:ml-4  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <h3>{props.title}</h3>
            
          </div>
          <p className="text-primary-200 mt-6 pl-6">{props.description}</p>
        </div>
      </Link>
    </>
  );
}
