import { useState } from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import BtnSecondary from "@/components/Global/Buttons/BtnSecondary";

// icons
import icon__scooter from "@/assets/img/icons/icon__scooter-white.svg";
import icon__profile from "@/assets/img/icons/icon__profile-black.svg";

// CSS
import "./Main.css";

function Main() {
  const [customerName, setCustomerName] = useState("Robin");

  return (
    <>
      <Nav />
      <DocumentTitle title="Ebike - Hyr scooter"></DocumentTitle>
      <div className="wrapper">
        <h1>Välkommen</h1>
        Goddag {customerName}. Klicka nedan för att hyra en scooter.
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
      </div>
    </>
  );
}

export default Main;
