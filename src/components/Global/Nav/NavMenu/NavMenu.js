import React from "react";
import { NavLink } from "react-router-dom";

import menu__bg from "@/assets/img/menu__bg.svg";

function NavMenu({ handleLogout }) {
  return (
    <div className="nav__fullpage-outer-wrapper">
      <img src={menu__bg} alt="menu__bg" className="nav__bg" />
      <div className="nav__fullpage-inner-wrapper">
        <NavLink to="/" className="nav__link">
          Hem
        </NavLink>
        <NavLink to="/travels" className="nav__link">
          Mina Resor
        </NavLink>
        <NavLink to="/profile" className="nav__link">
          Profil
        </NavLink>
        <div className="nav__link" onClick={handleLogout}>
          Logga ut
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
