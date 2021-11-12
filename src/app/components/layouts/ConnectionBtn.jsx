import React from "react";
import { Link } from "react-router-dom";
import { URL_LOGIN, URL_REGISTER } from "./../../shared/constants/urls/urlConstants";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLogged, signOut } from "./../../shared/redux-store/authenticationSlice";

const ConnectionBtn = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  if (isLogged)
    return (
      <button
        className="ml-8 btn btn-green"
        onClick={() => dispatch(signOut())}
      >
        Sign out
      </button>
    );
  else
    return (
      <>
        <Link to={URL_LOGIN}>
          <div className="link">Sign in</div>
        </Link>
        <Link to={URL_REGISTER}>
          <button className="ml-8 btn btn-green">Sign up</button>
        </Link>
      </>
    );
};

export default ConnectionBtn;
