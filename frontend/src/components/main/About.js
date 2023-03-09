

import React from "react";
import './about.css'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={{height:"100%"}}>

      <div className="row justify-content-center p-5" style={{ height: "40vh", backgroundColor: "#9c3353" }}>

        <h1 className="text-center" style={{ color: "white", marginTop: "50px" }}>About InvestUp</h1>

      </div>

      <div className="row justify-content-center mx-auto" style={{marginTop:"-100px" , height:"500px"}}>

        <div className="col-md-4 p-4 mx-3 my-4 card justify-content-center align-items-center" style={{ backgroundColor: "white" ,width:"300px"}}>

          <div className="row " >
            <div className="col-md-3 mb-2">
                <img src="https://cdn-icons-png.flaticon.com/512/3133/3133430.png" alt="" style={{width:"50px"}}/>
            </div>
            <div className="col-md-9">
              <p>Connecting Investors to Innovators. <br /> Simplifying Seed Funding for Startups</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-4  mx-3 my-4 card justify-content-center align-items-center" style={{ backgroundColor: "#fea5c0" ,width:"300px"}}>

          <div className="row">
            <div className="col-md-3 mb-2">
              <img src="https://cdn-icons-png.flaticon.com/512/9576/9576835.png" alt="" style={{width:"50px"}}/>
            </div>
            <div className="col-md-9">
              <p>Seeding Success with direct connections <br />Chat with your ideal investors, hassle-free!</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4  p-4  mx-3 my-4 card  justify-content-center align-items-center" style={{ backgroundColor: "white", width: "300px" }}>

<div className="row">
  <div className="col-md-3 mb-2">
  <img src="https://cdn-icons-png.flaticon.com/512/7656/7656523.png" alt="" style={{width:"50px"}}/>

  </div>
  <div className="col-md-9">
    <p>Invest in innovation with confidence <br />Let us connect you to the promising startups!</p>
  </div>
</div>
</div> 
        <div className="col-md-4 p-4  mx-3 my-4 card  justify-content-center align-items-center" style={{ backgroundColor: "#fea5c0", width: "300px" }}>

          <div className="row">
            <div className="col-md-3 mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/1651/1651707.png" alt="" style={{width:"50px"}}/>

            </div>
            <div className="col-md-9">
              <p>Shine bright with the expert guidance <br />Let our consultants help turn your startup idea into a shining story</p>
            </div>
          </div>
        </div>
       
        <div className="col-md-4 p-4  mx-3 my-4 card justify-content-center align-items-center" style={{ backgroundColor: "white" ,width:"300px" }}>

<div className="row">
  <div className="col-md-3 mb-2">
  <img src="https://cdn-icons-png.flaticon.com/512/4570/4570180.png" alt="" style={{width:"50px"}}/>

  </div>
  <div className="col-md-9">
    <p>Streamline your startup journey. <br />Join our platform & say goodbye to unneccessary paperwork, middlemen and fees!</p>
  </div>
</div>
</div> 
        <div className="col-md-4 p-4  mx-3 my-4 card justify-content-center align-items-center" style={{ backgroundColor: "#fea5c0" ,width:"300px"}}>

          <div className="row">
            <div className="col-md-3 mb-2">
                              <img src="https://cdn-icons-png.flaticon.com/512/3251/3251393.png" alt="" style={{width:"50px"}}/>

            </div>
            <div className="col-md-9">
              <p>Your gateway to growth <br />Get access to valuable services & connect with a world of startup opportunities and investor services</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4  p-4 mx-3 my-4 card  justify-content-center align-items-center" style={{ backgroundColor: "white" ,width:"300px"}}>

          <div className="row">
            <div className="col-md-3 mb-2">
              <img src="https://cdn-icons-png.flaticon.com/512/2498/2498074.png" style={{width:"50px"}} alt="" />
            </div>
            <div className="col-md-9">
              <p>Launch your startups to new heights <br />Access powerful business services & connect with investors on our platform today</p>
            </div>
          </div>
        </div> 
        <div className="col-md-4 p-4  mx-3 my-4 card  justify-content-center align-items-center" style={{ backgroundColor: "#fea5c0" ,width:"300px"}}>

          <div className="row">
            <div className="col-md-3 mb-2">
            <img src="https://cdn-icons-png.flaticon.com/512/5333/5333243.png" style={{width:"50px"}} alt="" />
            </div>
            <div className="col-md-9">
              <p>Balanced deals, greater opportunities <br />Let us be the weighing scale between investors & startups for a successful partnership!</p>
            </div>
          </div>
        </div>
    
      </div>

      {/* <div className="row card " >
              
              <p>We are a startup funding website that provides a common platform for fund raising and investing. Our goal is to make it easier for startups to find funding and for investors to discover new investment opportunities.</p>
              <p>Our platform offers various features such as consultancy, direct chat with investors, the ability to organize campaigns, and access to blogs and news. We also offer premium subscriptions for access to advanced services.</p>      <p>Join us today and take advantage of the opportunities we offer to help your startup succeed!</p>
          </div>
 */}


    </div>
  );
};

export default About;
