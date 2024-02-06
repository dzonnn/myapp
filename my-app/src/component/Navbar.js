import "./Navbar.css";
import logo from "../assets/image/Logo.svg";
import hamburger from "../assets/image/icon _hamburger menu.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

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
      <nav>
        <ul className={showNavbar ? "display-flex" : "display-none"}>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/">menu</NavLink>
          </li>
          <li>
            <NavLink to="/booking">reservations</NavLink>
          </li>
          <li>
            <NavLink to="/">order online</NavLink>
          </li>
          <li>
            <NavLink to="/">login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
