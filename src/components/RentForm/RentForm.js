import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// CSS
import "./RentForm.css";

// Components
import { rentBike, returnBike } from "@/pages/Rent/rentSlice";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";
import ErrorNotice from "@/components/Global/ErrorNotice/ErrorNotice";

import icon__scooter from "@/assets/img/icons/icon__scooter-white.svg";

const RentForm = () => {
  const [serialNumber, setSerialNumber] = useState(0);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[0-9]+$/;

    if (serialNumber === null) {
      setError("Var vänlig ange ett nummer");
      return;
    }

    if (!serialNumber.match(regex)) {
      setError("Var vänlig använd endast siffror (0-9)");
      return;
    }

    dispatch(rentBike());
    history.replace("/");
  };

  return (
    <>
      <form class="form__rent">
        <label>Serialnummer</label>
        <input
          class="input__rent"
          type="text"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          placeholder="Skriv in serialnummer"
        />
        <BtnPrimary
          text={"Hyr scooter"}
          onClick={handleSubmit}
          icon={icon__scooter}
        />
      </form>
      {error ? <ErrorNotice error={error} /> : null}
    </>
  );
};

export default RentForm;
