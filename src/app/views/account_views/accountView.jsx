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
    },
    {
      title: "",
      description: "",
      url: "",
    },
    {
      title: "",
      description: "",
      url: "",
    },
    {
      title: "",
      description: "",
      url: "",
    },
    {
      title: "",
      description: "",
      url: "",
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
            svg: "bi bi-person-circle",
            title: "Mon profil",
            description: "Modifiez les informations de votre profil.",
            url: "/",
          },
          {
            title: "Mes commandes",
            description: "Suivre, retourner ou acheter à nouveau.",
            url: "/",
          },
          {
            title: "Addresse",
            description:
              "Modifiez les adresses et les préférences de livraison.",
            url: "/",
          },
          {
            title: "Vos Paiements",
            description: "Archivez ou telechargez vos factures.",
            url: "/",
          },
          {
            title: "Supprimer le compte",
            description: "Supprimez votre compte.",
            url: "/",
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
          },
        {
            title: "Mes commandes",
            description: "Suivre les dernières commandes effectuées.",
            url: "/",
          },
           {
            title: "Gestion des produits",
            description: "Ajoutez, modifiez et supprimez vos produits.",
            url: "/",
          },
         {
            title: "Null",
            description: "Null.",
            url: "null",
          },
        {
            title: "Supprimer me compte",
            description: "Supprimez votre compte.",
            url: "/",
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
          },
          {
            title: "Commandes",
            description: "Suivre les commandes passées sur le site.",
            url: "/",
          },
           {
            title: "Gestion des utilisateurs",
            description: "Voir la liste des utilisateurs inscrits sur le site.",
            url: "/",
          },
           {
            title: "Gestion des produits",
            description: "Gérer les produits disponible sur le site",
            url: "/",
          },
           {
            title: "Supprimer me compte",
            description: "Supprimez votre compte.",
            url: "/",
          },
        ]);
        break;
      }
      default:
        console.log("ERREUR : AUCUN ROLE CONNU");
    }
  };

  return (
    <div className="flex sm:flex-col sm:justify-between sm:space-y-6 sm:items-center w-full md:flex-col md:justify-between md:space-y-6 md:items-center lg:content-start">
      <h2 className="sm:text-2xl sm:ml-12 sm:mt-4 sm:place-self-start md:text-2xl md:mt-4 md:place-self-start md:ml-12 lg:flex-row  ">
        Mon Compte{" "}
      </h2>
      {userState.map((card) => (
          <LinkCategoryAccount props={card} />
      )
        
      )}

    </div>
  );
}
