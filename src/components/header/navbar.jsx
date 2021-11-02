import React from 'react';
// import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <h3>La course aux jouet</h3>
                </div>
                    <h4>Recherche</h4>

                    <div>partie gauche</div>
                    <ul className='flex mb-4'>
                        <li className=''>Découvrir</li>
                        <li className=''>Catégories</li>
                        <li className=''>Par âges</li>
                    </ul>
                <br/>
                <div className='right'>partie droite</div>
                    <ul>
                        <li>Mon compte</li>
                        <li>Panier</li>
                    </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;