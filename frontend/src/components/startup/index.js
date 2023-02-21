import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../main/Footer";
import Header from "../main/Header";


const Startup = () => {
  return (
    <div className="module">
      <Header />
      <Outlet />
     
      <Footer />
    </div>
  );
};

export default Startup;
