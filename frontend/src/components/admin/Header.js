import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAdminContext } from "../../context/AdminProvider";

const Header = () => {
  const { loggedin, setLoggedin, logout } = useAdminContext();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('investor')));
  const [currentStartup, setCurrentStartup] = useState(JSON.parse(sessionStorage.getItem('startup')));

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark  text-white">
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
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="/logo.png"
              height={55}
              alt=" Logo"
              loading="lazy"
            />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
            
              <li className="nav-item">

                {

                    (currentUser === null ) ?
                      (
                        <NavLink className="nav-link" to="/startup/dashboard" >
                          Dashboard
                        </NavLink>
                      ) :
                      (currentStartup === null) ?
                        (

                          <NavLink className="nav-link" to="/investor/dashboard">
                            Dashboard
                          </NavLink>
                        ) :
                        ''

                }

              </li>
              <li className="nav-item">
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/BlogBrowser">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="d-flex align-items-center">
         
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
