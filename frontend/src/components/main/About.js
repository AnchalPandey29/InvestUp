

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
                      initial={{ y: "45%" }}
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
