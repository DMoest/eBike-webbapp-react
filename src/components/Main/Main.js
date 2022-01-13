import React from "react";
import { useState } from "react";

import DocumentTitle from "react-document-title";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Auth/authSlice";

import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import BtnSecondary from "@/components/Global/Buttons/BtnSecondary";

// icons
import icon__scooter from "@/assets/img/icons/icon__scooter-white.svg";
import icon__profile from "@/assets/img/icons/icon__profile-black.svg";

// CSS
import "./Main.css";

function Main(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cookies } = props;
  const [customerName, setCustomerName] = useState("Username");

  const handleLogout = () => {
    cookies.remove("XSRF-TOKEN");
    //dispatch(logout());
  };

  function handleRental() {
    console.log("Navigating ro rent!");
    history.push("/rent");
  }

  return (
    <>
      <Nav />
      <DocumentTitle title="Ebike - Hyr scooter"></DocumentTitle>
      <div className="wrapper">
        <h1>Välkommen</h1>
        <p>
          Goddag {customerName}. Lås upp scootern genom att klicka på knappen
          nedan och skriv in dess nummer. Uthyrningstiden börjar direkt efter
          lyckad upplåsning.
        </p>
        <div className="home__btn-wrapper">
          <Link to="/rent">
            <BtnPrimary text={"Hyr scooter"} icon={icon__scooter} />
          </Link>
          <div className="home__btn-spacer">
            <Link to="/profile">
              <BtnSecondary text={"Min profil"} icon={icon__profile} />
            </Link>
          </div>
        </div>
        <BtnPrimary text={"Logga ut"} onClick={handleLogout} />
      </div>
    </>
  );
}

export default Main;
