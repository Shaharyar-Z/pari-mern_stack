import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;
  const isAuthenticated = localStorage.getItem("token") !== null;

  const onLogout = () => {
    logout();
  };
  // console.log("AUTH ========== ", authContext);
  const authLinks = [
    <li className="nav-item">
      <Link to="/" className="nav-link active" aria-current="page">
        Home
      </Link>
    </li>,
    <li className="nav-item">
      <Link to="/account" className="nav-link">
        Account
      </Link>
    </li>,
    <li className="nav-item">
      <Link onClick={onLogout} to="/login" className="nav-link">
        <i className="fas fa-sign-out-alt"></i>
        <span className="">Logout</span>
      </Link>
    </li>,
  ];

  const guestLinks = [
    <li className="nav-item">
      <Link to="/signup" className="nav-link">
        Signup
      </Link>
    </li>,
    <li className="nav-item">
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </li>,
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-tranparent">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to="/">
            PARI
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
            <ul className="navbar-nav ms-5">
              {isAuthenticated ? authLinks : guestLinks}
              {/* <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/account" className="nav-link">
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
