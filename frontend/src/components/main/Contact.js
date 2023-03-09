

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MDBInput } from 'mdb-react-ui-kit';

const Contact = () => (
  <>
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleSubmit, handleChange, isSubmitting }) => (


        <div className='m-5'>

          <Form className='card p-5 ' style={{ height: "fit-content" }}>
            <div className='px-5'>
            <p className=" h4">Let us know what you think</p>


            <div className='row mt-5'>

              <div className='col-md-6'>
                {/* Name input */}
                <div className="  form-outline mb-4">
                  <MDBInput label='Name' type="text" value={values.name} onChange={handleChange} name="name" />

                </div>
              </div>

              <div className='col-md-6'>
                {/* Email input */}
                <div className=" col-md-6 form-outline mb-4 ">

                  <MDBInput label='Email' type="email" value={values.email} onChange={handleChange} name="email" />

                </div>
              </div>

            </div>


            {/* Message input */}
            <div className="form-outline mb-4">
              <MDBInput label='Message' type="email" placeholder='You can type any suggestions or queries you might have.Let us help you!' value={values.email} onChange={handleChange} name="email" />


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

          </Form>
        </div>

      )}
    </Formik>

  </>
);

export default Contact;
