import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const AddBlog = () => {

  const url = app_config.apiurl;
  const navigate = useNavigate();
  const [selImage, setSelImage] = useState();

  const BlogSubmit = async (formdata, { setSubmitting }) => {
    formdata.image = selImage;
    console.log(formdata);


    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

    setSubmitting(true);
    const res = await fetch(url+"/Blog/add", {
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
        <div className="card" >
          <div className="card-body">
            <p className="text-center h4">Blog</p>
            <hr />
            <Formik initialValues={{ heading: "", content: "",image:"" }} onSubmit={BlogSubmit}>
             {({ values, handleSubmit, handleChange, isSubmitting }) => (
               <form onSubmit={handleSubmit} >
                   <label>Heading</label>
                   <input value={values.heading} onChange={handleChange} name="heading" type="text" className="form-control" />

                   <label>Content</label>
                  <textarea name="content" className="form-control" value={values.content} onChange={handleChange} cols="5" rows="5" style={{resize:"none"}}></textarea>
                 
                 
                  <label>Image</label>
                  <input className="form-control mb-3" type="file" onChange={uploadFile}/>
                 
                 <div className="d-flex justify-content-center align-item-center">
                  <button disabled={isSubmitting} type="submit" className="btn " style={{backgroundColor:"#9c3353", color:"white"}}>
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

export default AddBlog;