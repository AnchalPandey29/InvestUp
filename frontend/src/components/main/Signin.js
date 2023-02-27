import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {

  const navigate = useNavigate();
  const [selRole, setSelRole] = useState('startup');


  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);
    setSubmitting(true);
    const res = await fetch("http://localhost:5000/${selRole}/auth", {
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
      if(selRole==='startup'){
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('startup', JSON.stringify(data.result));
        navigate('/startup/profile');
      }
      else if (selRole==='investor'){
        const data = await res.json();
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
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="col-md-3 mx-auto" >
        <div className="card pt-4" style={{ height: "fit-content", padding: "40px" }}>
          <div className="card-body">
            <p className="text-center h4">Login Form</p>
            <hr />
            <Formik initialValues={{ email: "", password: "" }} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (


                <form onSubmit={handleSubmit}>


                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input type="email" value={values.email} onChange={handleChange} name="email" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input type="password" value={values.password} onChange={handleChange} name="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
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


