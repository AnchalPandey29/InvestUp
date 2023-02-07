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