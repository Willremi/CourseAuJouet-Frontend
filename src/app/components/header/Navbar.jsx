import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
    const navigation = [
        {
            name: 'Découvrir', href: '#', current: false, submenu: [
                { name: "Nouveautés", href: '#', current: false },
                { name: "Top Ventes", href: '#', current: false },
                { name: "Tendances", href: '#', current: false },
            ]
        },
        {
            name: 'Catégories', href: '#', submenu: [
                { name: "Roues", href: '#', current: false },
                { name: "Peluches", href: '#', current: false },
                { name: "Figurines", href: '#', current: false },
                { name: "Jeux & Puzzles", href: '#', current: false },
                { name: "Construction", href: '#', current: false },
                { name: "Véhicules", href: '#', current: false },
                { name: "Educatifs", href: '#', current: false },
                { name: "Baby", href: '#', current: false },
            ]
        },
        {
            name: 'Par Age', href: '#', submenu: [
                { name: "0 à 24 mois", href: '#', current: false },
                { name: "3 à 4 ans", href: '#', current: false },
                { name: "5 à 7 ans", href: '#', current: false },
                { name: "8 à 10 ans", href: '#', current: false },
                { name: "11 ans ou +", href: '#', current: false },
            ]
        },
    ];


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className='justify-between flex bg-nav-blueClar md:bg-nav-yellow max-w-12xl mx-auto py-2 sm:px-6 lg:px-8'>
                <button className="block lg:hidden cursor-pointer ml-1 relative w-12 h-12" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? (<svg className="fill-current text-nav-yellow md:text-nav-blue md:h-16 md:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>) : (<svg className="fill-current text-nav-yellow md:text-nav-blue md:h-16 md:w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>)}
                </button>

                <div className='md:text-nav-blue font-semibold'>
                    {/* <img className='hidden md:block md:text-center md:w-44 md:h-20 lg:w-72 lg:h-28' src={Logo} alt="logo" /> */}
                    <object className='hidden md:block md:text-center md:w-44 md:h-20 lg:w-72 lg:h-28' type="image/svg+xml" data={Logo}></object>
                </div>

                <div className='hidden lg:grid  md:items-start md:py-1 text-nav-yellow px-16 w-full'>
                    {/* <span>Recherche</span> */}
                    <input className='border-2 border-blue-300 rounded-3xl text-black text-lg' type="search" placeholder='Recherche' />
                    <nav className='md:text-nav-blue font-semibold'>
                        <ul className='hidden lg:flex text-nav-blue pt-6 justify-around'>
                        {navigation.map((item) => (
                            <li key={item.name} className='px-4'>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="text-2xl font-semibold">{item.name}</Menu.Button>
                                    </div>
                                    <Transition as={Fragment} enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="origin-top-right absolute mt-2 w-56">
                                            <div className='py-1 bg-nav-yellowClar rounded'>
                                                {item.submenu.map((sub) => (
                                                    <Menu.Item key={sub.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'text-nav-blue' : 'text-nav-blue',
                                                                    'block px-4 py-2 text-2xl hover:bg-nav-yellow'
                                                                )}
                                                            >{sub.name}</a>
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


                {!isOpen ? (<div className='hidden md:flex text-nav-yellow font-semibold md:text-nav-blue text-lg md:text-xl'>
                        <a href="" className='inline-block lg:flex'><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-12 w-12 md:h-16 md:w-16 text-nav-yellow md:text-nav-blue text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></a>
                        <a href="" className='inline-block lg:flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg></a>
                    </div>) : (
                    <div className='hidden md:flex text-nav-yellow font-semibold md:text-nav-blue text-lg md:text-xl'>
                        <a href="" className='inline-block lg:flex'><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-12 w-12 md:h-16 md:w-16 text-nav-yellow md:text-nav-blue text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></a>
                        <a href="" className='inline-block lg:flex'><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg></a>
                    </div>
                )}
            </header>
            <div className='lg:hidden justify-between md:flex bg-nav-blueClar md:bg-nav-yellow max-w-12xl mx-auto py-2 sm:px-6 lg:px-8'>

                {!isOpen && (
                    <div className='md:flex lg:hidden md:flex-row md:items-start md:overflow-hidden px-2 md:py-1 text-nav-yellow md:text-nav-blue'>
                        {/* <span>Recherche</span> */}
                        <input className='border-2 border-blue-300 bg-red rounded-3xl w-full md:w-screen text-black text-lg' type="search" placeholder='Recherche' />
                    </div>
                )}
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

                {/* tablet */}
                <div className="hidden md:block">
                    <div className="flex">
                        <ul className='bg-nav-yellowClar divide-y'>
                            {navigation.map((item) => (
                                <li key={item.name} className='hover:bg-nav-yellow'>
                                    <Disclosure as="div">

                                        <div id={item.name}>
                                            <Disclosure.Button className='block pl-4 pr-60 py-2 text-3xl rounded font-semibold text-nav-blue'>{item.name}
                                            </Disclosure.Button>
                                        </div>

                                        <Transition
                                            as="div" enter="transition ease-in-out duration-200 transform"
                                            enterFrom="-translate-x-full"
                                            enterTo="translate-x-0"
                                            leave="transition ease-in-out duration-200 transform"
                                            leaveFrom="translate-x-0"
                                            leaveTo="-translate-x-full">

                                            <div className='py-1 bg-nav-yellowClar rounded'>
                                                {item.submenu.map((sub) =>
                                                    <Disclosure.Panel key={sub.name}>
                                                        {({ active }) => (
                                                            <a href="#" className={classNames(active ? 'text-nav-blue' : 'text-nav-blue',
                                                                'block pl-4 pr-60 py-2 text-2xl hover:bg-nav-yellow')}
                                                            >{sub.name}</a>
                                                        )}

                                                    </Disclosure.Panel>

                                                )}
                                            </div>
                                        </Transition>
                                    </Disclosure>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>

                {/* smartphone */}
                <div className='md:hidden'>
                    <div className='divide-y'>
                        <div className='py-2 h-14 text-center'>
                            <a className='text-2xl text-nav-blue font-police font-semibold' href="">
                                <span>Accueil</span>
                            </a>
                        </div>
                        <div className='py-2 h-14'>
                            <a className='text-2xl text-nav-blue font-police font-semibold flex justify-between' href="">
                                <div></div>
                                <span className="ml-11">Boutique</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className='py-2 h-14'>
                            <a className='text-2xl text-nav-blue font-police font-semibold flex justify-between' href="">
                                <div></div>
                                <span className='ml-11'>Aide</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className='py-2 h-14'>
                            <a className='text-2xl text-nav-blue font-police font-semibold flex justify-between' href="">
                                <div></div>
                                <span className='ml-11'>Profil</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        <div className='py-2 h-14'>
                            <a className='text-2xl text-nav-blue font-police font-semibold flex justify-between' href="">
                                <div></div>
                                <span className='ml-11'>Mon panier</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                    </div>
                    <hr />
                    <div className='text-center mt-4'>
                        <button className='p-2 pl-5 pr-5 bg-nav-blueClar text-gray-100 text-lg rounded-lg border-2 border-nav-blueClar font-semibold'>Connexion</button><br />
                        <button className='mt-2 p-2 pl-5 pr-5 bg-transparent border-2 border-nav-blueClar text-nav-blueClar text-lg rounded-lg hover:bg-nav-blueClar hover:text-gray-100 focus:border-4 focus:border-nav-blueClar font-semibold'>Inscription</button>

                    </div>
                </div>
            </Transition>
            
        </>
    );
};

export default Navbar;