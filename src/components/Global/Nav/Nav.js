import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/pages/Auth/authSlice";

import "./Nav.css";

import menu__icon_dark from "@/assets/img/icons/menu__icon-dark.svg";
import menu__icon_white from "@/assets/img/icons/menu__icon-white.svg";
import logo from "@/assets/img/ebike__logo.svg";

import menu__bg from "@/assets/img/menu__bg.svg";

function Nav() {
  const [showNav, setShowNav] = useState(false);
  const onClick = () => setShowNav(!showNav);

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logout");
    dispatch(logout());
  };

  return (
    <>
      {showNav ? (
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
      ) : null}

      <div className="wrapper">
        <div className="nav__outer-wrapper">
          <div className="nav__brand">
            <img src={logo} alt="logo" class="nav__logo" />
          </div>
          <div className="nav__menu" onClick={onClick}>
            {showNav ? (
              <img
                src={menu__icon_white}
                alt="Menu icon"
                className="nav__icon"
              />
            ) : (
              <img
                src={menu__icon_dark}
                alt="Menu icon"
                className="nav__icon"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
