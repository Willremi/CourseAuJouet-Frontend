import React, { useState, useEffect } from "react";
import LinkCategoryAccount from "../../shared/components/account-component/LinkCategoryAccount";

import { getPayloadToken } from "../../shared/services/tokenServices";

export default function AccountView() {
  const payload = getPayloadToken();
  const roles = payload.role[0].role_name.split(",");

  const [userState, setUserState] = useState([
    {
      title: "",
      description: "",
      url: "",
      icon:"",
    },
    {
      title: "",
      description: "",
      url: "",
      icon:"",
    },
    {
      title: "",
      description: "",
      url: "",
      icon:"",
    },
    {
      title: "",
      description: "",
      url: "",
      icon:"",
    },
    {
      title: "",
      description: "",
      url: "",
      icon:"",
    },
  ]);

  console.log('clg 1', userState)

  useEffect(() => {
    getPropsByRole();
  }, []);

  const getPropsByRole = () => {
    switch (roles[0]) {
      case "CUSTOMER": {
        setUserState([
           {
            title: "Mon profil",
            description: "Modifiez les informations de votre profil.",
            url: "/",
            icon:"mdi:account",
          },
          {
            title: "Mes commandes",
            description: "Suivre, retourner ou acheter à nouveau.",
            url: "/",
            icon:"mdi:basket-check",
          },
          {
            title: "Addresse",
            description:
              "Modifiez les adresses et les préférences de livraison.",
            url: "/",
            icon:"mdi:home",
          },
          {
            title: "Vos Paiements",
            description: "Archivez ou telechargez vos factures.",
            url: "/",
            icon:"mdi:credit-card-check",
          },
          {
            title: "Supprimer le compte",
            description: "Supprimez votre compte.",
            url: "/",
            icon:"mdi:alert-octagon",
          },
        ]);

        break;
      }

      case "MANAGER": {
        setUserState([
         {
            title: "Ma boutique.",
            description: "Modifiez les informations de votre boutique.",
            url: "/",
            icon:"mdi:store",
          },
        {
            title: "Mes commandes",
            description: "Suivre les dernières commandes effectuées.",
            url: "/",
            icon:"mdi:basket-check",
          },
           {
            title: "Gestion des produits",
            description: "Ajoutez, modifiez et supprimez vos produits.",
            url: "/",
            icon:"mdi:gift-outline",
          },
         {
            title: "Paiements",
            description: "Affichez et gerez vos factures..",
            url: "/",
            icon:"mdi:cash",
          },
        {
            title: "Supprimer me compte",
            description: "Supprimez votre compte.",
            url: "/",
            icon:"mdi:alert-octagon",
          },
        ]);

        break;
      }

      case "ADMIN": {
        setUserState([
       {
            title: "Mon profil",
            description: "Modifiez les informations de votre profil.",
            url: "/",
            icon:"mdi:account",
          },
          {
            title: "Commandes",
            description: "Suivre les commandes passées sur le site.",
            url: "/",
            icon:"mdi:basket-check",
          },
           {
            title: "Gestion des utilisateurs",
            description: "Voir la liste des utilisateurs inscrits sur le site.",
            url: "/",
            icon:"mdi:account-group",
          },
           {
            title: "Gestion des produits",
            description: "Gérer les produits disponible sur le site",
            url: "/",
            icon:"mdi:gift-outline",
          },
           {
            title: "Supprimer me compte",
            description: "Supprimez votre compte.",
            url: "/",
            icon:"mdi:alert-octagon",
          },
        ]);
        break;
      }
      default:
        console.log("ERREUR : AUCUN ROLE CONNU");
    }
  };

  return (
    <div className="flex  sm:flex-col sm:justify-between sm:space-y-6 sm:items-center w-full md:flex-col md:justify-between md:space-y-6 md:items-center lg:flex-row lg:flex-wrap xl:flex-row xl:flex-wrap 2xl:flex-wrap">
      {/* <h2 className="sm:text-2xl sm:ml-12 sm:mt-4 sm:place-self-start md:text-2xl md:mt-4 md:place-self-start md:ml-12 lg:flex-row">
        Mon Compte{" "}
      </h2> */}
      {userState.map((card) => (
          <LinkCategoryAccount props={card} />
      )
        
      )}

    </div>
  );
}
