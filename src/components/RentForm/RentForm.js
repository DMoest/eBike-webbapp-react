import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// CSS
import "./RentForm.css";
import { rentBike, returnBike } from "../Rent/rentSlice";
import BtnPrimary from "../Global/Buttons/BtnPrimary";

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
      <BtnPrimary text={"Hyr cykel"} onClick={handleSubmit} />
    </form>
  );
};

export default RentForm;
