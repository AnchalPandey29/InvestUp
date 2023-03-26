import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const [currentStartup, setCurrentStartup] = useState(JSON.parse(sessionStorage.getItem('startup')));
  const [currentInvestor, setCurrentInvestor] = useState(JSON.parse(sessionStorage.getItem('investor')));



  return (
    <nav className="navbar navbar-expand-md navbar-dark  text-white">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="/main/home">
            <img
              src="\logo.png"
              height={55}
              alt="InvestUp logo"
              loading="lazy"
            />

          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/home" style={{color:"black"}}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/aboutus" style={{color:"black"}}>
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/contact" style={{color:"black"}}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/faq" style={{color:"black"}}>
                FAQs
              </NavLink>
            </li>
           
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-2">
              {
                (currentUser === null && currentStartup === null && currentInvestor === null) ?
                  (<NavLink className="btn btn-outline-dark" to="/main/signup" style={{ backgroundColor: "#9c3353", color: "white" }}>
                    Create Account
                  </NavLink>) : ''
              }

            </li>
            <li className="nav-item">

              {
                (currentUser === null && currentStartup === null && currentInvestor === null) ?
                  (

                    <NavLink className="btn btn-outline-dark" to="/main/login" style={{ backgroundColor: "#9c3353", color: "white" }}>
                      Signin
                    </NavLink>
                  ) :
                  
                  (currentUser === null &&  currentInvestor === null) ?
                  (

                    <NavLink className="btn btn-outline-dark" to="/startup/dashboard" style={{ backgroundColor: "#9c3353", color: "white" }}>
                  Your Dashboard
                </NavLink>
                  ) :
                  (currentUser === null &&  currentStartup === null) ?
                  (

                    <NavLink className="btn btn-outline-dark" to="/investor/dashboard" style={{ backgroundColor: "#9c3353", color: "white" }}>
                  Your Dashboard
                </NavLink>
                  ) :
                  ''
                  
              }

            </li>
          </ul>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>



  );
};

export default Header;
