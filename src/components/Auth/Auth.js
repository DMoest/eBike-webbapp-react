import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "./authSlice";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import BtnSecondary from "@/components/Global/Buttons/BtnSecondary";

// CSS
import "./Auth.css";

// import { FaGithub } from "react-icons/fa";

// Context

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(login());
  };
  const handleRegister = () => {
    dispatch(register());
  };

  return (
    <>
      <DocumentTitle title="Auth"></DocumentTitle>
      <Nav />
      <div className="wrapper">
        <h1>Autentisering</h1>
        <p>
          Logga in eller registrera dig genom att klicka på knapparna nedan.
        </p>
        <div className="home__btn-wrapper">
          <BtnPrimary text={"Logga in"} onClick={handleLogin} />
          {/* <div className="home__btn-spacer">
            <BtnSecondary text={"Registrera dig"} onClick={handleRegister} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Auth;
