import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

// Components
import Nav from "@/components/Global/Nav/Nav";

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
        <h1>Hyr cykel</h1>
        <p>Skriv in serialnumret på cykeln du vill hyra.</p>
        <RentForm />
      </div>
    </>
  );
}

export default Rent;
