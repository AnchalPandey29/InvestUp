import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../../config";

const StartupList = () => {
  const [startupList, setStartupList] = useState([]);

  const url = app_config.apiurl;

  const fetchData = async () => {
    const res = await fetch(url + "/startup/getall");
    const data = await res.json();
    console.log(data);
    setStartupList(data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {startupList.map((startup) => (
        <div>
          <div
            className="row card gx-5 mx-auto m-3"
            style={{ width: "70%", height: "fit-content" }}
          >
            <div className="col-md-6 mb-4">
              {/* <div
              className="bg-image hover-overlay ripple shadow-2-strong rounded-5 "
              data-mdb-ripple-color="light"
            >
              <img
                src={""}
                className="img-fluid mx-auto"
                style={{ maxHeight: "150px", display: "block" }}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </a>
            </div> */}
            </div>
            <div className="col-md-6 mb-4">
              <h4>
                <strong> {startup.name} </strong>
              </h4>
              <p className="text-muted">{startup.email}</p>
              <Link
                type="button"
                className="btn"
                to={"/main/startupdetails/"+startup._id}
                style={{ backgroundColor: "#9c3353", color: "white" }}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StartupList;
