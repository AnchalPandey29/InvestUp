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

    ///auth lgani h list aur details me
    //auth me investor k bnana h
  );
};

export default Startup;
