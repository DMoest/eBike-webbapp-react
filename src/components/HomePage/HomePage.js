import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

// components
import BtnPrimary from "../Global/Buttons/BtnPrimary";
import BtnSecondary from "../Global/Buttons/BtnSecondary";
import Nav from "../Global/Nav/Nav";

// CSS
import "./HomePage.css";

// Img
import heroImg from "../../assets/img/home__ill-cordova.png";

function HomePage() {
  return (
    <div className="home__bg">
      <Nav />
      <div className="home-hero__outer-wrapper">
        <DocumentTitle title="Hem"></DocumentTitle>
        <div className="home__wrapper">
          <img src={heroImg} alt="hero" className="home__img" />
          <div className="wrapper">
            <h1>Den ultimata elscooter-simulatorn</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="home__btn-wrapper">
              <Link to="/auth">
                <BtnPrimary text={"Logga in"} />
              </Link>
              <div className="home__btn-spacer">
                <Link to="/auth">
                  <BtnSecondary text={"Registrera dig"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home__container"></div>
      </div>
    </div>
  );
}

export default HomePage;
