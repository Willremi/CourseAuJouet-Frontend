import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyUser } from "../../api/backend/account";
import ModalAuth from "../../shared/components/modal-components/modal";

const RegisteredUser = () => {
  
  const token = useParams()
  useEffect(() => {
    verifyUser(token.confirmationCode)
  .then(res => console.log(res.data.message))
  .catch(err => console.log(err));
  
  }, [token.confirmationCode])
  
  
  return (
    <div className="container">
     Ceci est un modal de confirmation 
     <ModalAuth />
    </div> 
  );
};

export default RegisteredUser;