import React from 'react'

const FaqSection = () => {
  return (
<>
    <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>
    <div className='justify-content-center align-items-center row' style={{height:"80vh"}}>

          <div className=' mx-auto' style={{width:"70%"}}>
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
                            How do startups and investors connect with mentors/experts ?
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
                          A startup/investor is allowed to connect with the mentors and experts . This is done by simply clicking on the “Chat” button on the mentor’s profile.
                           Once you accept a connection request, the startup/ investor can reach out to you through a simple chat interface. 
                           You can know more about the mentors which has connected with you by clicking on their profile and reading up about them.
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
                           My entity does not have a PAN . Would I be allowed to register it as a 'Startup' ?
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
                             Yes , an  entity without a PAN can be registered as a startup on our website .However it is advised that a valid 
                             PAN of the entity is provided at the time of registration .
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingtwo">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapsetwo"
                              aria-expanded="false"
                              aria-controls="collapsetwo"
                          >
                             What is a DPIIT-recognized startup?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapsetwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingtwo"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                          An entity shall be considered a “Startup” –
                         If it’s incorporated as either Private Limited Company or Registered Partnership Firm or Limited Liability Partnership. A sole proprietorship or a public limited company is not eligible as startup
                         If it is up to 10 years from the date of its incorporation/ registration
                         If its turnover for any of the financial years has not exceeded INR 100 crore
                         If it is working towards innovation, development or improvement of products or processes or services, or if it is a scalable business model with a high potential of employment generation or wealth creation
                         Should not have been formed by splitting up or reconstruction of a business already in existence.
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                          >
                              What are the parameters for evaluation of startup applicants?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                              There are some major criterias such as Is there a need for this idea? , Feasibility , Its Potential Impact , team
                              Fund Utilization Plan , Presentation of Idea and some additional parameters . 
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                          >
                           How much amount can a startup receive under the funding?   
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                          Up to Rs. 5 Lakhs as grant for validation of Proof of Concept, or prototype development, or product trials. The grant shall be disbursed in milestone-based installments. These milestones can be related to development of prototype, product testing, building a product ready for market launch, etc.
Up to Rs. 10 Lakhs of investment for market entry, commercialization, or scaling up through convertible debentures or debt or debt-linked instruments.
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          </div>
     </  >
  )
}

export default FaqSection