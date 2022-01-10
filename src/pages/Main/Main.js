import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";

// CSS
import "./Main.css";

// Img
// import logo from "../../assets/img/ebike__logo-white.svg";

function Main() {
  return (
    <>
      <Nav />
      <DocumentTitle title="Hyr"></DocumentTitle>
      <div className="wrapper">
        <h1>Hyr cykel</h1>
        Välkommen. Klicka på knappen nedan för att...
        <div className="home__btn-wrapper">
          <Link to="/rent">
            <BtnPrimary text={"Hyr cykel"} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
