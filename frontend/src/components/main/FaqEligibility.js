import { height } from '@mui/system'
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
                             My entity does not have a PAN , would i allowed to register it as a startup ?
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
                            Yes, an entity without a PAN can be registered as a Startup on our website. However, it is advised that a valid PAN of the entity is provided at the time of registration
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
                              What are the  documents required by the startups?  
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
                            The process of register as a ‘Startup’ is through an  application form made over the website.You will need 
                            to upload the all the required documents such as PAN number , identity proof , DPIIT certification ,udyog 
                            aadhar etc and explain how your startup is working towards
                             innovation, development or improvement of products or processes or services, or its scalability in terms 
                             of employment generation or wealth creation. For more details please check our eligibility section.
  
   
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
                                 What are the  documents required by the investors?  
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
                            The process of register as a ‘Investor’ is through an  application form made over the website.You will need 
                            to upload the all the required documents such as Identity Proof Number , Identity Proof , DPIIT Enpanelment Number etc 
                            and  all the information such as what is the duration , stages of the startup you are interested in working with , current incubatees 
                            your areas of interests.
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