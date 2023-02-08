import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-dark">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <img src="/logo.png" alt="logo" style={{width:"35px"}} />&nbsp;
                InvestUp
              </h6>
              <p>
              Grow Your Business with InvestUp
              Your seed fund journey begins right here.
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Startup
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Investor
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Subscription
                </a>
              </p>
              
              
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
             
              <p>
                <a href="#!" className="text-reset">
                  News
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Campaign
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Blog
                </a>
              </p>
                         </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> Lucknow, Uttar Pradesh
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                InvestUp@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 91 408 932 88
              </p>
              <p>
                <i className="fas fa-print me-3" /> + 98 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="/main/home">
          InvestUp
        </a>
      </div>
      {/* Copyright */}
    </footer>
  )
}

export default Footer