import DocumentTitle from "react-document-title";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import logo from "@/assets/img/ebike__logo-white.svg";
import PredictedCost from "@/components/PredictedCost/PredictedCost";
// CSS
import "./BikeActive.css";
import { returnBike } from "@/pages/Rent/rentSlice";

import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
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
