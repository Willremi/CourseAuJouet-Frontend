import {
  URL_CATEGORY,
  URL_HOME
} from './../urls/urlConstants';
export const navigation = [
  {
    name: "Découvrir",
    href: URL_HOME,
    current: false,
    submenu: [{
        name: "Nouveautés",
        href: URL_HOME,
        current: false
      },
      {
        name: "Top Ventes",
        href: URL_HOME,
        current: false
      },
      {
        name: "Tendances",
        href: URL_HOME,
        current: false
      },
    ],
  },
  {
    name: "Catégories",
    href: URL_HOME,
    submenu: [{
        name: "Roues",
        href: "/category/Roue",
        current: false
      },
      {
        name: "Peluches",
        href: "/category/Peluche",
        current: false
      },
      {
        name: "Figurines",
        href: "/category/Figurine",
        current: false
      },
      {
        name: "Jeux & Puzzles",
        href: "category/jeux",
        current: false
      },
      {
        name: "Construction",
        href: "/category/construction",
        current: false
      },
      {
        name: "Véhicules",
        href: "/category/vehicule",
        current: false
      },
      {
        name: "Educatifs",
        href: "/category/educatifs",
        current: false
      },
      {
        name: "Baby",
        href: "/category/baby",
        current: false
      },
    ],
  },
  {
    name: "Par Age",
    href: URL_HOME,
    submenu: [{
        name: "0 à 24 mois",
        href: URL_HOME,
        current: false
      },
      {
        name: "3 à 5 ans",
        href: "/age/3%20-%205%20ans",
        current: false
      },
      {
        name: "6 à 8 ans",
        href: "/age/6%20-%208%20ans",
        current: false
      },
      {
        name: "9 à 11 ans",
        href: "/age/9%20-%2011%20ans",
        current: false
      },
      {
        name: "12 ans ou +",
        href: "/age/12%20ans%20et%20+",
        current: false
      },
    ],
  },
];