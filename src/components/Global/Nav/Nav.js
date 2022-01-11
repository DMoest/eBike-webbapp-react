import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/pages/Auth/authSlice";

// CSS
import "./Nav.css";

// Components
import NavMenu from "./NavMenu/NavMenu";

// Icons
import menu__icon_dark from "@/assets/img/icons/menu__icon-dark.svg";
import menu__icon_white from "@/assets/img/icons/menu__icon-white.svg";
import logo from "@/assets/img/logo__ebike.svg";

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
      {showNav ? <NavMenu handleLogout={handleLogout} /> : null}

      <div className="wrapper">
        <div className="nav__outer-wrapper">
          <div className="nav__brand">
            <img src={logo} alt="logo" class="nav__logo" />
            Ebike
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
