import { Formik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Signin = () => {
  // signin schema validation
  const SigninSchema = Yup.object().shape({
   

    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
    ///////////////////////////////
  const navigate = useNavigate();
  

  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);
    setSubmitting(true);
    const res = await fetch(`http://localhost:5000/startup/auth`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

   

    console.log(res.status)
    setSubmitting(false);

    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: 'Success',
        text: 'You have logged in successfully'
      })
      const data = await res.json();
      if(data.result.role==='startup'){
        console.log(data);
        sessionStorage.setItem('startup', JSON.stringify(data.result));
        navigate('/startup/profile');
      }
      else if (data.result.role==='investor'){
        console.log(data);
        sessionStorage.setItem('investor', JSON.stringify(data.result));
        navigate('/investor/profile');
      }
    }else{
      Swal.fire({
        icon: "error",
        title: 'Error',
        text: 'Please Enter right credentials'
      })
    }
  }


  return (
    <div style={{ height: "90vh" }}>
        <div className="row" style={{ height: "40vh",  backgroundColor: "#9c3353" }}></div>
      <div className="row mx-auto" style={{marginTop:"-200px",width:"fit-content"}} >
        <div className="card pt-4" style={{ height: "fit-content", padding: "40px" }}>
          <div className="card-body">
            <p className="text-center h4">Login Form</p>
            <hr />

            <Formik initialValues={{ email: "", password: "" }} 
            validationSchema={SigninSchema}//Validation Schema
            onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting,errors, touched}) => (


                <form onSubmit={handleSubmit}>


                  {/* Email input */}
                  <div className="form-outline mb-4">
                  <MDBInput label='Email' type="email" value={values.email} onChange={handleChange} name="email" />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                  <MDBInput label='Password' type="password" value={values.password} onChange={handleChange} name="password" />
                  {errors.password && touched.password ? <div>{errors.password}</div> : null}
                  </div>
                  <button disabled={isSubmitting} type="submit" className="btn btn-block mb-4" style={{ backgroundColor: "#9c3353", color: "#fffefe" }}>
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        :
                        'Submit'
                    }
                  </button>

                  <div className="row">
                    <div class="d-flex align-items-center justify-content-center">

                      <a href="/main/forgot">Forgot password?</a>
                    </div>


                    <div class=" d-flex align-items-center justify-content-center">

                      <a href="/main/signup">New User? Create Account</a>
                    </div>

                  </div>


                  <p className="text-center">or</p>


                  <div className="d-flex align-items-center justify-content-center">

                    <button href="" className="btn btn-toggle">
                      <i className="fab fa-google" />&nbsp;
                      Login with Google
                    </button>
                  </div>

                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin


