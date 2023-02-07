// import React from 'react'
// import { Formik, Form, Field } from "formik";
// import { TextField } from "@material-ui/core";
// import * as Yup from "yup";


// const Contact = () => {

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     message: Yup.string().required("Message is required"),
//   });

//   return (
//     <Formik
//       initialValues={{ name: "", email: "", message: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           console.log(values);
//           setSubmitting(false);
//         }, 500);
//       }}
//     >
//       {({ isSubmitting, errors, touched }) => (
//         <Form>
//           <Field
//             name="name"
//             render={({ field, form }) => (
//               <TextField
//                 {...field}
//                 id="name"
//                 label="Name"
//                 variant="outlined"
//                 error={Boolean(touched.name && errors.name)}
//                 helperText={touched.name && errors.name}
//                 fullWidth
//               />
//             )}
//           />

//           <Field
//             name="email"
//             render={({ field, form }) => (
//               <TextField
//                 {...field}
//                 id="email"
//                 label="Email"
//                 variant="outlined"
//                 error={Boolean(touched.email && errors.email)}
//                 helperText={touched.email && errors.email}
//                 fullWidth
//               />
//             )}
//           />

//           <Field
//             name="message"
//             render={({ field, form }) => (
//               <TextField
//                 {...field}
//                 id="message"
//                 label="Message"
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 error={Boolean(touched.message && errors.message)}
//                 helperText={touched.message && errors.message}
//                 fullWidth
//               />
//             )}
//           />

//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   )
// }

// export default Contact


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
        <div className='d-flex flex-column align-items-center justify-content-center 'style={{ height:"100vh"}}>
                <div  style={{ width: "20%" }}>
                    <Form >
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
                            <Field type="checkbox" id="form4Example4" name="copy" checked className="form-check-input me-2" />
                            <label className="form-check-label" htmlFor="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div>
                        {/* Submit button */}
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-block mb-4">Send</button>
                    </Form>
                </div>
            </div>

    )}
  </Formik>
);

export default Contact;
