import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="vh-100" style={{marginTop: 200}}>
      <img className="d-flex m-auto img-fluid" src="404.jpg" alt="" />
      <div className="text-center">
        <button
          onClick={(e) => navigate("/main/home")}
          to="/main/home"
          className="btn btn-outline-primary my-5"
          style={{ textTransform: "capitalize" }}
        >
          Go To Hompage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
