import "./Navbar.css";
import logo from "../assets/image/Logo.svg";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navigation-bar">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/menu">menu</NavLink>
          </li>
          <li>
            <NavLink to="/booking" c>
              reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/order">order online</NavLink>
          </li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
