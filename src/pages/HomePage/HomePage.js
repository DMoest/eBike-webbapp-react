import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

// components
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import BtnSecondary from "@/components/Global/Buttons/BtnSecondary";
import Nav from "@/components/Global/Nav/Nav";

// CSS
import "./HomePage.css";

// Img
import heroImg from "@/assets/img/home__ill.svg";

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
            <p>Registrera dig, hoppa på scootern och kör igång</p>
            <div className="home__btn-wrapper">
              <Link to="/auth">
                <BtnPrimary text={"Kör igång"} />
              </Link>
              <div className="home__btn-spacer"></div>
            </div>
          </div>
        </div>
        <div className="home__container"></div>
      </div>
    </div>
  );
}

export default HomePage;
