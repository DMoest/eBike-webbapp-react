import { useState, useEffect } from "react";
import DocumentTitle from "react-document-title";

// Components
import Nav from "@/components/Global/Nav/Nav";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import BtnSecondary from "@/components/Global/Buttons/BtnSecondary";
import Map from "@/components/Global/Map/Map";
import ErrorNotice from "@/components/Global/ErrorNotice/ErrorNotice";
import ErrorBoundary from "@/components/Global/ErrorBoundary/ErrorBoundary";

// CSS & Assets
import "./Bike.css";
import icon__battery from "@/assets/img/icons/icon__battery.svg";

import Api from "@/helper/api";

function Bike({ bikeId }) {
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
      <Nav />
      <DocumentTitle title="Ebike - Hyr"></DocumentTitle>
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
          {bikeLoaded ? (
            <div className="bike__details-wrapper">
              <div className="bike__name">
                Ebike ID: {bikeData._id || "Ingen data hittad"}
              </div>
              <div className="bike__details">
                <img src={icon__battery} alt="battery" class="bike__icon" />
                {bikeData.battery || "Ingen data hittad"}%
              </div>
            </div>
          ) : null}
          {error ? <ErrorNotice error={error} /> : null}
          <div className="bike__btn-wrapper">
            <BtnPrimary text={"Hyr scooter"} />
            <BtnSecondary text={"Avbryt"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bike;
