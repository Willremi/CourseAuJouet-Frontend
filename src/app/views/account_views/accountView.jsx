import React, { useState, useEffect } from "react";
import LinkCategoryAccount from "../../shared/components/account-component/LinkCategoryAccount";
import {
  hasRole,
  isAuthenticated,
} from "../../shared/services/accountServices";
import { getToken, getPayloadToken } from "../../shared/services/tokenServices";
import "./AccountView.css";

export default function AccountView() {

    const payload = getPayloadToken()
    const roles = payload.role[0].role_name.split(",")
 
  const [userState, setUserState] = useState({
    cardAccount: {
      title: "aaa",
      description: "",
      url: "",
    },
    cardOrder: {
      title: "",
      description: "",
      url: "",
    },
    cardAdress: {
      title: "",
      description: "",
      url: "",
    },
    cardPayment: {
      title: "",
      description: "",
      url: "",
    },
    cardDelete: {
      title: "",
      description: "",
      url: "",
    },
  });

  useEffect(() => {
    getPropsByRole();
  }, []);

  const getPropsByRole = () => {
  
    console.log("le role :", roles[0])
    switch (roles) {
      case roles[0]==="CUSTOMER": {
        setUserState({
          cardAccount: {
            title: "Mon profil",
            description: "Modifiez les informations de votre profil.",
            url: "/",
          },
          cardOrder: {
            title: "Mes commandes",
            description: "Suivre, retourner ou acheter à nouveau.",
            url: "/",
          },
          cardAdress: {
            title: "Addresse",
            description:
              "Modifiez les adresses et les préférences de livraison.",
            url: "/",
          },
          cardPayment: {
            title: "Vos Paiements",
            description: "Archivez ou telechargez vos factures.",
            url: "/",
          },
          cardDelete: {
            title: "Supprimer me compte",
            description: "Supprimez votre compte.",
            url: "/",
          },
        });

        break;
      }

      case roles[0]==="MANAGER": {

        setUserState({
            cardAccount: {
              title: "Ma boutique.",
              description: "Modifiez les informations de votre boutique.",
              url: "/",
            },
            cardOrder: {
              title: "Mes commandes",
              description: "Suivre les dernières commandes effectuées.",
              url: "/",
            },
            cardAdress: {
              title: "Gestion des produits",
              description:
                "Ajoutez, modifiez et supprimez vos produits.",
              url: "/",
            },
            cardPayment: {
              title: "Null",
              description: "Null.",
              url: "null",
            },
            cardDelete: {
              title: "Supprimer me compte",
              description: "Supprimez votre compte.",
              url: "/",
            },
          });
  
        break;
      }

      case roles[0]==="ADMIN": {

        setUserState({
            cardAccount: {
              title: "Mon profil",
              description: "Modifiez les informations de votre profil.",
              url: "/",
            },
            cardOrder: {
              title: "Commandes",
              description: "Suivre les commandes passées sur le site.",
              url: "/",
            },
            cardAdress: {
              title: "Gestion des utilisateurs",
              description:
                "Voir la liste des utilisateurs inscrits sur le site.",
              url: "/",
            },
            cardPayment: {
              title: "Gestion des produits",
              description: "Gérer les produits disponible sur le site",
              url: "/",
            },
            cardDelete: {
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
      <LinkCategoryAccount props={userState.cardAccount} />
      <LinkCategoryAccount props={userState.cardOrder} />
      </div>
      <div className="second-row-card">
      <LinkCategoryAccount props={userState.cardAdress} />
      <LinkCategoryAccount props={userState.cardPayment} />
      <LinkCategoryAccount props={userState.cardDelete} />
      </div>
      
    </div>
  );
}
