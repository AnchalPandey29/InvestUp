import React from "react";
import { Outlet } from "react-router-dom";
import DashboardContainer from "./DashboardContainer";
import Header from "./Header";

const Startup = () => {
  return (
    <div className="module">
      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </div>
  );
};

export default Startup;
