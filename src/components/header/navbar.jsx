import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <p>Logo</p>

            <select>
                <option value="">Découvrir</option>
                <option value="">Nouveautés</option>
                <option value="">Top ventes</option>
                <option value="">Tendances</option>
            </select>
            <select>
                <option value="">Catégories</option>
                <option value="">Roues</option>
                <option value="">Peluches</option>
                <option value="">Figurines</option>
                <option value="">Jeux</option>
                <option value="">Jeux et Puzzles</option>
                <option value="">Construction</option>
                <option value="">Véhicules</option>
                <option value="">Educatif</option>
                <option value="">Baby</option>
            </select>
            <select>
                <option value="">Par Age</option>
                <option value="">0-24 mois</option>
                <option value="">2 ans</option>
                <option value="">3-4 ans</option>
                <option value="">5-7 ans</option>
                <option value="">8-10 ans</option>
                <option value="">11 ans ou +</option>
            </select>

            <p>Recherche</p>
            <p>Mon compte</p>
            <p>Panier</p>
        </nav>
    );
};

export default Navbar;