import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Formik } from "formik";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import app_config from "../../config";
import Header from "./Header";

const Signup = () => {
  //signup schema validation
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required")
      .test("email", "Email already exists", async (value, obj) => {
        const response = await fetch(app_config.apiurl + "/startup/checkemail/" + value);
        if (response.status === 200) {
          console.log("email found");
          return false;
        } else if (response.status === 404) {
          // console.log("email not found");
          return true;
        } else if (response.status === 402) {
          console.log("email not found");
          return true;
        }
      }),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  /////////////////////////////////////////

  const navigate = useNavigate();
  const [selRole, setSelRole] = useState("startup");

  ///usersubmit event
  const userSubmit = async (formdata, { setSubmitting }) => {
    formdata.role = selRole;
    setSubmitting(true);
    const res = await fetch(`http://localhost:5000/startup/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status);
    setSubmitting(false);

    //pop up
    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have registered successfully",
      });

      if (selRole === "startup") {
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem("startup", JSON.stringify(data.result));
        navigate("/startup/profile");
      } else if (selRole === "investor") {
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem("investor", JSON.stringify(data.result));
        navigate("/investor/profile");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please Enter right credentials",
      });
    }
  };

  return (
    <div>
      <Header/>
      <div style={{ height: "90vh" }}>
        <div
          className="row"
          style={{ height: "40vh", backgroundColor: "#9c3353" }}
        >
          {" "}
        </div>

        <div
          className="row pt-5 mx-auto justify-content-center align-items-center"
          style={{ marginTop: "-290px", width: "fit-content" }}
        >
          <div
            className="card pt-5"
            style={{ height: "fit-content", padding: "40px" }}
          >
            <div
              className="card-body"
              style={{
                height: "fit-content",
                width: "fit-content",
                padding: "0",
              }}
            >
              <p className="text-center h4">Signup Form</p>
              <hr />
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  role: "startup",
                }}
                validationSchema={SignupSchema} // Add the validation schema here
                onSubmit={userSubmit}
              >
                {({
                  values,
                  handleSubmit,
                  handleChange,
                  isSubmitting,
                  errors,
                  touched,
                }) => (
                  <form onSubmit={handleSubmit}>
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
                        value={values.email}
                        onChange={handleChange}
                        name="email"
                      />
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
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
                      {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                      ) : null}
                    </div>
                    <div>
                      <FormControl className="ps-3 pb-4">
                        <FormLabel id="demo-radio-buttons-group-label">
                          Role
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="startup"
                          onChange={(e, v) => setSelRole(v)}
                          value={selRole}
                        >
                          <div className="">
                            <FormControlLabel
                              value="startup"
                              control={<Radio />}
                              label="Startup"
                            />
                            <FormControlLabel
                              value="investor"
                              control={<Radio />}
                              label="Investor"
                            />
                            <FormControlLabel
                              value="user"
                              control={<Radio />}
                              label="Common User"
                            />
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </div>

                    {/* Submit button */}
                    {/* <button type="submit" className="btn btn-primary ">Sign up</button> */}

                    <div>
                      <button
                        className="btn"
                        type="submit"
                        style={{
                          backgroundColor: "#9c3353",
                          color: "#fffefe",
                          width: "100%",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    {/* Register buttons */}
                    {/* <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-secondary btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary btn-floating mx-1"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div> */}
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-2">
        <img
          src="/need.png"
          style={{ marginTop: "-500px", marginLeft: "330px" }}
          alt=""
        />
      </div>
      <div className="col-md-2">
        <img
          src="/news.png"
          style={{ marginTop: "-500px", marginLeft: "1000px" }}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Signup;
