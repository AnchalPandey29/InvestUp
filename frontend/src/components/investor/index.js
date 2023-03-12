import React from "react";
import { Outlet } from "react-router-dom";
import DashboardContainer from "./DashboardContainer";

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
