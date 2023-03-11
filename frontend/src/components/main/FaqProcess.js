import React from 'react'

const FaqSection = () => {
  return (

          <div className=' card mx-auto' style={{width:"70%"}}>
              <div className="accordion w-100" id="basicAccordion">
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                          >
                             Is the process completely online?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                              The application submission is completely online, and no physical submisssion of documents is required.
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                          >
                             Is there any fee for applying here ?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                              There are no application fees for registration . But if you want to get advance services you need to pay some subscription charges.
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                          >
                             What are the eligibility and requirements critera for the application process ?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                             
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>

       
  )
}

export default FaqSection