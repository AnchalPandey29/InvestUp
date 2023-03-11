import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../../config";
import { Formik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";

const StartupList = () => {
  const [startupList, setStartupList] = useState([]);

  const url = app_config.apiurl;
  const placeholder = 'https://via.placeholder.com/640x400.png/a59090/000000?Text=640x400';

  const fetchData = async () => {
    const res = await fetch(url + "/startup/getall");
    const data = await res.json();
    console.log(data);
    setStartupList(data.result.filter((user) => user.role === "startup"));
    // setStartupList(data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayList = () => {
    return startupList.map((startup) => (
      <div className="card bg-warning mb-3">
        <div className="row gx-5">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={startup.startupimage? (url + "/" + startup.startupimage): placeholder}
              alt=""
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h4>
                <strong> {startup.name} </strong>
              </h4>
              <p className="text-muted">{startup.email}</p>
              <Link
                type="button"
                className="btn"
                to={"/main/startupdetails/" + startup._id}
                style={{ backgroundColor: "#9c3353", color: "white" }}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <header>
        <h1>Startup List</h1>
      </header>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-9">{displayList()}</div>
      </div>
    </div>
  );
};

export default StartupList;
