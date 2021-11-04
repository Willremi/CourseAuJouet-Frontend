import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
// import './navbar.css';

const Navbar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='justify-between flex bg-nav-blue md:bg-nav-yellow max-w-12xl mx-auto py-2 sm:px-6 lg:px-8'>
                <button className="block lg:hidden cursor-pointer ml-1 relative w-12 h-12" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? (<svg className="fill-current text-nav-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>) : (<svg className="fill-current text-nav-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>)}
                </button>

                <div className='hidden md:block text-nav-blue font-semibold'>
                    <span>La course aux jouets</span>
                    <ul className='flex text-nav-blue pt-6'>
                        {/* Découvrir */}
                        <li className='px-4'>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="font-semibold">Découvrir</Menu.Button>
                                </div>
                                <Transition as={Fragment} enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="origin-top-right absolute mt-2 w-56">
                                        <div className='py-1 bg-nav-yellowClar rounded'>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Nouveautés</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Top Ventes</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Tendances</a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        {/* Catégories */}
                        <li className='px-4'>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="font-semibold">Catégories</Menu.Button>
                                </div>
                                <Transition as={Fragment} enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="origin-top-right absolute mt-2 w-56">
                                        <div className='py-1 bg-nav-yellowClar rounded'>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Roues</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Peluches</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Figurines</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Jeux</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Jeux et Puzzles</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Construction</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Véhicules</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Educatifs</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >Baby</a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        {/* Par Age */}
                        <li className='px-4'>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="font-semibold">Par Age</Menu.Button>
                                </div>
                                <Transition as={Fragment} enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="origin-top-right absolute mt-2 w-56">
                                        <div className='py-1 bg-nav-yellowClar rounded'>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >0 - 24 mois</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >3 à 4 ans</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >5 à 7 ans</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >8 à 10 ans</a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active ? 'text-nav-blue' : 'text-nav-blue',
                                                            'block px-4 py-2 text-sm hover:bg-nav-yellow'
                                                        )}
                                                    >11 ans ou +</a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>

                    </ul>
                </div>

                {/* <span className=' text-white'>Recherche</span> */}
                <div className='hidden md:flex relative mx-auto md:w-1/4 max-w-sm'>
                    <input class="border-2 border-blue-300 bg-red transition h-7 px-5 pr-16 rounded-md focus:outline-none text-black text-lg " type="search" name="search" placeholder="Recherche" />
                </div>

                {!isOpen ? (<div className='flex text-nav-yellow font-semibold md:text-nav-blue text-lg md:text-xl'>
                    <a href="" className=' px-2'>Mon compte</a>
                    <a href="" className=' px-2'>Panier</a>
                </div>) : (<div></div>)}
            </nav>
            {isOpen && (<div className='md:hidden divide-y text-center'>
                <div className='divide-y'>
                    <div className='py-2 h-14'><a className='text-2xl text-nav-blue font-police font-semibold' href="">Accueil</a></div>
                    <div className='py-2 h-14'><a className='text-2xl text-nav-blue font-police font-semibold' href="">Boutique</a></div>
                    <div className='py-2 h-14'><a className='text-2xl text-nav-blue font-police font-semibold' href="">Aide</a></div>
                    <div className='py-2 h-14'><a className='text-2xl text-nav-blue font-police font-semibold' href="">Profil</a></div>
                    <div className='py-2 h-14'><a className='text-2xl text-nav-blue font-police font-semibold' href="">Mon panier</a></div>
                    <div></div>
                </div>
                <br />
                <div className='pb-9 grid w-2 mx-36'>
                    <button className='p-2 pl-5 pr-5 bg-nav-blueClar text-gray-100 text-lg rounded-lg border-2 border-nav-blueClar font-semibold'>Connexion</button>
                    <button className='mt-2 p-2 pl-5 pr-5 bg-transparent border-2 border-nav-blueClar text-nav-blueClar text-lg rounded-lg hover:bg-nav-blueClar hover:text-gray-100 focus:border-4 focus:border-nav-blueClar font-semibold'>Inscription</button>
                </div>

            </div>
            )}

        </>
    );
};

export default Navbar;