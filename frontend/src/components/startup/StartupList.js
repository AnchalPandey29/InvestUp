import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../../config";
import { Formik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";

const StartupList = () => {
  const [startupList, setStartupList] = useState([]);

  const url = app_config.apiurl;

  const fetchData = async () => {
    const res = await fetch(url + "/startup/getall");
    const data = await res.json();
    console.log(data);
    setStartupList( data.result.filter((user) => ( user.role === 'startup' )) );
    // setStartupList(data.result);
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
              <h4>
                <strong> {startup.name} </strong>
              </h4>
              <p className="text-muted">{startup.semail}</p>
              <Link
                type="button"
                className="btn"
                to={"/startup/startupdetails/"+startup._id}
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
