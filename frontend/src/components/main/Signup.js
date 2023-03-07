import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Formik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const Signup = () => {


//signup schema validation
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  
  /////////////////////////////////////////

  const navigate = useNavigate();
  const [selRole, setSelRole] = useState('startup');

  
///usersubmit event
  const userSubmit = async (formdata, {setSubmitting}) => {
    formdata.role = selRole;
    setSubmitting(true);
    const res = await fetch(`http://localhost:5000/startup/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status)
    setSubmitting(false);


    //pop up 
    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: 'Success',
        text: 'You have registered successfully'
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
    }
     else {
      
        Swal.fire({
          icon: "error",
          title: 'Error',
          text: 'Please Enter right credentials'
        })
    }
  }

 


  
  return (
    <div style={{height:"100vh"}}>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card pt-5" style={{ height:"fit-content",padding:"40px"}} >
          <div className="card-body"  style={{height:"fit-content", width:"fit-content" ,padding:"0"}}>
            <p className="text-center h4">Signup Form</p>
            <hr />
            <Formik
              initialValues={{ name: "", semail: "", password: "", role: "startup" }}
              validationSchema={SignupSchema} // Add the validation schema here
              onSubmit={userSubmit}>

              {({ values, handleSubmit, handleChange, isSubmitting, errors, touched }) => (
               
                <form onSubmit={handleSubmit} >
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row form-floating" onSubmit={handleSubmit}>
                    <div className="col">
                      <div className="form-outline mb-4">
                        
                        
                        <MDBInput
                          label="Name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          name="name"
                          />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}

                      </div>
                    </div>
                    
                  </div>


                
                 
                  {/* Email input */}
                  <div className="form-outline mb-4">
                  <MDBInput
                    label="Email"
                    type="email"
                    value={values.semail}
                    onChange={handleChange}
                    name="semail"
                  />
                   {errors.semail && touched.semail ? <div>{errors.semail}</div> : null}

                  
                  </div>
                
                  {/* Password input */}
                  <div className="form-outline mb-4">

                  <MDBInput
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                  />
                  {errors.password && touched.password ? <div>{errors.password}</div> : null}

           
                  </div>

                  

                  <FormControl className="ps-3 pb-4">
                    <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="startup"
                      
                      onChange={(e, v) => setSelRole(v)}
                      value={selRole}
                    >
                      <div className="">
                      <FormControlLabel value="startup" control={<Radio />} label="Startup" />
                      <FormControlLabel value="investor" control={<Radio />} label="Investor" />
                      <FormControlLabel value="user" control={<Radio />} label="Common User" />
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


