import "./Navbar.css";
import logo from "../assets/images/1.jpg";
import { MdOutlineLogin, MdEventAvailable } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h2 className="nav-heading">
            Local<span className="nav-heading nav-span">Events</span>
          </h2>
        </div>
        <div className="searchbar">
          <div className="searchbar-child">
            <div className="searchbar-left">
              <MdEventAvailable />
              <input type="search" placeholder="Search Events" />
            </div>
            <div>
              <FaLocationDot />
              <input type="search" placeholder="Choose Your Location" />
              <FaSearchLocation />
            </div>
          </div>
        </div>
        <div className="login-signup">
          <div className="user-data">
            <div className="user-name">
              <p className="user-para">Hi, Jai Malhotra</p>
              <p className="user-city">Jaipur</p>
            </div>
            <div>
              <img
                style={{ width: "60px", aspectRatio: "1", borderRadius: "50%" }}
                src={logo}
              />
            </div>
          </div>
          <div className="button-div">
            <button className="nav-button">
              <MdOutlineLogin /> SignIn
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
