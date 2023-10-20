import { Link, NavLink } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import "../components/styles/navbar.css";


const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <div className="container nav__container">
        <h1 className="navbar-logo">My Profile</h1>
        <div className="Navright">
          <ul className="nav__links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">Contact</NavLink>
            </li>
            
            </ul>
          </div>
        </div>
        
     
    </nav>
  );
};

export default Navbar;
