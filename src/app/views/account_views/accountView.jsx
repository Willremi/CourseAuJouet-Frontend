import React, { useState, useEffect } from "react";
import LinkCategoryAccount from "../../shared/components/account-component/LinkCategoryAccount";

import { getPayloadToken } from "../../shared/services/tokenServices";
import "./AccountView.css";

export default function AccountView() {

    const payload = getPayloadToken()
    const roles = payload.role[0].role_name.split(",")
 
  const [userState, setUserState] = useState({
    cardOne: {
      title: "",
      description: "",
      url: "",
    },
    cardTwo: {
      title: "",
      description: "",
      url: "",
    },
    cardThree: {
      title: "",
      description: "",
      url: "",
    },
    cardFour: {
      title: "",
      description: "",
      url: "",
    },
    cardFive: {
      title: "",
      description: "",
      url: "",
    },
  });

  useEffect(() => {
    getPropsByRole();
  }, []);

  const getPropsByRole = () => {

    switch (roles[0]) {
      case "CUSTOMER": {
        setUserState({
          cardOne: {
            title: "Mon profil",
            description: "Modifiez les informations de votre profil.",
            url: "/",
          },
          cardTwo: {
            title: "Mes commandes",
            description: "Suivre, retourner ou acheter à nouveau.",
            url: "/",
          },
          cardThree: {
            title: "Addresse",
            description:
              "Modifiez les adresses et les préférences de livraison.",
            url: "/",
          },
          cardFour: {
            title: "Vos Paiements",
            description: "Archivez ou telechargez vos factures.",
            url: "/",
          },
          cardFive: {
            title: "Supprimer me compte",
            description: "Supprimez votre compte.",
            url: "/",
          },
        });

        break;
      }

      case "MANAGER": {

        setUserState({
            cardOne: {
              title: "Ma boutique.",
              description: "Modifiez les informations de votre boutique.",
              url: "/",
            },
            cardTwo: {
              title: "Mes commandes",
              description: "Suivre les dernières commandes effectuées.",
              url: "/",
            },
            cardThree: {
              title: "Gestion des produits",
              description:
                "Ajoutez, modifiez et supprimez vos produits.",
              url: "/",
            },
            cardFour: {
              title: "Null",
              description: "Null.",
              url: "null",
            },
            cardFive: {
              title: "Supprimer me compte",
              description: "Supprimez votre compte.",
              url: "/",
            },
          });
  
        break;
      }

      case "ADMIN": {

        setUserState({
            cardOne: {
              title: "Mon profil",
              description: "Modifiez les informations de votre profil.",
              url: "/",
            },
            cardTwo: {
              title: "Commandes",
              description: "Suivre les commandes passées sur le site.",
              url: "/",
            },
            cardThree: {
              title: "Gestion des utilisateurs",
              description:
                "Voir la liste des utilisateurs inscrits sur le site.",
              url: "/",
            },
            cardFour: {
              title: "Gestion des produits",
              description: "Gérer les produits disponible sur le site",
              url: "/",
            },
            cardFive: {
              title: "Supprimer me compte",
              description: "Supprimez votre compte.",
              url: "/",
            },
          });
        break;
      }
      default:
        console.log("ERREUR : AUCUN ROLE CONNU");
    }
  };



  return (
    <div className="account-container">
      <div className="account-title">
        <h2>Mon Compte </h2>
      </div>
      <div className="first-row-card">
      <LinkCategoryAccount props={userState.cardOne} />
      <LinkCategoryAccount props={userState.cardTwo} />
      </div>
      <div className="second-row-card">
      <LinkCategoryAccount props={userState.cardThree} />
      <LinkCategoryAccount props={userState.cardFour} />
      <LinkCategoryAccount props={userState.cardFive} />
      </div>
      
    </div>
  );
}
