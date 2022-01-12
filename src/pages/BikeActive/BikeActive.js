import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DocumentTitle from "react-document-title";

// CSS
import "./BikeActive.css";
import { returnBike } from "@/pages/Rent/rentSlice";

// Components
import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import PredictedCost from "@/components/PredictedCost/PredictedCost";

// Icons
import icon__scooter from "@/assets/img/icons/icon__scooter-white.svg";

const BikeActive = () => {
  const root = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const stopRental = () => {
    // Todo: Implement call to api to end the current rental period.
    dispatch(returnBike());
  };

  return (
    <>
      <DocumentTitle title="Ebike - Aktiv Scooter"></DocumentTitle>
      <Nav />
      <div className="wrapper">
        <h1>Hyrtiden har startat för scooter id {root.rent.bike.id}</h1>
        <p>
          Vänligen notera att extra kostnader kan tillkomma om du parkerar
          scootern utanför acceptabla parkeringsplatser.
        </p>
        <PredictedCost />
        <BtnPrimary
          text={"Parkera scooter"}
          onClick={stopRental}
          icon={icon__scooter}
        ></BtnPrimary>
      </div>
    </>
  );
};

export default withRouter(BikeActive);
