import React from 'react'

const Eligibility = () => {
  return (
     
        <div className='section2'>
            
            <div className='mb-5'>
                <h1 class="d-flex justify-content-center mb-4">Eligibility Criteria</h1>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card p-4">
                            <div className='row-md-3'>
                                <img class="eligible1-image" src="\seed.png" alt="" />
                            </div>
                            <div className='row-md-9'>
                              <h3 className='text-center'>For Startup</h3>
                              <p><i class="fa fa-circle" aria-hidden="true"></i>
                                  &nbsp;
                                  A startup, recognized by DPIIT, incorporated not more than 2 years ago at the time of application.</p>
                              <p><i class="fa fa-circle" aria-hidden="true"></i>
                                  &nbsp;
                                  The startup must have a business idea to develop a product or a service with a market fit, viable commercialization, and scope of scaling.
                              </p>

                              <div className='text-center mt-5'>
                                 <a className='btn' style={{ backgroundColor: "#9c3353", color: "#fffefe" }} href="/main/eligible">
                                  More Details
                                 </a>
                              </div>
                            </div>
                           
                        </div>
                    </div>

                    <div class="col-md-3" >
                        <div class="card p-4" >

                        <div className='row-md-3'>
                            <img class="eligible2-image" src="\plant.jpg" alt="" />
                        </div>


                        <div className='row-md-9'>
                        <h3 className='text-center'>For Investor</h3>

                              <p><i class="fa fa-circle" aria-hidden="true"></i>
                                  &nbsp;
                                  The incubator should be operational for at least two years on the date of application to the scheme
                             </p>
                              <p><i class="fa fa-circle" aria-hidden="true"></i>
                                  &nbsp;
                                  The incubator must have facilities to seat at least 25 individuals
                              </p>

                              <p><i class="fa fa-circle" aria-hidden="true"></i>
                                  &nbsp;
                                  The incubator must be a legal entity
                              </p>

                                <div className='text-center mt-5'>
                                 <a className='btn' style={{ backgroundColor: "#9c3353", color: "#fffefe" }} href="/main/eligible/">
                                  More Details
                                 </a>
                              </div>
 
                            </div>



                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
    

    )
}

export default Eligibility