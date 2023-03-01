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
import { MDBInput } from "mdb-react-ui-kit";

const Register = () => {
  const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('investor')));


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
    const res = await fetch("http://localhost:5000/startup/update/"+currentUser._id, {

      method: "PUT",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status);
    setSubmitting(false);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have registered successfully",
      });
      navigate("/");
    } else {
      // error alert
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.tel) {
      errors.tel = "Required";
    }

    if (values.type === "none") {
      errors.type = "Required";
    }

    if (!values.category) {
      errors.category = "Required";
    }

    if (!values.interests) {
      errors.interests = "Required";
    }

    if (!values.brief) {
      errors.brief = "Required";
    }

    return errors;
  };



  return (
    <div className="m-5 card mx-auto" style={{height:"90vh",width:"50%", paddingTop:"20px"}}>





      <div className="row w-100">
        <div className="col-3">

          {/* Tab navs */}
          <div
            className="nav flex-column nav-tabs text-center"
            id="v-tabs-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-tabs-home-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-home"
              role="tab"
              aria-controls="v-tabs-home"
              aria-selected="true"
            >
              Basic Info
            </a>
            <a
              className="nav-link"
              id="v-tabs-profile-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-profile"
              role="tab"
              aria-controls="v-tabs-profile"
              aria-selected="false"
            >
              Contact Info
            </a>
            <a
              className="nav-link"
              id="v-tabs-messages-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-messages"
              role="tab"
              aria-controls="v-tabs-messages"
              aria-selected="false"
            >
              Incubator Category
            </a>
          </div>
          
          {/* Tab navs */}
        </div>
        <div className="col-9">
          {/* Tab content */}
          <div className="tab-content" id="v-tabs-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-tabs-home"
              role="tabpanel"
              aria-labelledby="v-tabs-home-tab"
            >

              {/* first form */}
            <div >
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-About Startup" role="tabpanel" aria-labelledby="v-pills-About Startup-tab" >
                  <Formik
                    initialValues={{ name: '', type: '', brief: '' }}
                    onSubmit={values => {
                      console.log(values);
                    }}
                  >
                    {({ values, handleSubmit, handleChange, isSubmitting }) => (
                      <Form  onSubmit={handleSubmit}>
                        <div class="col-md-7">
                          <div class="file-upload-wrapper">
                            <div class="image-body">

                              <input type="file" class="image-input" value={values.investoravatar} name="investoravatar"> Investor Avatar</input>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                        <MDBInput label='Investor Name' type="text" value={values.name} onChange={handleChange} name="name" />

                          
                        </div>

                        <div className="form-outline mb-4">
                        <MDBInput label='Identity Proof Number' type="text" value={values.identityproofno} onChange={handleChange} name="identityproofno" />
                        </div>
                        
                        <div className="form-outline mb-4">
                        <MDBInput label='Identity Proof (Aadhar/PAN/)' type="text" value={values.identityproof} onChange={handleChange} name="identityproof" />
                        </div>
                        
                        <div className="form-outline mb-4" style={{width:"200px"}}>
                        <MDBInput label='Date Of Establishment' type="date" value={values.date} onChange={handleChange} name="date" />

                        </div>
                        <div className="col-12">

                          <label htmlFor="select1">Duration</label>
                          <br />
                          <select
                            className="select"
                            name="select1"
                            value={values.select1}
                            onChange={handleChange}>
                              <label htmlFor="Duration">Duration</label>
                            <option value=" Upto 6"> Upto 6</option>
                            <option value="6 to 12"> 6 to 12 Months</option>
                            <option value="Above 12 months">Above 12 Months</option>
                          </select>
                        </div>

                        <label className="mt-4" htmlFor="">Select Stages of Startup You Are Interested in Working With</label>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">Ideation</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">Validation</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">Early Traction</label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">Scaling</label>
                        </div>

                        <div class="form-outline mb-4">
                          <Field as="textarea" name="brief" class="form-control" value={values.brief} id="form6Example7" rows="2"></Field>
                          <label class="form-label" for="form6Example7">Brief</label>
                        </div>
                        <div className="form-outline ">
                          <Field type="name" name="name" className="form-control" />
                          <MDBInput label="Current Incubatees" type="text" value={values.currentincubatees}
                          onChange={handleChange} name="Current Incubatees"/>
                        </div>
                        <div className="form-outline mb-2">
                          <Field type="name" name="name" className="form-control" />
                          < MDBInput label="Graduated Incubatees"  type="text" value={values.graduatedincubatees} 
                          onChange={handleChange} name="Graduated Incubatees"/>
                        </div>
                        <FormControl className="ps-3 pb-4">
                          <FormLabel id="demo-radio-buttons-group-label">Government Funded ?</FormLabel>
                          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="none" name="type" onChange={handleChange} value={values.type} >
                            <div className="">
                              <FormControlLabel value=" Funded" control={<Radio />} label="Yes" />
                              <FormControlLabel value="Bootstrapped" control={<Radio />} label="No" />

                            </div>
                          </RadioGroup>
                        </FormControl>

                      </Form>
                    )}
                  </Formik>

                </div>
              </div>
              </div>
  
              {/* first form end  */}

            </div >
            <div

              className="tab-pane fade"
              id="v-tabs-profile"
              role="tabpanel"
              aria-labelledby="v-tabs-profile-tab"
            >

              {/* second form  */}

              <Formik
                initialValues={{ name: '', type: '', brief: '' }}
                onSubmit={values => {
                  console.log(values);
                }}
              >
                {({ values, handleSubmit, handleChange, isSubmitting }) => (
                  <form onSubmit={handleSubmit} >
                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline">
                          <MDBInput  label="Email" type="email" value={values.email} onChange={handleChange} name="Email "/>
                          
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <MDBInput label="Mobile Number" type="tel" value={values.tel} onChange={handleChange} name="Mobile Number" />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline">
                          < MDBInput  label="State" type="text" value={values.state} onChange={handleChange} name="state"/>
                          
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <MDBInput  label="City" type="text" value={values.city} onChange={handleChange} name="city"/>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <MDBInput label="Application Link" type="text" value={values.alink} onChange={handleChange} name="Application Link"/>
                      
                    </div>
                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline">
                          <MDBInput label="Incubation Center Location" type="text" value={values.centerlocation} onChange={handleChange} name="Incubation Center Loacation" />
                          
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <MDBInput  label="Incubator Center Location Address" type="text" value={values.centerloactionaddress} onChange={handleChange} name="Incubator Center Location Address" />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit">Next</button>
                  </form>
                )}
              </Formik>

              {/* second form end  */}


            </div>
            <div
              className="tab-pane fade"
              id="v-tabs-messages"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >

              {/* third form  */}
              <Formik
                initialValues={{
                  industry: '',
                  sector: '',
                  type: '',
                }}
                onSubmit={values => {
                  console.log(values);
                }}
              >
                {({ values, handleSubmit, handleChange, isSubmitting }) => (
                  <form onSubmit={handleSubmit} >
                    <div className="col-12">
                      <label  htmlFor="select1"> Industry</label>
                      <select
                        className="select"
                        name="industry"
                        value={values.industry}
                        onChange={handleChange}
                      >
                        <FormLabel> Industry</FormLabel>
                        <option value="" selected></option>
                        <option value="Advertising">Advertising</option>
                        <option value="Art And Photography">Art And Photography</option>
                        <option value="Chemicals">Chemicals</option>
                        <option value="Telecommunication And Networking"> Telecommunication And Networking</option>
                        <option value="Construction">Construction</option>
                        <option value="Agriculture">Chemicals</option>
                        <option value="Agriculture">Chemicals</option>
                        <option value="Events">Event</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Education">Education</option>
                        <option value="Healthcare And Lifesciences">Healthcare And Lifesciences</option>
                        <option value="IT Services">IT Services</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Others">Others</option>

                        

                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="select2"> Interests</label>
                      <select
                        className="select"
                        name="sector"
                        value={values.sector}
                        onChange={handleChange}
                      ><FormLabel>Interests</FormLabel>
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
                      <div className="form-outline">
                        <MDBInput  label="DIPPT Enpanelment Number" type="text
                        " value={values.DIPPTNumber} onChange={handleChange} name="DIPPT Number"  />
                        
                      </div>
                    </div>
                  

                    <button type="submit">Submit</button>
                  </form>
                )}
              </Formik>
              {/* third form end  */}

            </div>
          </div>
          <form>



          </form>
        </div>
      </div>


    </div>
  )
}

export default Register
