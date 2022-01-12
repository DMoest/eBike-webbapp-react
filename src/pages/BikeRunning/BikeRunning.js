import { useState, useEffect } from "react";

import DocumentTitle from "react-document-title";

// Components
import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import BtnSecondary from "@/components/Global/Buttons/BtnSecondary";
import Map from "@/components/Global/Map/Map";
import ErrorNotice from "@/components/Global/ErrorNotice/ErrorNotice";

// CSS
import "./BikeRunning.css";

// API
import Api from "@/helper/api";

function BikeRunning({ bikeId }) {
  const [bikeData, setBikeData] = useState();
  const [bikeLoaded, setBikeLoaded] = useState(false);
  const [error, setError] = useState();

  const api = new Api();

  useEffect(() => {
    try {
      api.getBikeData(bikeId || 1).then((res) => {
        setBikeData(res.data);
        setBikeLoaded(true);
      });
    } catch (err) {
      setError(err);
    }
  }, []);

  return (
    <>
      <DocumentTitle title="Ebike - Aktiv Scooter"></DocumentTitle>
      <Nav />
      {bikeLoaded ? (
        <Map bikePosition={[bikeData.latitude, bikeData.longitude]} />
      ) : null}

      <div className="bottom-content__wrapper">
        <div className="bike__info-wrapper">
          <h3>Hyr scooter</h3>
          <p>
            Lås upp scootern genom att klicka på knappen nedan. Uthyrningstiden
            startar direkt efter lyckad upplåsning.
          </p>
          <div className="bike__details-wrapper">
            <div className="bike__name"></div>
            <div className="bike__details"></div>
          </div>
          <div className="bike__btn-wrapper">
            <BtnPrimary text={"Hyr scooter"} />
            <BtnSecondary text={"Avbryt"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BikeRunning;
