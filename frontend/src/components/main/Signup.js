import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {

  const navigate = useNavigate();

  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);


    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

    setSubmitting(true);
    const res = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status)
    setSubmitting(false);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: 'Success',
        text: 'You have registered successfully'
      })
      navigate('/login');
    } else {
      // error alert
    }
  }

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <p className="text-center h4">Signup Form</p>
            <hr />
            <Formik initialValues={{ name: "", email: "", password: ""}} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                // <form className="form-floating" onSubmit={handleSubmit}>
                //   
                //   <label>Email Address</label>
                //   <input value={values.email} onChange={handleChange} name="email" className="form-control" />

                //   <label>Age</label>
                //   <input type="number" value={values.age} onChange={handleChange} name="age" className="form-control" />

                //   <label >Password</label>
                //   <input className="form-control mb-3" type="password"  />

                //   
                // </form>
                  
                  <form>
  {/* 2 column grid layout with text inputs for the first and last names */}
  <div className="row mb-4 form-floating" onSubmit={handleSubmit}>
    <div className="col">
      <div className="form-outline">
      <input type="text"  value={values.name} onChange={handleChange} name="name" className="form-control" />
      <label className="form-label" for="floatingInputValue">Name</label>

      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <input type="text" value={values.name} onChange={handleChange} name="name" className="form-control" />
        <label className="form-label">Last name</label>
      </div>
    </div>
  </div>

  {/* Email input */}
  <div className="form-outline mb-4">
    <input type="email" value={values.password} onChange={handleChange} name="password" className="form-control" />
    <label className="form-label" htmlFor="form3Example3">Email address</label>
  </div>

  {/* Password input */}
  <div className="form-outline mb-4">
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" htmlFor="form3Example4">Password</label>
  </div>

  {/* Checkbox */}
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label className="form-check-label" htmlFor="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>

  {/* Submit button */}
  {/* <button type="submit" className="btn btn-primary ">Sign up</button> */}

  <button disabled={isSubmitting} type="submit" className="btn btn-primary btn-block mb-4">
                {
                   isSubmitting ?
                   <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   :
                   'Submit'
               }
            </button>

  {/* Register buttons */}
  <div className="text-center">
    <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>
    

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-github"></i>
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

export default Signup


