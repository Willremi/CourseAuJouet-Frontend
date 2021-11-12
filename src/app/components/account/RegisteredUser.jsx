import React from "react";
import { useParams } from "react-router-dom";
import { verifyUser } from "../../api/backend/account";

const RegisteredUser = () => {
  
  const token = useParams()
  
  verifyUser(token.confirmationCode)
  .then(res => console.log(res.data.message))
  .catch(err => console.log(err));
  
  
  return (
    <div className="container">
      Reussie !
    </div> 
  );
};

export default RegisteredUser;