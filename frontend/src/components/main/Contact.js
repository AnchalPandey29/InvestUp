

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact= () => (
  <Formik
    initialValues={{ name: '', email: '', message: '', copy: true }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
        <div className=' d-flex align-items-center justify-content-center 'style={{ height:"100vh"}}>
                <div >
                    <Form className='card p-5 ' style={{height:"fit-content",width:"400px"}}>
                    <p className="text-center h4">Contact Us</p>
                    <hr className='mx-auto' style={{width:"250px"}}/>

                        {/* Name input */}
                        <div className="form-outline mb-4">
                            <Field type="text" id="form4Example1" name="name" className="form-control" />
                            <label className="form-label" htmlFor="form4Example1">Name</label>
                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <Field type="email" id="form4Example2" name="email" className="form-control" />
                            <label className="form-label" htmlFor="form4Example2">Email address</label>
                        </div>
                        {/* Message input */}
                        <div className="form-outline mb-4">
                            <Field component="textarea" id="form4Example3" name="message" rows="4" className="form-control" />
                            <label className="form-label" htmlFor="form4Example3">Message</label>
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                            <Field type="checkbox" id="form4Example4" name="copy" className="form-check-input me-2" style={{backgroundColor:"#9c3353", color:"#fffefe"}} />
                            <label className="form-check-label" htmlFor="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div>
                        {/* Submit button */}
                        <button type="submit" disabled={isSubmitting} className="btn btn-block mb-4" style={{backgroundColor:"#9c3353", color:"#fffefe"}}>Send</button>
                    </Form>
                </div>
            </div>

    )}
  </Formik>
);

export default Contact;
