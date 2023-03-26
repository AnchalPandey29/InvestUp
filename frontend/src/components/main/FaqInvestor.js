import React from 'react'

const FaqSection = () => {
  return (
    <>
    <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>
    <div className='justify-content-center align-items-center row' style={{height:"80vh"}}>

          <div className='  mx-auto' style={{width:"70%"}}>
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
                              What is my name?
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
                              <strong>This is the first item's accordion body.</strong> It is shown by
                              default, until the collapse plugin adds the appropriate classes that we
                              use to style each element. These classes control the overall appearance,
                              as well as the showing and hiding via CSS transitions. You can modify
                              any of this with custom CSS or overriding our default variables. It's
                              also worth noting that just about any HTML can go within the{" "}
                              <code>.accordion-body</code>, though the transition does limit overflow.
                          </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                          <button
                              className="accordion-button collapsed"
                              type="button"
                              data-mdb-toggle="collapse"
                              data-mdb-target="#basicAccordionCollapsetwo"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                          >
                              What is my name?
                          </button>
                      </h2>
                      <div
                          id="basicAccordionCollapsetwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-mdb-parent="#basicAccordion"
                          style={{}}
                      >
                          <div className="accordion-body">
                              <strong>This is the first item's accordion body.</strong> It is shown by
                              default, until the collapse plugin adds the appropriate classes that we
                              use to style each element. These classes control the overall appearance,
                              as well as the showing and hiding via CSS transitions. You can modify
                              any of this with custom CSS or overriding our default variables. It's
                              also worth noting that just about any HTML can go within the{" "}
                              <code>.accordion-body</code>, though the transition does limit overflow.
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
                              How to apply for startups?
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
                              <strong>This is the second item's accordion body.</strong> It is hidden
                              by default, until the collapse plugin adds the appropriate classes that
                              we use to style each element. These classes control the overall
                              appearance, as well as the showing and hiding via CSS transitions. You
                              can modify any of this with custom CSS or overriding our default
                              variables. It's also worth noting that just about any HTML can go within
                              the <code>.accordion-body</code>, though the transition does limit
                              overflow.
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
                              What are the eligibility requiremets for investor?
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
                              <strong>This is the third item's accordion body.</strong> It is hidden
                              by default, until the collapse plugin adds the appropriate classes that
                              we use to style each element. These classes control the overall
                              appearance, as well as the showing and hiding via CSS transitions. You
                              can modify any of this with custom CSS or overriding our default
                              variables. It's also worth noting that just about any HTML can go within
                              the <code>.accordion-body</code>, though the transition does limit
                              overflow.
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