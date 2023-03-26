import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//import { MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { MDBTextArea, MDBFile, MDBInput } from "mdb-react-ui-kit";
import * as Yup from "yup";

const RegisterSchema1 = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Name is required"),
  identityproofno: Yup.string().required("This field is mandatory"),
  //   identityproof:Yup.string().required("Identity Proof is requied"),
  //  date:Yup.string().required("This field is mandatory"),
  brief:Yup.string().required("Description is required"),
  //   currentincubatees:Yup.string().required("Description is required"),
  //   email: Yup.string()
  //   .email("Invalid email")
  //   .required("Email is required"),
  //   password: Yup.string()
  //   .min(8, "Password must be at least 8 characters")
  //   .required("Password is required"),
  //   tel:Yup.string()
  //         .max(10)
  //       .required("contact number is required"),
  //        //aplink:Yup.string().aplink("Application Link is mandatory"),
  //istate:Yup.string().istate("State is required"),
  //DIPPTNumber:Yup.string().DIPPTNumber("DIPPT Number is required"),
});

  //const RegisterSchema2= Yup.object().shape({
  //  email: Yup.string().email("Invalid email").required("Email is required"),
   //   tel:Yup.string()
    //    .max(10)
    //   .required("contact number is required"),
    // aplink:Yup.string().aplink("Application Link is mandatory"),
   // istate:Yup.string().istate("State is required"),
   // });

const RegisterSchema3= Yup.object().shape({
 DIPPTNumber:Yup.string().DIPPTNumber("DIPPT Number is required"),
});


