import { Formik, Field, Form, ErrorMessage } from "formik";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {MDBInput} from 'mdb-react-ui-kit';

const Register = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   tel: "",
  //   type: "none",
  //   category: "",
  //   interests: "",
  //   brief: "",
  // };

  const updateUser = async (values, { setSubmitting }) => {
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
      const data = await res.json();
      console.log(data.result);
      setCurrentUser(data.result);
      sessionStorage.setItem('user', JSON.stringify(data.result))
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "You have registered successfully",
      });
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
    <div className="card m-5">





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
              About Startup
            </a>
            <a
              className="nav-link active"
              id="v-tabs-home-tab"
              data-mdb-toggle="tab"
              href="#v-tabs-home"
              role="tab"
              aria-controls="v-tabs-home"
              aria-selected="true"
            >
              Owner And Product Details
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
              Categories And Interests
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
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-About Startup" role="tabpanel" aria-labelledby="v-pills-About Startup-tab" >
                  <Formik
                    initialValues={currentUser}
                    onSubmit={values => {
                      console.log(values);
                    }}
                  >
                    {({ values, handleSubmit, handleChange, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        
                        <div className="d-flex flex-column">
                          <div>
                            <div className="file-upload-wrapper">
                              <div className="image-body">
                                <input type="file" class="image-input" name="startupimage" value={values.startupimage}></input>
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mt-4 ms-1">
                            <Field type="name" name="name" className="form-control" />
                            <label className="form-label" htmlFor="form3Example3">Startup Name</label>
                          </div>
                          <div className="form-outline mt-4 ms-1">
                            <Field type="date" name="created_at" value={values.created_at} className="form-control" />
                            <label className="form-label" htmlFor="form3Example3">Created At</label>
                          </div>

                          <FormControl className="ps-3 pb-4 ">
                            <FormLabel id="demo-radio-buttons-group-label">Funded Or Bootstrapped</FormLabel>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="none" name="type" onChange={handleChange} value={values.type} >
                              <div className="">
                                <FormControlLabel value=" Funded" control={<Radio />} label="Funded" />
                                <FormControlLabel value="Bootstrapped" control={<Radio />} label="Bootstarpped" />

                              </div>
                            </RadioGroup>
                          </FormControl>

                          <div class="d-flex flex-column  btn-group shadow-0" role="group" aria-label="Basic example">
                            <FormLabel className="ms-3" value={values.stage}>Stage</FormLabel>
                            <div>
                              <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Ideation</button>
                              <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Validation</button>
                              <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Early Traction</button>
                              <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Scaling</button>
                            </div>
                          </div>
                          
                          <div class="form-outline mt-4 ms-1">
                            <Field as="textarea" name="brief"  value={values.brief} class="form-control" id="form6Example7" rows="4"></Field>
                            <label class="form-label" for="form6Example7">Brief</label>
                          </div>
                        </div>
                       
                          <div>
                            <div className="file-upload-wrapper">
                              <div className="image-body">
                                <formlabel>Documents</formlabel>
                                <input type="file" class="image-input" value={values.sdocuments} name="image"></input>
                              </div>
                            </div>
                          </div>

                        

                      </Form>
                    )}
                  </Formik>

                </div>
              </div>
              {/* first form end  */}

            </div>
            <div
              className="tab-pane fade show active"
              id="v-tabs-home"
              role="tabpanel"
              aria-labelledby="v-tabs-home-tab"
            >

              {/* second form */}
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-Owner And Product Deatails" role="tabpanel" aria-labelledby="v-pills-Owner And Product Details-tab" >
                  <Formik
                    initialValues={currentUser}
                    onSubmit={values => {
                      console.log(values);
                    }}
                  >
                    {({ values, handleSubmit, handleChange, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        
                        <div className="d-flex flex-column">
                          <div>
                            <div className="file-upload-wrapper">
                              <div className="image-body">
                                <input type="file" class="image-input" name="owneravatar" value={values.owneravatar}></input>
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mt-4 ms-1">
                            <Field type="name" name="ownername"  value={values.ownername}className="form-control" />
                            <label className="form-label" htmlFor="form3Example3">Owner Name</label>
                          </div>
                          <div>
                            <div className="file-upload-wrapper">
                              <div className="image-body">
                                <formlabel>Identity Proof(Aadhar Card/PAN/VoterID)</formlabel>
                                <input type="file" class="image-input" name="identityproof" value={values.identityproof}></input>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mt-4 ms-1">
                            <Field type="number" name="ownername"  value={values.identityno}className="form-control" />
                            <label className="form-label" htmlFor="form3Example3">Identity No</label>
                          </div>
                          <div>
                            <div className="file-upload-wrapper">
                              <div className="image-body">
                                <formlabel>Document</formlabel>
                                <input type="file" class="image-input" name="documents" value={values.documents}></input>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                          <div className="form-outline">
                            <input type="tel" value={values.ownercontact} onChange={handleChange} name="ownercontact" className="form-control" />
                            <label className="form-label" htmlFor="floatingInputValue">Contact</label>
                          </div>
                        </div>
                        
                      <div className="col">
                        <div className="form-outline">
                        <MDBInput label='Email ' type="email" value={values.owneremail} onChange={handleChange} name="email" />
                        </div>
                        </div>
                        <div className="form-outline mt-4 ms-1">
                            <Field type="number" name="teammemberno"  value={values.teammemberno}className="form-control" />
                            <label className="form-label" htmlFor="form3Example3">No of members in team</label>
                          </div>
                          <div class="form-outline mt-4 ms-1">
                            <Field as="textarea" name="teammembers"  value={values.teammembers}class="form-control" id="form6Example7" rows="2"></Field>
                            <label class="form-label" for="form6Example7">Members Of Team</label>
                          </div>
                        </div>
                       
                          <div>
                            <div className="file-upload-wrapper">
                              <div className="image-body">
                                <formlabel>Image Of The Product</formlabel>
                                <input type="file" class="image-input" value={values.productimage} name="productimage"></input>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mt-4 ms-1">
                            <Field type="name" name="productname"  value={values.productname}className="form-control" />
                            <label className="form-label" htmlFor="form3Example3">Name Of Product</label>
                          </div>
                          <div class="form-outline mt-4 ms-1">
                            <Field as="textarea" name="productdescription"  value={values.productdescription} class="form-control" id="form6Example7" rows="4"></Field>
                            <label class="form-label" for="form6Example7">Description Of Product</label>
                          </div>
                          </Form>
                    )}
                  </Formik>

                </div>
              </div>
              {/* second form end  */}

            </div>
            <div
              className="tab-pane fade"
              id="v-tabs-profile"
              role="tabpanel"
              aria-labelledby="v-tabs-profile-tab"
            >

              {/* second form  */}

              <Formik
                initialValues={currentUser}
                onSubmit={updateUser}
              >
                {({ values, handleSubmit, handleChange, isSubmitting }) => (
                  <form onSubmit={handleSubmit} >
                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline">
                        <MDBInput label='Email Address' type="email" value={values.email} onChange={handleChange} name="email" />
                         
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <input type="tel" value={values.tel} onChange={handleChange} name="tel" className="form-control" />
                            <label className="form-label" htmlFor="floatingInputValue">Mobile</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline">
                          <input type="text" value={values.state} onChange={handleChange} name="state" className="form-control" />
                          <label className="form-label" htmlFor="floatingInputValue">State</label>
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <input type="text" value={values.city} onChange={handleChange} name="city" className="form-control" />
                            <label className="form-label" htmlFor="floatingInputValue">City</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline">
                          <input type="url" value={values.website} onChange={handleChange} name="website" className="form-control" />
                          <label className="form-label" htmlFor="floatingInputValue">Website</label>
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <input type="url" value={values.mobileAppLink} onChange={handleChange} name="mobileAppLink" className="form-control" />
                            <label className="form-label" htmlFor="floatingInputValue">Mobile App Link</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                )}
              </Formik>

              {/* third form end  */}


            </div>
            <div
              className="tab-pane fade"
              id="v-tabs-messages"
              role="tabpanel"
              aria-labelledby="v-tabs-messages-tab"
            >

              {/* fourth form  */}
              <Formik
                initialValues={{
                  select1: '',
                  select2: '',
                  type: '',
                }}
                onSubmit={values => {
                  console.log(values);
                }}
              >
                {({ values, handleSubmit, handleChange, isSubmitting }) => (
                  <form onSubmit={handleSubmit} >
                    <div className="col-12">
                      <label htmlFor="select1"> Industry</label>
                      <select
                        className="select"
                        name="select1"
                        value={values.select1}
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
                    <div className="col-12 m-4">
                      <label htmlFor="select2">Sector</label>
                      <br />
                      <select
                        style={{ width: "200px" }}
                        className="select"
                        name="select2"
                        value={values.select2}
                        onChange={handleChange}
                      >
                        <FormLabel>Sector</FormLabel>
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>
                        <option value="Entertainment">Entertainment</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="select2">Interests</label>
                      <select
                        className="select"
                        name="select2"
                        value={values.select2}
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
                        <input type="text" value={values.text} onChange={handleChange} name="text" className="form-control" />
                        <label className="form-label" htmlFor="floatingInputValue">Udyog Aadhar</label>
                      </div>
                    </div>

                    <FormControl className="ps-3 pb-4">
                      <FormLabel id="demo-radio-buttons-group-label">Your Interests</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="type"
                        onChange={handleChange}
                        value={values.type}
                      >
                        <div className="">
                          <FormControlLabel value=" All" control={<Radio />} label="All" />
                          <FormControlLabel value="Investors" control={<Radio />} label="Investors" />
                          <FormControlLabel value="Accelerators" control={<Radio />} label=" Accelerators" />
                          <FormControlLabel value="Mentors" control={<Radio />} label="Mentors" />
                        </div>
                      </RadioGroup>
                    </FormControl>

                    <button type="submit">Submit</button>
                  </form>
                )}
              </Formik>
              {/* fourth form end  */}

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