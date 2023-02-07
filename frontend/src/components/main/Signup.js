import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {

  const navigate = useNavigate();

  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);


    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

    setSubmitting(true);
    const res = await fetch("http://localhost:5000/user/add", {
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
            <p className="text-center h4">Signup Form</p>
            <hr />
            <Formik initialValues={{ name: "", email: "", password: "", age: "" }} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <label>Name</label>
                  <input value={values.name} onChange={handleChange} name="name" className="form-control" />

                  <label>Email Address</label>
                  <input value={values.email} onChange={handleChange} name="email" className="form-control" />

                  <label>Age</label>
                  <input type="number" value={values.age} onChange={handleChange} name="age" className="form-control" />

                  <label>Password</label>
                  <input className="form-control mb-3" type="password" value={values.password} onChange={handleChange} name="password" />

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

export default Signup