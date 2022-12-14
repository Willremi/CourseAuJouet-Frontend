import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyUser } from "../../api/backend/account";
import ModalAuth from "../../shared/components/modal-components/ModalAuth";
import NewProduct from "../homepage/NewProduct";
import Carousel from "../layouts/carousel/Carousel";

const RegisteredUser = () => {
  const token = useParams();
  useEffect(() => {
    verifyUser(token.confirmationCode)
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err));
  }, [token.confirmationCode]);

  return (
    <div className="container">
      <Carousel />
      <NewProduct />
      <ModalAuth />
    </div>
  );
};

export default RegisteredUser;
