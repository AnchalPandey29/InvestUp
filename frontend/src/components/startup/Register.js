import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MDBInput } from 'mdb-react-ui-kit';
import {MDBTextArea , MDBFile} from 'mdb-react-ui-kit';
import app_config from "../../config";
import * as Yup from "yup";


const Schema1 = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Name is required"),
  brief:Yup.string().required("Description is required"),
});

//const Schema2=Yup.object().shape({
//   ownername: Yup.string().min(2, "Too Short!").required("Name is required"),
//   identityno: Yup.string().required("ID No. is required"),
//   owneremail:Yup.string().required("Email is required"),
//   productname:Yup.string().required(" Product Name is required"),
//   productdescription:Yup.string().required("Description is required"),
 //});

const Schema3=Yup.object().shape({
  email:Yup.string().required("Email is required"),
  tel:Yup.string().max(10)
      .required("contact number is required"),

});
const Schema4=Yup.object().shape({
 aadhar:Yup.string().max(12)
 .required("this field is mandatory"),
});


const Register = () => {
  const navigate = useNavigate();
  const url = app_config.apiurl;
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));
  const [selimage, setSelimage] = useState("");


  const updateUser = async (values, { setSubmitting }) => {
    values.startupimage = selimage;
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
      sessionStorage.setItem('user', JSON.stringify(data.result));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Saved Successfuly",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill the required details",
      });
    }
  };


  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelimage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  

  return (
<>
<div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>

    <div className="card m-5 mx-auto p-5" style={{ height: "fit-content", width: "fit-content" }}>

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
                validationSchema={Schema1} 
                onSubmit={updateUser}
              >
                {({ values, handleSubmit, handleChange, isSubmitting,errors,touched}) => (
                  <form onSubmit={handleSubmit}>

                    <div className="d-flex flex-column">
                    <div class="form-outline mb-2">
                        <div class="file-upload-wrapper">
                          <div class="image-body">
                            <input type="file" label='Startup Image' onChange={uploadImage} />
                            {selimage === '' && currentUser.startupimage ==='' ? (
                          <div>{'Image Required'}</div>
                        ) : null}
                          </div>
                        </div>
                      </div>
                      

                      <div className="form-outline mt-4 ms-1">
                      <MDBInput label='Startup Name'id="name" type="text" value={values.name} onChange={handleChange} name="name" />
                      {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                      </div>
                      <div className="form-outline mt-4 ms-1">
                      <MDBInput label='Created At'id="created_at" type="date" value={values.created_at} onChange={handleChange} name="created_at" />
                        
                      </div>

                      <FormControl className="form-outline mt-4 ms-1">
                        <FormLabel id="demo-radio-buttons-group-label">Funded Or Bootstrapped</FormLabel>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="none" name="type" id="type" value={values.type}onChange={handleChange}  >
                          <div className="form-outline ">
                            <FormControlLabel value=" Funded" control={<Radio />} label="Funded" />
                            <FormControlLabel value="Bootstrapped" control={<Radio />} label="Bootstarpped" />

                          </div>
                        </RadioGroup>
                      </FormControl>
                      <label className="mt-3" name="stage"id="stage" value={values.stage}onChange={handleChange}>Select Stages of Startup You Are Interested in Working With</label>
                      <div className="d-flex flex-column  btn-group shadow-0" role="group" aria-label="Basic example">
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
                      
                      </div>

                      <div className="form-outline mt-4 ms-1">
                      <MDBTextArea label='Brief' type="text" id='brief' rows={2} value={values.brief} onChange={handleChange} name="brief" />
                      {errors.brief && touched.brief ? (
                          <div>{errors.brief}</div>
                        ) : null} 
                      </div>
                    </div>

                    

                      <div class="form-outline mb-2">
                        <div class="file-upload-wrapper">
                          <div class="image-body">
                            <MDBFile label='Documents'type="file" id='sdocuments' name="sdocuments" value={values.sdocuments} onChange={uploadImage} />
                            {selimage === '' && currentUser.sdocuments ==='' ? (
                          <div>{'Image Required'}</div>
                        ) : null}

                          </div>
                        </div>
                      </div>
                       

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
                // validationSchema={Schema2} 
                onSubmit={updateUser}
              >
                {({ values, handleSubmit, handleChange, isSubmitting,errors,touched}) => (
                  <Form onSubmit={handleSubmit}>

                    <div className="d-flex flex-column">
                    <div class="form-outline mb-4">
                        <div class="file-upload-wrapper">
                          <div class="image-body">
                           <label htmlFor="Owner Image">Owner Image</label>
                           <br />
                          <input type="file"  onChange={uploadImage} />
                          {selimage === '' && currentUser.owneravatar ==='' ? (
                          <div>{'Image Required'}</div>
                        ) : null}
        
                          </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        

                      <div className="form-outline mb-4">
                      <MDBInput label='Owner Name'id="ownername" type="text" value={values.ownername} onChange={handleChange} name="ownername" />
                      {errors.ownername && touched.ownername ? (
                          <div>{errors.ownername}</div>
                        ) : null}
                        


                            
                         
                       </div>

                      </div>
                      <div>
                      <div class="form-outline mb-4">
                        <div class="file-upload-wrapper">
                          <div class="image-body">
                            <MDBFile label='Identity Proof(Aadhar Card/PAN/VoterID)'type="file" id='identityproof' name="identityproof" value={values.identityproof} onChange={uploadImage} /></div>
                            {selimage === '' && currentUser.identityproof ==='' ? (
                          <div>{'Image Required'}</div>
                        ) : null}</div>
                        </div>
                        
                      <div className="form-outline mb-4">
                      <MDBInput label='Identity No' id="identityno" name="identityno"type="text" value={values.identityno} onChange={handleChange}/>
                      {errors.identityno && touched.identityno? (
                          <div>{errors.identityno}</div>
                        ) : null}
                      </div>
                      <div>
                      <div class="form-outline mb-4">
                        <div class="file-upload-wrapper">
                          <div class="image-body">

                            <MDBFile label='Document'type="file" id='documents' name="documents" value={values.documents} onChange={uploadImage} /></div>
                            {selimage === '' && currentUser.documents ==='' ? (
                          <div>{'Image Required'}</div>
                        ) : null}
                       
                          </div>
                        </div>
                         </div>
                      <div className="col">
                        <div className="form-outline mb-4">
                        <MDBInput label='Contact' type="text"id="ownercontact" name="ownercontact"  value={values.ownercontact} onChange={handleChange}/>
                          
                        </div>
                      </div>

                      <div className="col">
                     
                        <div className="form-outline mb-4">
                          <MDBInput label='Email ' type="email" id="owneremail" value={values.owneremail} onChange={handleChange} name="email" />
                        </div>
                        {errors.owneremail && touched.owneremail ? (
                          <div>{errors.owneremail}</div>
                        ) : null}
                      </div>
                      <div className="form-outline mb-4">
                      <MDBInput label='No of members in team ' type="number" id="teammemberno" value={values.teammemberno} onChange={handleChange} name="teammemberno" />
                        
                      </div>
                      <div className="form-outline mb-4">
                      <MDBTextArea label='Members Of Team' type="text" id='teammembers' rows={2} value={values.teammembers} onChange={handleChange} name="teammembers" />
                        
                      </div>
                    </div>
                    <div>
                      <div class="form-outline mb-4">
                        <div class="file-upload-wrapper">
                          <div class="image-body">
                            <MDBFile label='Image Of The Product'type="file" id='productimage' name="productimage" value={values.productimage} onChange={uploadImage} /></div>
                          {selimage === '' && currentUser.productimage ==='' ? (
                          <div>{'Image Required'}</div>
                        ) : null}</div>
                        </div>
                         </div>
                    
                    <div className="form-outline mb-4">
                    <MDBInput label=' Name Of Product' type="text" id="productname" value={values.productname} onChange={handleChange} name="productname" />
                    {errors.productname && touched.productname ? (
                          <div>{errors.productname}</div>
                        ) : null}
                    </div>
                    <div className="form-outline mb-4 ">
                      
                    <MDBTextArea label='Description Of Product' type="text" id='productdescription' rows={2} value={values.productdescription} onChange={handleChange} name="productdescription" /> 
                    {errors.productdescription  && touched.productdescription ? (
                          <div>{ }</div>
                        ) : null}
                    </div>
                    <button disabled={isSubmitting} type="submit" className="btn btn-block mb-1" style={{ backgroundColor: "#9c3353", color: "#fffefe" }}>
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm"  aria-hidden="true"></span>
                        :
                        'Next'
                    }
                  </button>
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
                validationSchema={Schema3} 
                onSubmit={updateUser}
              >
                {({ values, handleSubmit, handleChange, isSubmitting ,errors,touched}) => (
                  <form onSubmit={handleSubmit} >
                    <div className="row mb-4 form-floating " >
                      <div className="col">
                        <div className="form-outline mb-4">
                          <MDBInput label='Email Address' type="text" value={values.email} onChange={handleChange} name="email" />
                          {errors.email && touched.brief ? (
                          <div>{errors.email}</div>
                        ) : null} 
                        </div>

                      </div>
                      <div className="col">
                        <div className="form-outline mb-4">
                        <MDBInput label=' Mobile' type="text" id="tel" value={values.tel} onChange={handleChange} name="tel" />
                        {errors.tel && touched.tel ? (
                          <div>{errors.tel}</div>
                        ) : null} 
                        </div>
                      </div>
                    </div>


                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline mb-4">
                        <MDBInput label=' State' type="text" id="state" value={values.state} onChange={handleChange} name="state" />
                          
                        </div>
                        <div className="col">
                          <div className="form-outline mb-4">
                          <MDBInput label='City ' type="text" id="City" value={values.city} onChange={handleChange} name="city" />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4 form-floating">
                      <div className="col">
                        <div className="form-outline mb-4">
                        <MDBInput label='Website ' type="text" id="website" value={values.website} onChange={handleChange} name="website" />
                         
                        </div>
                        <div className="col">
                          <div className="form-outline mb-4">
                          <MDBInput label='Mobile App Link ' type="text" id="app" value={values.app} onChange={handleChange} name="app" />
                           
                          </div>
                        </div>
                      </div>
                    </div>

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
                validationSchema={Schema4} 
                onSubmit={updateUser}
              >
                {({ values, handleSubmit, handleChange, isSubmitting ,errors,touched}) => (
                  <form onSubmit={handleSubmit} >
                    <div className="col-12 mb-4">
                      <label htmlFor="select1"> Industry</label><br/>
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
                    <div className="col-12 mb-4">
                   
                      <label htmlFor="select2">Sector</label><br/>
                      
                      <select
                       // style={{ width: "200px" }}
                        className="select"
                        name="sector"
                        value={values.sector}
                        onChange={handleChange}
                      >
                        <FormLabel>Sector</FormLabel>
                        <option value="Technology">Technology</option>
                        <option value="Sports">Sports</option>
                        <option value="Entertainment">Entertainment</option>
                      </select>
                      </div>
                    
                    <div className="col-12 mb-4">
                    
                      <label htmlFor="select3">Interests</label><br/>
                      <select
                        className="select"
                        name="interests"
                        value={values.interests}
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
                      <div className="form-outline mb-4">
                      <MDBInput label='Udyog Aadhar ' type="text" id="aadhar" value={values.aadhar} onChange={handleChange} name="aadhar" />
                       <br/>
                       {errors.aadhar && touched.aadhar ? (
                          <div>{errors.aadhar}</div>
                        ) : null} 
                      </div>
                      
                    </div>

                    <FormControl className="ps-3 pb-4">
                      <FormLabel id="demo-radio-buttons-group-label">Your Interests</FormLabel><br/>
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

                    <a disabled={isSubmitting} href="/startup/dashboard" type="submit" className="btn btn-block mb-1" style={{ backgroundColor: "#9c3353", color: "#fffefe" }}>
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm"  aria-hidden="true"></span>
                        :
                        'Submit'
                    }
                  </a>
                  </form>
                )}
              </Formik>
              {/* fourth form end  */}
            </div>
          </div>

        </div>


      </div>

    </div>
</>
  )
};

export default Register