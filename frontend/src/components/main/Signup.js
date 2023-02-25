import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { padding } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {

  const navigate = useNavigate();

  const addStartup = async (formdata, {setSubmitting}) => {
    setSubmitting(true);
    const res = await fetch("http://localhost:5000/startup/add", {
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

  const addInvestor = async (formdata, {setSubmitting}) => {
    setSubmitting(true);
    const res = await fetch("http://localhost:5000/investor/add", {
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


  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);
    return;

    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.
    if(formdata.role === 'startup')
      await addStartup(formdata, {setSubmitting});
     else if(formdata.role ==='investor')
      await addInvestor(formdata, {setSubmitting});
  }

  
  return (
    <div style={{height:"100vh"}}>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card pt-5" style={{ height:"fit-content",padding:"40px"}} >
          <div className="card-body"  style={{height:"fit-content", width:"fit-content" ,padding:"0"}}>
            <p className="text-center h4">Signup Form</p>
            <hr />
            <Formik initialValues={{ name: "", email: "", password: "", role: "startup" }} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
               
          

                <form onSubmit={handleSubmit} >
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4 form-floating" onSubmit={handleSubmit}>
                    <div className="col">
                      <div className="form-outline">
                        <input type="text" value={values.name} onChange={handleChange} name="name" className="form-control" />
                        <label className="form-label" for="floatingInputValue">Name</label>

                      </div>
                    </div>
                    
                  </div>

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input type="email" value={values.email} onChange={handleChange} name="email" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>

                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input type="password" value={values.password} onChange={handleChange} id="form3Example4" name="password" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                  

                  <FormControl className="ps-3 pb-4">
                    <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="startup"
                      name="role"
                      onChange={handleChange}
                      value={values.role}
                    >
                      <div className="">
                      <FormControlLabel value="startup" control={<Radio />} label="Startup" />
                      <FormControlLabel value="investor" control={<Radio />} label="Investor" />
                      <FormControlLabel value="common" control={<Radio />} label="Common" />
                      </div>
                    </RadioGroup>
                  </FormControl>

                  

                  {/* Submit button */}
                  {/* <button type="submit" className="btn btn-primary ">Sign up</button> */}

                  <button disabled={isSubmitting} type="submit" className="btn btn-block mb-4" style={{ backgroundColor: "#9c3353", color: "#fffefe" }}>
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


                    <button type="button" className="btn btn-secondary btn-floating mx-1" >
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


