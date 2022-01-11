import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

// Components
import Nav from "@/components/Global/Nav/Nav";
import BtnBack from "@/components/Global/BtnBack/BtnBack";

// CSS
import "./Rent.css";

// Img
import RentForm from "@/components/RentForm/RentForm";

function Rent() {
  return (
    <>
      <Nav />
      <DocumentTitle title="Hem"></DocumentTitle>
      <div className="wrapper">
        <BtnBack url="/" />
        <h1>Hyr scooter</h1>
        <p>Skriv in numret på scootern du vill hyra.</p>
        <RentForm />
      </div>
    </>
  );
}

export default Rent;
