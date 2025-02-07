import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../../../styles/Header.css";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2713/2713484.png"
            alt="RedReserve Logo"
            className="navbar-logo"
          />
          <span>FarmTech INnovations</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user && (
              <li className="nav-item mx-3">
                <p className="nav-link">
                  <BiUserCircle /> Welcome{" "}
                  {user?.name || user?.hospitalName || user?.organisationName}
                  &nbsp;
                  <span className="badge bg-secondary">{user?.role}</span>
                </p>
              </li>
            )}
            {(location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname === "/hospital") && (
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/analytics">
                  Analytics
                </Link>
              </li>
            )}
            {!(location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname === "/hospital") && (
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            )}
            {user?.role === "donar" && (
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/home">
                  Farmer's Hub
                </Link>
              </li>
            )}
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/aboutus">
                Analytics
              </Link>
            </li>
            {user?.role === "donar" && (
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/volunteer">
                  Get Notified
                </Link>
              </li>
            )}
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            {user ? (
              <li className="nav-item mx-3">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <button className="btn btn-danger" onClick={handleLogin}>
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
