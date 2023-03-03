import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MDBInput } from 'mdb-react-ui-kit';

const Register = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));



  const updateUser = async (values, { setSubmitting }) => {
    console.log(values);

    setSubmitting(true);
    const res = await fetch("http://localhost:5000/startup/update/" + currentUser._id, {
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



  return (
    <div className="card m-5 mx-auto" style={{ height: "fit-content", width: "fit-content" }}>




      {/* <!-- Tabs navs --> */}
      <ul className="nav nav-tabs nav-justified mb-5" id="ex3" role="tablist" style={{ width: "900px" }}>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="ex3-tab-1"
            data-mdb-toggle="tab"
            href="#ex3-tabs-1"
            role="tab"
            aria-controls="ex3-tabs-1"
            aria-selected="true"
          >              Basic Info

          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-2"
            data-mdb-toggle="tab"
            href="#ex3-tabs-2"
            role="tab"
            aria-controls="ex3-tabs-2"
            aria-selected="false"
          >              Contact Info
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-3"
            data-mdb-toggle="tab"
            href="#ex3-tabs-3"
            role="tab"
            aria-controls="ex3-tabs-3"
            aria-selected="false"
          >Incubator Category
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="ex3-tab-4"
            data-mdb-toggle="tab"
            href="#ex3-tabs-4"
            role="tab"
            aria-controls="ex3-tabs-4"
            aria-selected="false"
          >  Categories And Interests
          </a>
        </li>

      </ul>
      {/* <!-- Tabs navs --> */}

      {/* <!-- Tabs content --> */}
      <div className="tab-content" id="ex2-content">
        <div
          className="tab-pane fade show active"
          id="ex3-tabs-1"
          role="tabpanel"
          aria-labelledby="ex3-tab-1"
        >
          {/* first form  */}
          <div className="tab-content mb-5" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-About Startup" role="tabpanel" aria-labelledby="v-pills-About Startup-tab" >
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
                            <input type="file" className="image-input" name="startupimage" value={values.startupimage}></input>
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

                      <div className="d-flex flex-column  btn-group shadow-0" role="group" aria-label="Basic example">
                        <FormLabel className="ms-3" value={values.stage}>Stage</FormLabel>
                        <div>
                          <button type="button" className="btn btn-outline-secondary" data-mdb-color="dark">Ideation</button>
                          <button type="button" className="btn btn-outline-secondary" data-mdb-color="dark">Validation</button>
                          <button type="button" className="btn btn-outline-secondary" data-mdb-color="dark">Early Traction</button>
                          <button type="button" className="btn btn-outline-secondary" data-mdb-color="dark">Scaling</button>
                        </div>
                      </div>

                      <div className="form-outline mt-4 ms-1">
                        <Field as="textarea" name="brief" value={values.brief} className="form-control" id="form6Example7" rows="4"></Field>
                        <label className="form-label" for="form6Example7">Brief</label>
                      </div>
                    </div>

                    <div>
                      <div className="file-upload-wrapper">


                        <div className="image-body">
                          <formlabel>Documents</formlabel>
                          <input type="file" className="image-input" value={values.sdocuments} name="image"></input>
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
          className="tab-pane fade"
          id="ex3-tabs-2"
          role="tabpanel"
          aria-labelledby="ex3-tab-2"
        >
          {/* second form */}
          <div className="tab-content mb-5" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-Owner And Product Details" role="tabpanel" aria-labelledby="v-pills-Owner And Product Details-tab" >
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
                            <input type="file" className="image-input" name="owneravatar" value={values.owneravatar}></input>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mt-4 ms-1">
                        <Field type="name" name="ownername" value={values.ownername} className="form-control" />
                        <label className="form-label" htmlFor="form3Example3">Owner Name</label>
                      </div>
                      <div>
                        <div className="file-upload-wrapper">




                          <div className="image-body">
                            <formlabel>Identity Proof(Aadhar Card/PAN/VoterID)</formlabel>
                            <input type="file" className="image-input" name="identityproof" value={values.identityproof}></input>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mt-4 ms-1">
                        <Field type="number" name="ownername" value={values.identityno} className="form-control" />
                        <label className="form-label" htmlFor="form3Example3">Identity No</label>
                      </div>
                      <div>
                        <div className="file-upload-wrapper">




                          <div className="image-body">
                            <formlabel>Document</formlabel>
                            <input type="file" className="image-input" name="documents" value={values.documents}></input>
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
                        <Field type="number" name="teammemberno" value={values.teammemberno} className="form-control" />
                        <label className="form-label" htmlFor="form3Example3">No of members in team</label>
                      </div>
                      <div className="form-outline mt-4 ms-1">
                        <Field as="textarea" name="teammembers" value={values.teammembers} className="form-control" id="form6Example7" rows="2"></Field>
                        <label className="form-label" for="form6Example7">Members Of Team</label>
                      </div>
                    </div>

                    <div>
                      <div className="file-upload-wrapper">



                        <div className="image-body">
                          <formlabel>Image Of The Product</formlabel>
                          <input type="file" className="image-input" value={values.productimage} name="productimage"></input>
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mt-4 ms-1">
                      <Field type="name" name="productname" value={values.productname} className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Name Of Product</label>
                    </div>
                    <div className="form-outline mt-4 ms-1">
                      <Field as="textarea" name="productdescription" value={values.productdescription} className="form-control" id="form6Example7" rows="4"></Field>
                      <label className="form-label" for="form6Example7">Description Of Product</label>
                    </div>
                    <button type="submit">Next</button>
                  </Form>
                )}
              </Formik>

            </div>
          </div>
          {/* second form end  */}

        </div>


        <div
          className="tab-pane fade"
          id="ex3-tabs-3"
          role="tabpanel"
          aria-labelledby="ex3-tab-3"
        >



          {/* third form  */}
          <div className="tab-content mb-5" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-Owner And Product Details" role="tabpanel" aria-labelledby="v-pills-Owner And Product Details-tab" >
              <Formik
                initialValues={currentUser}
                onSubmit={updateUser}
              >
                {({ values, handleSubmit, handleChange, isSubmitting }) => (
                  <form onSubmit={handleSubmit} >
                    <div className="row mb-4 form-floating " >
                      <div className="col">
                        <div className="form-outline">
                          <MDBInput label='Email Address' type="text" value={values.email} onChange={handleChange} name="email" />
                        </div>

                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <input type="tel" value={values.tel} onChange={handleChange} name="tel" className="form-control" />
                          <label className="form-label" htmlFor="floatingInputValue">Mobile</label>
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

                    <button type="submit">Next</button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          {/* third form end  */}


        </div>




        <div
          className="tab-pane fade"
          id="ex3-tabs-4"
          role="tabpanel"
          aria-labelledby="ex3-tabs-4"
        >
          <div className="tab-content mb-5" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-Owner And Product Details" role="tabpanel" aria-labelledby="v-pills-Owner And Product Details-tab" >
              {/* fourth form */}

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

        </div>
      </div>

    </div>

  )
};

export default Register