import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// CSS
import "./RentForm.css";
import { rentBike, returnBike } from "@/pages/Rent/rentSlice";
import BtnPrimary from "@/components/Global/Buttons/BtnPrimary";

import icon__scooter from "@/assets/img/icons/icon__scooter-white.svg";

const RentForm = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(rentBike());
    history.replace("/");
  };

  return (
    <form class="form__rent" onSubmit={handleSubmit}>
      <label>Serialnummer</label>
      <input
        class="input__rent "
        type="text"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
      />
      <BtnPrimary
        text={"Hyr cykel"}
        onClick={handleSubmit}
        icon={icon__scooter}
      />
    </form>
  );
};

export default RentForm;
