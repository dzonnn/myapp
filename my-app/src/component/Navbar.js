import "./Navbar.css";
import logo from "../assets/image/Logo.svg";
import hamburger from "../assets/image/icon _hamburger menu.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <header className="navigation-bar">
      <div>
        <img src={logo} alt="" />
        <img
          src={hamburger}
          alt=""
          onClick={(e) => setShowNavbar(!showNavbar)}
        />
      </div>
      <nav className={showNavbar ? "display-nav" : "hide-nav"}>
        <ul>
          <li>
            <NavLink to="/" className="navlink">
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink">
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="navlink">
              menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" className="navlink">
              reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="navlink">
              order online
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="navlink">
              login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
