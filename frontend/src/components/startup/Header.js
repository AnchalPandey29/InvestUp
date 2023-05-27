import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";
import { useStartupContext } from "../../context/StartupProvider";
import './Header.css';

const Header = () => {

  const { logout }  = useStartupContext();
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark  text-white">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler "
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
              <NavLink className="nav-link hover-overlay " to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/aboutus" >
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/faq">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/blogbrowser" style={{color:"black"}}>
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hover-overlay " to="/main/newsbrowser" style={{color:"black"}}>
                News
              </NavLink>
            </li>
            
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <button onClick={logout} className="btn btn-outline-dark" style={{backgroundColor:"#9c3353", color:"white"}}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
    

    
  );
};

export default Header;
