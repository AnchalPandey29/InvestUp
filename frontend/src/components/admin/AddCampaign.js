import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import {
  FormLabel, 
} from "@mui/material";

const AddCompaign = () => {

  const url = app_config.apiurl;
  const navigate = useNavigate();
  const [selImage, setSelImage] = useState();


  const compaignSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);
    formdata.image = selImage;


    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

    setSubmitting(true);
    const res = await fetch("http://localhost:5000/campaign/add", {
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

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
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

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card" style={{height:"70vh"}}>
          <div className="card-body">
            <p className="text-center h4">Compaign</p>
            <hr />
            <Formik initialValues={{ title: "", content: "", startdate: "", lastdate: "" , image:"" }} onSubmit={compaignSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <label>Title</label>
                  <input value={values.title} onChange={handleChange} name="title" className="form-control" />

                  <label>Content</label>
                  <textarea name="content" className="form-control"   value={values.content} onChange={handleChange}  rows="2" style={{resize:"none"}}></textarea>

                  <label>Start Date</label>
                  <input className="form-control mb-3" type="date" value={values.startdate} onChange={handleChange} name="startdate" />

                  <label>Last Date</label>
                  <input value={values.lastdate} className="form-control mb-3" type="date" name="lastdate" onChange={handleChange}/>

                  <label>Image</label>
                  <input value={values.image} className="form-control mb-3" type="file" name="image" onChange={uploadFile}/>
                  <div className="col-8 mb-4">
                   
                   <label htmlFor="select2">Category</label><br/>
                   
                   <select
                    style={{ width: "423px" }}
                     className="select"
                     name="category"
                     value={values.category}
                     onChange={handleChange}
                   >
                     <FormLabel>Category</FormLabel>
                     <option value=""></option>
                     <option value="Business">Success Stories</option>
                     <option value="Technology">Technology</option>
                     <option value="Advertisement">Entertainment</option>
                     <option value="IT Services">IT Services</option>
                     <option value="Consulting">Consulting</option>
                     <option value="Marketing">Marketing</option>
                   </select>
                   </div>
            
                  <div className="d-flex justify-content-center align-item-center">                
                  <button disabled={isSubmitting} type="submit" className="btn"  style={{backgroundColor:"#9c3353", color:"white"}}>
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        :
                        'Submit'
                    }
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

export default AddCompaign;