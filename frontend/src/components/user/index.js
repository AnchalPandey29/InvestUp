import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const User = () => {
  return (
    <div className="module">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default User;
