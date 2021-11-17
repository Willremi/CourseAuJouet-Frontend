import { URL_HOME } from './../urls/urlConstants';
export const navigation = [
    {
      name: "Découvrir",
      href: URL_HOME,
      current: false,
      submenu: [
        { name: "Nouveautés", href: URL_HOME, current: false },
        { name: "Top Ventes", href: URL_HOME, current: false },
        { name: "Tendances", href: URL_HOME, current: false },
      ],
    },
    {
      name: "Catégories",
      href: URL_HOME,
      submenu: [
        { name: "Roues", href: URL_HOME, current: false },
        { name: "Peluches", href: URL_HOME, current: false },
        { name: "Figurines", href: URL_HOME, current: false },
        { name: "Jeux & Puzzles", href: URL_HOME, current: false },
        { name: "Construction", href: URL_HOME, current: false },
        { name: "Véhicules", href: URL_HOME, current: false },
        { name: "Educatifs", href: URL_HOME, current: false },
        { name: "Baby", href: URL_HOME, current: false },
      ],
    },
    {
      name: "Par Age",
      href: URL_HOME,
      submenu: [
        { name: "0 à 24 mois", href: URL_HOME, current: false },
        { name: "3 à 4 ans", href: URL_HOME, current: false },
        { name: "5 à 7 ans", href: URL_HOME, current: false },
        { name: "8 à 10 ans", href: URL_HOME, current: false },
        { name: "11 ans ou +", href: URL_HOME, current: false },
      ],
    },
  ];