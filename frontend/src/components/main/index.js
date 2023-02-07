import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Main = () => {
  return (
    <div className="module">
      <Header />
      <Outlet />
      <Services/>
      <Testimonial/>

      <Footer />
    </div>
  );
};

export default Main;
