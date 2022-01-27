import React from "react";
import { Icon } from '@iconify/react';

import { Link } from "react-router-dom";

export default function LinkCategoryAccount({props}) {

  return (
    <>
      <Link to={props.url} className="sm:w-10/12 sm:mt-8 md:w-10/12 md:mt-8 lg:w-5/12 lg:m-4 xl:w-5/12 xl:mt-8 xl:m-4 2xl:w-5/12 2xl:m-4 ">
        <div className="flex-col w-full  h-40 border-2 border-secondary-300 cursor-pointer bg-white  hover:border-4 rounded-md ">
          <div className="flex flex-row   mt-6 space-x-4 sm:ml-4 md:ml-6 text-primary-900 lg:ml-4 xl:ml-4 2xl:ml-4  ">

          <Icon icon={props.icon} width="35" color='#ff6a1a'/>
            <h3 className="font-bold pt-1">{props.title}</h3>
            
          </div>
          <p className="text-primary-800 mt-6 pl-6">{props.description}</p>
        </div>
      </Link>
    </>
  );
}
