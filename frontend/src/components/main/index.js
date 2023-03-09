import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Services from "./Services";
import Footer from './Footer';
const Main = () => {
  return (
    <div className="module">
      <Header />
      <Outlet />
      <Services/>
      <Footer/>
      
    </div>
  );
};

export default Main;
