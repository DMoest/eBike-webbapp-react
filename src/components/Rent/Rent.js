import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

// Components
import Nav from "../Global/Nav/Nav";

// CSS
import "./Rent.css";

// Img
import logo from "../../assets/img/ebike__logo-white.svg";
import RentForm from "../RentForm/RentForm";

function Rent() {
  return (
    <>
      <Nav />
      <DocumentTitle title="Hem"></DocumentTitle>

      <div className="home-hero__outer-wrapper">
        <div className="home__container">
          <div className="home-hero__nav-wrapper">
            <div className="hero__brand">
              <img src={logo} className="hero__logo" alt="Ebike logo" />
              Ebike
            </div>
          </div>
          <div className="home-hero__content-outer-wrapper">
            <div className="home-hero__content-inner-wrapper">
              <h3>
                Enter the serial number of the bike you want to rent below.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="home-content__outer-wrapper">
        <RentForm />
      </div>
    </>
  );
}

export default Rent;
