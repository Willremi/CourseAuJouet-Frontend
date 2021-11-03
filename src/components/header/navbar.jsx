import React from 'react';
// import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='items-center justify-between flex bg-yellow-300 px-12 py-4 my-4 mx-auto'>
            <div className='text-white text-2xl font-semibold inline-flex items-center'>
                <span>La course aux jouets</span>
                <ul className='flex text-white'>
                    <li className='px-4'>Découvrir</li>
                    <li className='px-4'>Catégories</li>
                    <li className='px-4'>Par Age</li>
                    
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