const Register = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("investor"))
  );

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   tel: "",
  //   type: "none",
  //   Date,
  //   category: "",
  //   interests: "",
  //   brief: "",
  // };

  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);

    setSubmitting(true);
    const res = await fetch(
      "http://localhost:5000/startup/update/" + currentUser._id,
      {
        method: "PUT",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(res.status);
    setSubmitting(false);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",

        text: "You have registered successfully",
      });
    } else {
      // error alert
    }
  };

  // validation function
  function validate(values) {
    let errors;
    if (!values.identityproofno) {
      errors.identityproofno = "Required";
    }

    if (!values.identityproof) {
      errors.identityproof = "Required";
    }

    return errors;
  }

  return (
    <>
    
    <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>
    <div
      className="m-5 card mx-auto p-5"
      style={{
        
        height: "fit-content",
        color: "",
        width: "80%",
        paddingTop: "20px",
      }}
    >
      {/* Tab navs */}

      <ul
        class="nav nav-tabs nav-justified mb-3 d-flex justify-content-center"
        id="ex1"
        role="tablist"
        style={{ width: "fit-content" }}
      >
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="ex3-tab-1"
            data-mdb-toggle="tab"
            href="#ex3-tabs-1"
            role="tab"
            aria-controls="ex3-tabs-1"
            aria-selected="true"
          >
            Basic Info
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex3-tab-2"
            data-mdb-toggle="tab"
            href="#ex3-tabs-2"
            role="tab"
            aria-controls="ex3-tabs-2"
            aria-selected="false"
          >
            Contact Info
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex3-tab-3"
            data-mdb-toggle="tab"
            href="#ex3-tabs-3"
            role="tab"
            aria-controls="ex3-tabs-3"
            aria-selected="false"
          >
            Incubator Category
          </a>
        </li>
      </ul>

      <div class="tab-content" id="ex2-content">
        <div
          class="tab-pane fade show active"
          id="ex3-tabs-1"
          role="tabpanel"
          aria-labelledby="ex3-tab-1"
        >
          {/* first form */}
          <div style={{ height: "fit-content" }}>
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-About Startup"
                role="tabpanel"
                aria-labelledby="v-pills-About Startup-tab"
              >
                <Formik
                  initialValues={{ name: "", type: "", brief: "" }}
                  validationSchema={RegisterSchema1} //Schema
                  onSubmit={onSubmit}
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
                      <div class="form-outline mb-2">
                        <div class="file-upload-wrapper">
                          <div class="image-body">
                            <MDBFile
                              label="Investor Avatar"
                              id="investoravatar"
                              value={values.investoravatar}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <MDBInput
                          label="Investor Name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          name="name"
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                      </div>

                      <div className="form-outline mb-4">
                        <MDBInput
                          label="Identity Proof Number"
                          type="text"
                          value={values.identityproofno}
                          validate={validate}
                          onChange={handleChange}
                          name="identityproofno"
                        />
                        {errors.identityproofno && touched.identityproofno ? (
                          <div>{errors.identityproofno}</div>
                        ) : null}{" "}
                      </div>

                      <div className="form-outline mb-4">
                        <MDBFile
                          label="Identity Proof"
                          id="identityproof"
                          value={values.identityproof}
                          name="identityproof"
                          validate={validate}
                          onChange={handleChange}
                        />
                        {errors.identityproof && touched.identityproof ? (
                          <div>{errors.identityproof}</div>
                        ) : null}
                      </div>

                      <div
                        className="form-outline mb-4"
                        style={{ width: "200px" }}
                      >
                        <MDBInput
                          label="Date Of Establishment"
                          type="date"
                          value={values.date}
                          onChange={handleChange}
                          name="date"
                        />
                        {errors.date && touched.date ? (
                          <div>{errors.date}</div>
                        ) : null}
                      </div>
                      <div className="col-12">
                        <label htmlFor="select1">Duration</label>
                        <br />
                        <select
                          className="select"
                          name="select1"
                          id="select1"
                          value={values.select1}
                          onChange={handleChange}
                        >
                          <label htmlFor="Duration">Duration</label>
                          <option value=" Upto 6"> Upto 6</option>
                          <option value="6 to 12"> 6 to 12 Months</option>
                          <option value="Above 12 months">
                            Above 12 Months
                          </option>
                        </select>
                      </div>

                      <label
                        className="mt-4"
                        name="stage"
                        id="stage"
                        value={values.stage}
                        onChange={handleChange}
                      >
                        Select Stages of Startup You Are Interested in Working
                        With
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Ideation
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Validation
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Early Traction
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Scaling
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <MDBTextArea
                          label="Brief"
                          name="brief"
                          type="text"
                          id="textAreaExample"
                          rows={2}
                          value={values.brief}
                          onChange={handleChange}
                        />
                        {errors.brief && touched.brief ? (
                          <div>{errors.brief}</div>
                        ) : null}
                      </div>

                      <div className="form-outline mb-4 ">
                        <MDBInput
                          label="Current Incubatees"
                          type="text"
                          value={values.currentincubatees}
                          onChange={handleChange}
                          name="currentincubatees"
                        />
                        {errors.currentincubatees &&
                        touched.currentincubatees ? (
                          <div>{errors.currentincubatees}</div>
                        ) : null}
                      </div>
                      <div className="form-outline mb-4">
                        <div>
                          <MDBInput
                            label="Graduated Incubatees"
                            type="text"
                            value={values.graduatedincubatees}
                            onChange={handleChange}
                            name="graduatedincubatees"
                          />
                        </div>
                      </div>
                      <FormControl className="ps-3 pb-4">
                        <FormLabel id="demo-radio-buttons-group-label">
                          Government Funded ?
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={values.funded}
                          defaultValue="none"
                          name="type"
                          onChange={handleChange}
                        >
                          <div className="">
                            <FormControlLabel
                              value=" Funded"
                              control={<Radio />}
                              label="Yes"
                            />
                            <FormControlLabel
                              value="Bootstrapped"
                              control={<Radio />}
                              label="No"
                            />
                          </div>
                        </RadioGroup>
                      </FormControl>
                     {/*  <button
                        disabled={isSubmitting}
                        type="submit"
                        className="btn btn-block mb-4"
                        style={{ backgroundColor: "#9c3353", color: "#fffefe" }}
                      >
                        {isSubmitting ? (
                          <span
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        ) : (
                          "Next"
                        )}
                        </button> */}
                      <button disabled={isSubmitting} type="submit" className="btn btn-block mb-1" style={{ backgroundColor: "#9c3353", color: "#fffefe" }}>
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm"  aria-hidden="true"></span>
                        :
                        'Next'
                    }
                  </button>

                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          {/* first form end  */}
        </div>
        <div
          class="tab-pane fade"
          id="ex3-tabs-2"
          role="tabpanel"
          aria-labelledby="ex3-tab-2"
        >
          {/* second form  */}

          <div style={{ height: "fit-content"}}>
            <Formik
              initialValues={{ name: "", type: "", brief: "" }}
              //validationSchema={RegisterSchema2}
              onSubmit={onSubmit}
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
                  <div className="row mb-4 form-floating">
                    <div className="col ">
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
                      <div className="col">
                        <div className="form-outline mb-4">
                          <MDBInput
                            label="Mobile Number"
                            type="text"
                            value={values.tel}
                            onChange={handleChange}
                            name="tel"
                          />
                          {errors.tel && touched.tel ? (
                            <div>{errors.tel}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4 form-floating">
                    <div className="col">
                      <div className="form-outline mb-4">
                        <MDBInput
                          label="State"
                          type="text"
                          value={values.istate}
                          onChange={handleChange}
                          name="istate"
                        />
                        {errors.istate && touched.istate ? (
                          <div>{errors.istate}</div>
                        ) : null}
                      </div>
                      <div className="col">
                        <div className="form-outline mb-4">
                          <MDBInput
                            label="City"
                            type="text"
                            value={values.city}
                            onChange={handleChange}
                            name="city"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <MDBInput
                      label="Application Link"
                      type="text"
                      value={values.aplink}
                      onChange={handleChange}
                      name="aplink"
                    />
                    {errors.aplink && touched.aplink ? (
                      <div>{errors.aplink}</div>
                    ) : null}
                  </div>
                  <div className="row mb-4 form-floating">
                    <div className="col">
                      <div className="form-outline mb-4">
                        <MDBInput
                          label="Incubation Center Loacation"
                          type="text"
                          value={values.centerlocation}
                          onChange={handleChange}
                          name="centerlocation"
                        />
                      </div>
                      <div className="col">
                        <div className="form-outline mb-4">
                          <MDBInput
                            label="Incubation Center Loacation Address"
                            type="text"
                            value={values.centerlocationaddress}
                            onChange={handleChange}
                            name="centerlocationaddress"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                 {/*  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-block mb-4"
                    style={{ backgroundColor: "#9c3353", color: "#fffefe" }}
                  >
                    {isSubmitting ? (
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Next"
                    )}
                  </button> */}
                  <button disabled={isSubmitting} type="submit" className="btn btn-block mb-1" style={{ backgroundColor: "#9c3353", color: "#fffefe" }}>
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm"  aria-hidden="true"></span>
                        :
                        'Next'
                    }
                  </button>


                </form>
              )}
            </Formik>
          </div>

          {/* second form end  */}
        </div>
        <div
          class="tab-pane fade"
          id="ex3-tabs-3"
          role="tabpanel"
          aria-labelledby="ex3-tab-3"
        >
          {/* third form  */}
          <div style={{ height: "500px" }}>
            <Formik
              initialValues={{
                select1: "",
                select2: "",
                type: "",
              }}
              //validationSchema={RegisterSchema1}
              //validationSchema={RegisterSchema3}
              onSubmit={onSubmit}
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
                  <div className="col-12 form outline mb-4">
                    <label htmlFor="select1"> Industry</label>
                    <br />
                    <select
                      className="select"
                      name="select1"
                      id="select1"
                      value={values.select1}
                      onChange={handleChange}
                    >
                      <FormLabel> Industry</FormLabel>
                      <option value=""></option>
                      <option value="Advertising">Advertising</option>
                      <option value="Art And Photography">
                        Art And Photography
                      </option>
                      <option value="Chemicals">Chemicals</option>
                      <option value="Telecommunication And Networking">
                        {" "}
                        Telecommunication And Networking
                      </option>
                      <option value="Construction">Construction</option>
                      <option value="Agriculture">Chemicals</option>
                      <option value="Agriculture">Chemicals</option>
                      <option value="Events">Event</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Education">Education</option>
                      <option value="Healthcare And Lifesciences">
                        Healthcare And Lifesciences
                      </option>
                      <option value="IT Services">IT Services</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="col-12 form outline mb-4">
                    <label htmlFor="select2"> Interests</label>
                    <br />

                    <select
                      className="select"
                      name="select2"
                      id="select2"
                      value={values.select2}
                      onChange={handleChange}
                    >
                      <FormLabel>Interests</FormLabel>
                      <option value="" selected></option>
                      <option value="Government">Government</option>
                      <option value="Discovery">Discovery</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Marketplace">Marketplace</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Platform">Platform</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Others">Others</option>
                      <option value="Rental">Rental</option>
                      <option value="Research">Research</option>
                    </select>
                  </div>
                  <div className="col">
                    <div className="form-outline mb-4">
                      <MDBInput
                        label="DIPPT Enpanelment Number"
                        id="DIPPTNumber"
                        value={values.DIPPTNumber}
                        onChange={handleChange}
                      />
                      {errors.DIPPTNumber && touched.DIPPTNumber ? (
                        <div>{errors.DIPPTNumber}</div>
                      ) : null}
                    </div>
                  </div>

                 {/*  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-block mb-4"
                    style={{ backgroundColor: "#9c3353", color: "#fffefe" }}
                  >
                    {isSubmitting ? (
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      "Next"
                    )}
                  </button> */}
                  <button disabled={isSubmitting} type="submit" className="btn btn-block mb-1" style={{ backgroundColor: "#9c3353", color: "#fffefe" }}>
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm"  aria-hidden="true"></span>
                        :
                        'Next'
                    }
                  </button>

                </form>
              )}
            </Formik>
            {/* third form end  */}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Register;
