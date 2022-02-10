import React from 'react';
import { Link } from 'react-router-dom';
import { URL_ACCOUNT, URL_WISHLIST } from '../../shared/constants/urls/urlConstants';

export default function Account({setShowModal}) {
  return (
    <>
      <Link
        to={URL_ACCOUNT}
        onClick={() => {
          setShowModal(false);
        }}
        className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10 w-full"
        >
        Mon compte
      </Link>
      <Link
        to={URL_WISHLIST}
        onClick={() => {
          setShowModal(false);
        }}
        className="uppercase border-b-2 border-gray-300 pl-4 py-2 my-2 duration-200 font-semibold hover:bg-nav-blue hover:text-white hover:pl-10 w-full"
        >
        Ma liste de souhaits
      </Link>
    </>
  );
}
