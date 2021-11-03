import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const Navbar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <nav className='justify-between flex bg-yellow-300 px-12 py-4 mx-auto'>
            <div className='text-white font-semibold'>
                <span>La course aux jouets</span>
                <ul className='flex text-white pt-6'>
                    {/* <li className='px-4'>Découvrir</li> */}
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
                                    <div className='py-1 bg-yellow-300'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Nouveautés</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Top Ventes</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Tendances</a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    {/* <li className='px-4'>Catégories</li> */}
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
                                    <div className='py-1 bg-yellow-300'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Roues</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Peluches</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Figurines</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Jeux</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Jeux et Puzzles</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Construction</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Véhicules</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Educatifs</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >Baby</a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </li>
                    {/* <li className='px-4'>Par Age</li> */}
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
                                    <div className='py-1 bg-yellow-300'>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >0 - 24 mois</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >3 à 4 ans</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >5 à 7 ans</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
                                                      )}
                                                >8 à 10 ans</a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-white',
                                                        'block px-4 py-2 text-sm hover:bg-white hover:text-yellow-300'
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
            <span className=' text-white'>Recherche</span>
            <div className=' flex text-white'>
                <a href="" className=' px-4'>Mon compte</a>
                <a href="" className=' px-4'>Panier</a>
            </div>
        </nav>
    );
};

export default Navbar;