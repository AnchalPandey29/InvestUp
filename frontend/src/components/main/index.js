import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Services from "./Services";

const Main = () => {
  return (
    <div className="module">
      <Header />
      <Outlet />
      <Services/>
      
      
    </div>
  );
};

export default Main;
