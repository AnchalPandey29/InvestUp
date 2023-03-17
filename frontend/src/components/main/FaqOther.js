import React from 'react'

const FaqSection = () => {
  return (
    <>
    <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>
    <div className='justify-content-center align-items-center row' style={{height:"80vh"}}>

          <div className=' mx-auto' style={{width:"70%"}}>
              <div className="accordion w-100" id="basicAccordion">
                  
                  
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
                             If the startup requires help for finalizing their engagement with the investor , who will bear the cost of these services ?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                             The startups shall pay a nominal charges for any  of the consultancy services by the experts advisor who will guide them in finalizing 
                             their funding engagement with investors.
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
                             Is there any fees for applying as a startup or a investor ?
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
                              There are no application fees for applying as a startup or an investor . 
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
                             Is the information provided by me in the application form kept confidential ?
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
                              We maintain confidentiallity of all the proposals we receive . Details will be shared with the interested investors only for further processing.
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                          >
                             What factors are considered by the investors to invest in startup?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                          Different investors use different criteria to judge an investment. The importance of these factors would wary depending on the stage of investment, sector of startup, management team etc. 
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSeven">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                          >
                             Can I provide two mobile numbers in the application form ?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapseSeven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                          Only one mobile number of the authorised representative of the entity can be provided in the application . The number provided at the time 
                          of application use to complete the authentication and registration process .
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
    </>   
  )
}

export default FaqSection