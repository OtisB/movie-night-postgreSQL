import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Logo from "../img/Logo.png";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">

          <Link to='/main'><img src={Logo} alt="Movie Night" width="50" /></Link>

        </div>
        <ul className="nav-link-container">
          <NavLink to="/genre/all">
            <li>All</li>
          </NavLink>
          <NavLink to="/genre/action">
            <li>Action</li>
          </NavLink>
          <NavLink to="/genre/drama">
            <li>Drama</li>
          </NavLink>
          <NavLink to="/genre/comedy">
            <li>Comedy</li>
          </NavLink>
          <NavLink to="/genre/horror">
            <li>Horror</li>
          </NavLink>
          <NavLink to="/genre/fantasie">
            <li>Fantasy</li>
          </NavLink>
          <NavLink to="/genre/thriller">
            <li>Thriller</li>
          </NavLink>
          <NavLink to="/genre/scifi">
            <li>Scifi</li>
          </NavLink>
          <NavLink to="/genre/trash">
            <li>Trash</li>
          </NavLink>
        </ul>
        <div className="login">
          <NavLink to="/">Log out</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
