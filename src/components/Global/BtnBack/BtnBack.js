import { NavLink } from "react-router-dom";

import "./BtnBack.css";

function BtnBack({ url }) {
  return (
    <NavLink className="btn__back" to={url}>
      Tillbaka
    </NavLink>
  );
}

export default BtnBack;
