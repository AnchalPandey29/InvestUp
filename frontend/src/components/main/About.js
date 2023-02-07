// import React, { useState, useEffect } from 'react';
// import {
//     motion,
//     useScroll,
//     useSpring,
//     useTransform,
//     MotionValue
//   } from "framer-motion";
  

// const About = () => {
//   const [show, setShow] = useState(false);
//   const fade = useSpring({
//     opacity: show ? 1 : 0,
//     from: { opacity: 0 },
//   });

//   useEffect(() => {
//     setShow(true);
//   }, []);


//   return (
//     <animated.div style={fade}>
//       
//     </animated.div>
//   )
// }

// export default About;


// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue, useTransform } from 'framer-motion';

// const AboutUs = () => {
    
  

//   return (
    
//       <div className="about-us-card">
      
      
//       <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-investment-2496116-2088556.png" alt="" />
        
       
//         <h2>About Us</h2>
//         <p >
//           Our website is a reliable platform for startups and investors to grow their businesses together. We are intended to catalyze the startup culture and build a strong and inclusive ecosystem for innovation and entrepreneurship in India by offering them numerous services and opportunities.
//         </p>
      
//     </div>
//   );
// };
// export default AboutUs;


// import { AnimatePresence, motion } from "framer-motion"

// function Card({ image, imageAlt }) {
//   return (
//     <motion.div
//       initial={{ x: -100 }}
//       animate={{ x: 0 }}
//       exit={{ x: 100 }}
//       transition={{ duration: 0.5 }}
//       className="card"
//     >
//       <img src={image} alt={imageAlt} />
//     </motion.div>
//   )
// }

// function About() {
//     const images = [
//       "https://cdni.iconscout.com/illustration/premium/thumb/business-investment-2496116-2088556.png",
//       "https://cdni.iconscout.com/illustration/premium/thumb/startup-idea-3374849-2804221.png",
//       "https://cdni.iconscout.com/illustration/premium/thumb/business-startup-5383913-4498701.png",
//       "https://cdni.iconscout.com/illustration/premium/thumb/startup-3750487-3132252.png"
//     ]
  
//     return (
//       <AnimatePresence>
//         {images.map((image, index) => {
//           const isEven = index % 2 === 0
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: isEven ? 100 : -100 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Card image={image} imageAlt={`Image ${index + 1}`} />
//             </motion.div>
//           )
//         })}
//       </AnimatePresence>
//     )
//   }
  

//export default About



import React from "react";
import './about.css'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="row">

          <div className="about col-md-5" style={{ display: "inline-block", padding: 0 }}>
              <motion.div
                  animate={{ y: "-100%" }}
                  transition={{ yoyo: Infinity, duration: 5 }}
                  style={{ width: "50%", height: "100%", padding: 0 }}
              >
                  <motion.img
                      className="aboutimg"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/business-investment-2496116-2088556.png"
                      alt="img1"
                      initial={{ y: "20%" }}
                  />

                  {/*         
        <motion.img
          className="aboutimg"
          src="https://cdni.iconscout.com/illustration/premium/thumb/startup-3750487-3132252.png"
          alt="img4"
          initial={{ y: "50%" }}
        /> */}
                  <motion.img
                      className="aboutimg"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/startup-idea-3374849-2804221.png"
                      alt="img2"
                      initial={{ y: "55%" }}
                  />
                  <motion.img
                      className="aboutimg"
                      src="https://cdni.iconscout.com/illustration/premium/thumb/business-startup-5383913-4498701.png"
                      alt="img3"
                      initial={{ y: "90%" }}
                  />
              </motion.div>

          </div>

          <div className="col-md-7 d-flex flex-column justify-content-center " >
              <h1>About Us</h1>
              <p>We are a startup funding website that provides a common platform for fund raising and investing. Our goal is to make it easier for startups to find funding and for investors to discover new investment opportunities.</p>
              <p>Our platform offers various features such as consultancy, direct chat with investors, the ability to organize campaigns, and access to blogs and news. We also offer premium subscriptions for access to advanced services.</p>      <p>Join us today and take advantage of the opportunities we offer to help your startup succeed!</p>
          </div>
    </div>
  );
};

export default About;
