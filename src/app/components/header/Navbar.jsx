import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import SearchBar from "./SearchBar";
import MyAccountButton from "./MyAccountButton";
import Logo from "../../assets/images/LA_COURSE_AU_JOUET_LOGO-1.png";
import { Link } from "react-router-dom";
import { URL_HOME } from "./../../shared/constants/urls/urlConstants";
import CartButton from "./../../shared/components/button/CartButton";
import { navigation } from "../../shared/constants/dropdownmenu/dropDownMenuConstants";


const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col bg-nav-yellow w-screen
      sm:bg-nav-blueClar sm:py-3
        lg:px-8"
        
      >
        <div className="flex flex-row justify-between mb-3 md:mb-0 2xl:w-11/12 2xl:mx-auto">
          {/* Burger menu pour mobile */}
          <div className="flex flex-row w-full items-center">
            {window.innerWidth <= 1024 ? (
              <button
                className="w-12 h-12 mx-6 "
                onClick={() => setIsOpen(!isOpen)}
              >
                {!isOpen ? (
                  <svg
                    className="fill-current text-nav-yellow md:text-nav-blue md:h-6 md:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                ) : (
                  <svg
                    className="fill-current text-nav-yellow md:text-nav-blue md:h-6 md:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                  </svg>
                )}
              </button>
            ) : null}
            {/* 
            Logo du site qui renvoie a l'acceuil au clic
            */}
            <Link to={URL_HOME} className="sm:hidden md:hidden xl:w-3/12 2xl:w-2/12 md:ml-3">
              <img src={Logo} alt="Logo" />
            </Link>

            {/* Recherche */}
            {window.innerWidth >= 504 ? (
              <div className="flex flex-col w-full">
                <SearchBar />

                {/* Navigation */}
                <div>
                  <nav className="hidden lg:grid xl:grid 2xl:grid md:text-nav-blue font-semibold">
                    <ul className="hidden lg:flex xl:flex 2xl:flex text-nav-blue pt-6 justify-around">
                      {navigation.map((item) => (
                        <li key={item.name} className="px-4 z-10">
                          <Menu as="div">
                            <div>
                              <Menu.Button className="text-2xl font-semibold">
                                {item.name}
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                className="origin-top-right absolute mt-2 w-72 z-10
                                      "
                              >
                                <div className="py-1 bg-nav-yellowClar rounded">
                                  {item.submenu.map((sub) => (
                                    <Menu.Item key={sub.name}>
                                      {({ active }) => (
                                        <Link
                                          to={sub.href}
                                          className={classNames(
                                            active
                                              ? "text-nav-blue"
                                              : "text-nav-blue",
                                            "block px-4 py-2 text-2xl hover:bg-nav-yellow"
                                          )}
                                        >
                                          {sub.name}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex flex-row items-center 2xl:items-start 2xl:pt-3">
            {/* Bouton Mon compte */}
            <MyAccountButton />

            {/* Bouton Panier */}
            <CartButton />
          </div>
        </div>
        {window.innerWidth < 504 ? <SearchBar /> : null}

       
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* TABLETTE */}
        <div className="hidden md:block">
          <div className="flex">
            <ul className="bg-nav-yellowClar divide-y">
              {navigation.map((item) => (
                <li key={item.name} className="hover:bg-nav-yellow">
                  <Disclosure as="div">
                    <div id={item.name}>
                      <Disclosure.Button className="block pl-4 pr-60 py-2 text-3xl rounded font-semibold text-nav-blue">
                        {item.name}
                      </Disclosure.Button>
                    </div>

                    <Transition
                      as="div"
                      enter="transition ease-in-out duration-200 transform"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transition ease-in-out duration-200 transform"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <div className="py-1 bg-nav-yellowClar rounded">
                        {item.submenu.map((sub) => (
                          <Disclosure.Panel key={sub.name}>
                            {({ active }) => (
                              <Link
                                to={URL_HOME}
                                className={classNames(
                                  active ? "text-nav-blue" : "text-nav-blue",
                                  "block pl-4 pr-60 py-2 text-2xl hover:bg-nav-yellow"
                                )}
                              >
                                {sub.name}
                              </Link>
                            )}
                          </Disclosure.Panel>
                        ))}
                      </div>
                    </Transition>
                  </Disclosure>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* smartphone */}
        <div className="md:hidden sm:absolute sm:bg-white sm:z-20 sm:w-full">
          <div className="divide-y ">
            <div className="py-3">
              <Link
                className="text-2xl flex items-center ml-11 text-nav-blue font-police font-semibold"
                to={URL_HOME}
              >
                Accueil
              </Link>
            </div>
            <div className="py-2">
              <Link
                className="text-2xl ml-11 items-center text-nav-blue font-police font-semibold flex justify-between"
                to={URL_HOME}
              >
                Boutique
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="py-2">
              <Link
                className="text-2xl ml-11 items-center text-nav-blue font-police font-semibold flex justify-between"
                to={URL_HOME}
              >
                Aide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="py-2">
              <Link
                className="text-2xl ml-11 text-nav-blue font-police font-semibold flex justify-between items-center"
                to={URL_HOME}
              >
                Profil
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="py-2">
              <Link
                className="text-2xl ml-11 text-nav-blue font-police font-semibold flex justify-between items-center"
                to={URL_HOME}
              >
                Mon panier
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <hr />
          <div className="text-center mt-4">
            <button className="p-2 pl-5 pr-5 bg-nav-blueClar text-gray-100 text-lg rounded-lg border-2 border-nav-blueClar font-semibold">
              Connexion
            </button>
            <br />
            <button className="mt-2 p-2 pl-5 pr-5 bg-transparent border-2 border-nav-blueClar text-nav-blueClar text-lg rounded-lg hover:bg-nav-blueClar hover:text-gray-100 focus:border-4 focus:border-nav-blueClar font-semibold">
              Inscription
            </button>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
