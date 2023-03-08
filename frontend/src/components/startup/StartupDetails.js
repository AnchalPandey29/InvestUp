import { Rating } from "@mui/material";
import { Formik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const StartupDetails = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(4);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));

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

  const feedbackSubmit = async (formdata, {setSubmitting}) => {
    setSubmitting(true);
    const res = await fetch(`http://localhost:5000/feedback/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status)
    setSubmitting(false);
  }

  const displayDetails = () => {
    if (!loading && startupData) {
      return <div
        className="col card mx-auto m-3 p-2"
        style={{ width: "80%", height: "fit-content" }}
      >
        {/* startup  */}
        <div className="row justify-content-center">
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
            <div className="me-5">
              <img
                className="mx-auto"
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

        <hr />


        <div className="mt-5 p-5">
          <Rating
            name="Feedback"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Formik
            initialValues={{
              content: "",
              user: currentUser._id,
              startup: startupData._id
            }}
            onSubmit={feedbackSubmit}>

            {({ values, handleSubmit, handleChange, isSubmitting, }) => (

              <form onSubmit={handleSubmit}  >
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row ">
                  <div className="col-md-10">

                  
                  <MDBInput 
                   label="Write your feedback"
                   type="text"
                   id="feedback"
                   value={values.content}
                   onChange={handleChange}
                   name="name"
                  />

                  </div>

                  <div className="col-md-2">
                   <button className="btn " style={{backgroundColor:"#9c3353",color:"white"}}>Submit</button>
                  </div>

                </div>





              </form>
            )}
          </Formik>

        </div>

      </div>



    }
    else {
      return <div className='text-center'><img src="https://cdn.dribbble.com/users/3533804/screenshots/6666006/all-anim-gif.gif" style={{ width: "500px" }} alt="" />
        <h1 style={{ color: "#518f3d" }}>Loading...</h1></div>
    }
  };

  return displayDetails()
};

export default StartupDetails;
