import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const StartupDetails = () => {
  const { id } = useParams();

  // console.log(id);

  const [startupData, setStartupData] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = app_config.apiurl;

  const fetchStartupById = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/startup/getbyid/" + id);
    const data = await res.json();
    console.log(data);
    setStartupData(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchStartupById();
  }, []);

  const displayDetails = () => {
    if (!loading && startupData) {
      return<div
          className="col card mx-auto m-3 p-2"
          style={{ width: "80%", height: "fit-content" }}
        >
          {/* startup  */}
          <div className="text-center row">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="/logo.png"
              alt="avatar"
              style={{ width: 150, color: "" }}
            />
          </div>
          <div className="text-center row">
            <h5>Eleva</h5>
            <div className="d-flex flex-row justify-content-center">
              <p className="me-4">
                {" "}
                <i class="fas fa-mail-bulk fa-lg  "></i> &nbsp; {startupData.email}
              </p>

              <p>
                {" "}
                <i class="fab fa-linkedin fa-lg  "></i> &nbsp; {startupData.name}
              </p>
            </div>

            <p>
              <i class="fas fa-quote-left    "></i>&nbsp; We are the biggest
              healthcare company, providing medicinal and health services to the
              world.
            </p>
          </div>

          <div className="row d-flex flex-row justify-content-center mt-5">
            {/* founder  */}
            <div className="col-lg-6  d-flex flex-row justify-content-center">
              <div className="me-5 ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt=""
                  style={{ width: "100px", borderRadius: "10px" }}
                />
              </div>
              <div>
                <h5>Olla Heden</h5>
                <p>
                  Founder and CEO of <strong>Eleva</strong>
                </p>
                <p className="me-4">
                  {" "}
                  <i class="fas fa-mail-bulk fa-lg  "></i> &nbsp;
                  ollaheden@gmail.com
                </p>
              </div>
            </div>
            {/* product  */}
            <div
              className="col-lg-6 d-flex flex-row justify-content-center "
              style={{ maxWidth: "400px" }}
            >
              <div className="me-5 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbuMqNab_lb7R8vMfZ9r2lA0UVHL7lFH7nA&usqp=CAU"
                  alt=""
                  style={{ width: "100px", borderRadius: "10px" }}
                />
              </div>

              <div>
                <h5>Dialysis Machine</h5>
                <p>
                  Designed and Manufacturing <br />
                  About 5 lakhs machine were sold world wide{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
    
  }
    else {
      return <h1>Loading...</h1>
    }
  };

  return displayDetails()
};

export default StartupDetails;