import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MDBInput } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import Header from './Header';
import * as Yup from "yup";


const Contact = () => {

  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);
    setSubmitting(true);
    const res = await fetch(`http://localhost:5000/contact/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

   

    console.log(res.status)
    setSubmitting(false);

    if (res.status === 201) {
      Swal.fire({
        icon: "success",
        title: 'Success',
        text: 'Thank You '
      })
     
    }else{
      Swal.fire({
        icon: "error",
        title: 'Error',
        text: 'Please try again'
      })
    }
  }

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required")
    .max(14, "Name must be atmost 10 characters"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
      
    
    message: Yup.string()
      .max(100, "Message limit exceeded")
      .required("Message is required"),
  });

  return(
    <>
        <Header/>

    <div className='row  p-3 py-5' style={{ backgroundColor: "#9c3353" }}>
      <div className='col-md-5 mt-5 mx-auto mb-5' style={{ color: "white" }}>
        <h2>Contact us</h2>
        <h5>We are here to help you and answer any questions you may have. Here is how to reach us!</h5>
      </div>
      <div className='col-md-5 text-center '>
        <img src="https://i0.wp.com/pages.milaap.org/wp-content/uploads/2022/01/Contact_illustration.png?w=328&ssl=1" alt="" />
      </div>

    </div>
    <Formik
      initialValues={{ name: '', email: '', message: '', copy: true }}
      validationSchema={ContactSchema} // Added the validation schema here
      onSubmit={userSubmit}
    >
      {({ values, handleSubmit, handleChange, isSubmitting, errors, touched, }) => (


        <div className='m-5'>

          <form className='card p-5 ' style={{ height: "fit-content" }}
          onSubmit={handleSubmit}>
            <div className='px-5'>
            <p className=" h4">Let us know what you think</p>


            <div className='row mt-5'>

              <div className='col-md-6'>
                {/* Name input */}
                <div className="  form-outline mb-4">
                  <MDBInput label='Name' type="text" maxLength={15} value={values.name} onChange={handleChange} name="name" />
                  {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                          ) : null}
                </div>
              </div>

              <div className='col-md-6'>
                {/* Email input */}
                <div className=" col-md-6 form-outline mb-4 ">

                  <MDBInput label='Email' type="email" value={values.email} onChange={handleChange} name="email" />
                  {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                          ) : null}
                </div>
              </div>

            </div>


            {/* Message input */}
            <div className="form-outline mb-4">
              <MDBInput label='Message' type="text" maxLength={100} placeholder='You can type any suggestions or queries you might have.Let us help you!' value={values.message} onChange={handleChange} name="message" />
              {errors.message && touched.message ? (
                            <div>{errors.message}</div>
                          ) : null}

            </div>
            {/* Checkbox */}
            <div className="form-check  mb-4 " >
              <Field type="checkbox" id="form4Example4" name="copy" className="form-check-input " style={{ backgroundColor: "#9c3353", color: "#fffefe" }} />
              <label className="form-check-label" htmlFor="form4Example4">
                Send me a copy of this message
              </label>
            </div>
            {/* Submit button */}
            <button type="submit" disabled={isSubmitting} className="btn btn-block mb-4  " style={{ backgroundColor: "#9c3353", color: "#fffefe", width: "200px" }}>Send</button>
            </div>

          </form>
        </div>

      )}
    </Formik>

  </>
  )
}

export default Contact;
