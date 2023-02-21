import React from "react";
import { Outlet } from "react-router-dom";
//import Footer from "./Footer";
//import Header from "./Header";


const Startup = () => {
  return (
    <div className="module">
      {/* <Header /> */}
      <Outlet />
     
      {/* <Footer /> */}
    </div>
  );
};

export default Startup;
