import React from "react";
import { Link, useParams } from "react-router-dom";
import { verifyUser } from "../../api/backend/account";

const SubcribedUser = () => {
  
  const token = useParams()
  
  verifyUser(token.confirmationCode);
  
  
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <Link to={"/login"}>
        Please Login
      </Link>
    </div>
  );
};

export default SubcribedUser;