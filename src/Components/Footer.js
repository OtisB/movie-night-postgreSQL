import "./Footer.css";
import { Link } from "react-router-dom";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import YouTube from "../img/youtube.png";

function Footer() {
  return (
    <nav className="footer-navbar">
      <ul className="nav-link-container">
        <li>
          {/* <Link to="/inprint">Imprint</Link> */}
          <Link to="/error">Imprint</Link>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <Link to="/error">Contact</Link>
        </li>
        <li>
          {/* <Link to="/aboutus">About</Link> */}
          <Link to="/error">About</Link>
        </li>
        <li>
          {/* <Link to="/help">Help</Link> */}
          <Link to="/error">Help</Link>
        </li>
      </ul>
      <ul className="nav-social-container">
        <li>
          <a href={"https://m.facebook.com/"} target="_blank" rel="noreferrer noopener">
            <img src={Facebook} alt="www.flaticon.com" width="30" />
          </a>
        </li>
        <li>
          <a href={"https://twitter.com/"} target="_blank" rel="noreferrer noopener">
            <img src={Twitter} alt="www.flaticon.com" width="30" />
          </a>
        </li>
        <li>
          <a href={"https://www.linkedin.com/"} target="_blank" rel="noreferrer noopener">
            <img src={LinkedIn} alt="www.flaticon.com" width="30" />
          </a>
        </li>
        <li>
          <a href={"https://www.instagram.com/"} target="_blank" rel="noreferrer noopener">
            <img src={Instagram} alt="www.flaticon.com" width="30" />
          </a>
        </li>
        <li>
          <a href={"https://www.youtube.com/"} target="_blank" rel="noreferrer noopener">
            <img src={YouTube} alt="www.flaticon.com" width="30" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
