import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// CSS
import "./RentForm.css";
import { rentBike, returnBike } from "../Rent/rentSlice";

const RentForm = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(rentBike());
    history.replace("/");
  };

  return (
    <>
      <form class="rent-form" onSubmit={handleSubmit}>
        <label>Serial-number:</label>
        <input
          class="input-full-width"
          type="text"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
        <button class="btn-full-width" onClick={handleSubmit}>
          Rent
        </button>
      </form>
    </>
  );
};

export default RentForm;
