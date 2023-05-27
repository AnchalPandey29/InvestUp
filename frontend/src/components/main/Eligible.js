import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";

const Eligible = () => {
  return (
    <>
    <div
    className="row"
    style={{ height: "30vh", backgroundColor: "#9c3353"}}>
    <h1 className='text-center' style={{color:"white",marginTop:"90px"}}>Eligibility Criteria</h1>

    </div>
  <div className='mx-5'>
     

    <div className='m-5'>
      <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true"
          >Startup</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="ex1-tab-2"
            data-mdb-toggle="tab"
            href="#ex1-tabs-2"
            role="tab"
            aria-controls="ex1-tabs-2"
            aria-selected="false"
          >Investor</a
          >
        </li>

      </ul>
  <div class="tab-content" id="ex1-content">
        <div
          class="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          align="justify"

          aria-labelledby="ex1-tab-1">
          <div class="col"  >


            <div className='row start' ></div>
            <p><i class="fa fa-circle" aria-hidden="true"></i>
              &nbsp;
              A startup, recognized by DPIIT, incorporated not more than 2 years ago at the time of application.</p>
            <p><i class="fa fa-circle" aria-hidden="true"></i>
              &nbsp;
              The startup must have a business idea to develop a product or a service with a market fit, viable commercialization, and scope of scaling.
            </p>
            <p><i class="fa fa-circle" aria-hidden="true"></i>
              &nbsp;
              The startup should incorporate technology into its main product or service, business plan, distribution strategy, or technique in order to address the issue at hand.
            </p>
            <p><i class="fa fa-circle" aria-hidden="true"></i>
              &nbsp;
              In accordance with any other Central or State Government programme, Startup should not have had greater financial assistance than Rs 10 lakh. This excludes prize money from contests and big challenges, free workspace, a monthly founder allowance, access to labs, and access to prototype facilities.

            </p>
            <p><i class="fa fa-circle" aria-hidden="true"></i>
              &nbsp;
              Startups developing cutting-edge solutions in fields like social impact, waste management, water management, financial inclusion, inclusion of underserved populations, education, agriculture, food processing, biotechnology, healthcare, energy, mobility, defence, space, railways, oil and gas, textiles, etc. would be given preference.
            </p>
            <p><i class="fa fa-circle" aria-hidden="true"></i>
              &nbsp;
              According to the program's rules, a startup applicant may receive seed funding once each in the form of a grant and in the form of debt or convertible debentures.
            </p>
            <div className='row text-center'>
                  <div className='col-md-6 text-center mt-5'>
                    <a className='btn' style={{ backgroundColor: "#9c3353", color: "#fffefe" }} href="/main/signup/">
                      Apply Now
                    </a>
                  </div>
                  <div className="col-md-6">
                    <Link className="btn mx-auto mt-5" style={{ background: "#9c3353", color: "white", width: "fit-content" }} to="/main/home">Back to Home</Link>
                  </div>
                </div>
          </div>

        </div>
        <div class="col"  >


          <div className='row' >

            <div class="tab-pane fade invest" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
              <p><i class="fa fa-circle" aria-hidden="true"></i>
                &nbsp;
                The incubator must be a recognised business:
                - A society that has been registered under the Societies Registration Act of 1860; - A trust that has been registered under the Indian Trusts Act of 1882; - A private limited company that has been registered under the Companies Act of 1956 or the Companies Act of 2013; or - A statutory body established by an Act of the legislature</p>
              <p><i class="fa fa-circle" aria-hidden="true"></i>
                &nbsp;
                While applying for the programme, the incubator must have been in existence for at least one years.
              </p>
              <p><i class="fa fa-circle" aria-hidden="true"></i>
                &nbsp;
                The incubator must have facilities to seat at least 20 individuals.</p>
              <p><i class="fa fa-circle" aria-hidden="true"></i>
                &nbsp;
                On the date of application, there must be physically 3 businesses being incubated at the incubator.</p>
              <p><i class="fa fa-circle" aria-hidden="true"></i>
                &nbsp;
                The incubator must have a full-time CEO with business development and entrepreneurial expertise who is backed by a competent staff capable of assisting companies in idea testing and idea validation as well as in financial, legal, and human resources tasks.</p>
              <p><i class="fa fa-circle" aria-hidden="true"></i>
                &nbsp;
                The incubator must be operational for at least two years or
                Must have at least 5 separate startups undergoing incubation in the incubator physically on the date of application or
                Must present audited annual reports for the last 1 years</p>
              <p><i class="fa fa-circle" aria-hidden="true"></i>
                &nbsp;
                whatever other standards that the Experts Advisory Committee may choose (EAC).</p>
                <div className='row text-center'>
                  <div className='col-md-6 text-center mt-5'>
                    <a className='btn' style={{ backgroundColor: "#9c3353", color: "#fffefe" }} href="/main/signup/">
                      Apply Now
                    </a>
                  </div>
                  <div className="col-md-6">
                    <Link className="btn mx-auto mt-5" style={{ background: "#9c3353", color: "white", width: "fit-content" }} to="/main/home">Back to Home</Link>
                  </div>
                </div>
            </div>
          
          </div>



        </div></div>
       
    </div>
  </div>   
  </>

  )
}

export default Eligible;