import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddNews = () => {

  const navigate = useNavigate();

  const newsSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);


    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

    setSubmitting(true);
    const res = await fetch("http://localhost:5000/News/add", {
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

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <p className="text-center h4">News</p>
            <hr />
            <Formik initialValues={{ date: "",heading: "", content: "",image:"" }} onSubmit={newsSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <label>Date</label>
                  <input value={values.date} type="date" onChange={handleChange} name="date" className="form-control" />

                  <label>Heading</label>
                  <input value={values.heading} onChange={handleChange} name="heading" type="text" className="form-control" />

                  <label>Content</label>
                  <input value={values.content} onChange={handleChange} name="content" type="text" className="form-control" />

                  <label>Image</label>
                  <input value={values.image} className="form-control mb-3" type="file" name="image" onChange={handleChange}/>
                 
                  <button disabled={isSubmitting} type="submit" className="btn btn-primary">
                    {
                      isSubmitting ?
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        :
                        'Submit'
                    }
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNews;