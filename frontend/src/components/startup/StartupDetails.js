import { Rating } from "@mui/material";
import { Formik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const StartupDetails = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(4);
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));
  const [currentInvestor, setCurrentInvestor] = useState(JSON.parse(sessionStorage.getItem('investor')));
  const [feedbackList, setFeedbackList] = useState([]);
  const navigate = useNavigate();;
  // console.log(id);

  const [startupData, setStartupData] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = app_config.apiurl;

  const fetchStartupById = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/startup/getbyid/" + id);
    const data = await res.json();
    console.log(data);
    fetchStartupFeedbacks(data.result._id);
    setStartupData(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchStartupById();
  }, []);

  const feedbackSubmit = async (formdata, {setSubmitting}) => {
    if(!currentUser){
      // error alert
      console.log('startup login needed');
      return;
    }
    formdata.user = currentUser._id;
    formdata.rating = rating;
    setSubmitting(true);
    const res = await fetch(`http://localhost:5000/feedback/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status)
    setSubmitting(false);
    fetchStartupFeedbacks(startupData._id);
  }

  const fetchStartupFeedbacks = async (id) => {
    const res = await fetch(`http://localhost:5000/feedback/getbystartup/`+id);
    const data = (await res.json()).result;
    console.log(data);
    setFeedbackList(data);
  }

  const displayFeedbacks = () => {
      return feedbackList.map((feedback) => (
        <div className="border rounded card m-1 ps-5">
          
          <h5 className="pt-2">{feedback.user.name}</h5>
          <Rating
            value={feedback.rating}
            readOnly
          />
          <p>{feedback.content}</p>
      </div>
      ))
  }

  const openChat = () => {
    if(currentInvestor.role!== 'investor'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You can not chat with startup!',
      })
    }else{
      navigate('/investor/chat/' + startupData._id);
    }
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

        
        <center>
        <button className="btn m-5" style={{backgroundColor:"#9c3353",color:"white",width:"fit-content"}} onClick={openChat}>Start Chatting</button>
        </center>
        <hr />
        <div style={{backgroundColor:"#f0efef"}}>
        <h2 className="text-center pt-5">Write your reviews</h2>

        <div className="mt-2 p-5">

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
                   value={values.content}
                   onChange={handleChange}
                   name="content"
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
        {displayFeedbacks()}

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