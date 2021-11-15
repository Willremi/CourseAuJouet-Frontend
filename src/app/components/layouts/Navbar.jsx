import React from "react";
import MyAccountButton from "../header/MyAccountButton";
import SearchBar from "../header/SearchBar";
import CartButton from "../header/CartButton";

const Navbar = () => {
  

  return (
    <nav className="top-0 fixed z-50 w-full bg-white shadow-md">
      <div className="max-w-full mx-auto ">
        <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
          <div>
            <img
              className="h-8 w-auto sm:h-10 cursor-pointer"
              src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
              alt=""
              width={200}
              height={60}
            />
          </div>

          {/* window.innerWidth => taille de la largeur de l'écran */}

          {window.innerWidth >= 504 ? <SearchBar /> : null}
          <div className="flex items-center justify-end flex-1 lg:w-0">
            <MyAccountButton />
            <CartButton />
          </div>
        </div>
        {window.innerWidth <= 503 ? <SearchBar /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
