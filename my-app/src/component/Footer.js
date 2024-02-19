import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="social-media-links">
        <li>
          <FaFacebook className="social-logo" />
        </li>
        <li>
          <FaInstagram className="social-logo" />
        </li>
        <li>
          <FaTiktok className="social-logo" />
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
