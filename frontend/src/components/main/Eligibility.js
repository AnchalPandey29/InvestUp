import React from 'react'

const Eligibility = () => {
  return (
        <div>
            <div className='mb-5'>
                <h1 class="d-flex justify-content-center ">Eligibility Criteria</h1>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card p-4">
                            <div class="eligibility1">
                                <img class="eligible1-image" src="\seed.png" alt="" />
                            </div><h3>For Startup</h3>
                            <p><i class="fa fa-circle" aria-hidden="true"></i>
                                &nbsp;
                                A startup, recognized by DPIIT, incorporated not more than 2 years ago at the time of application.</p>
                            <p><i class="fa fa-circle" aria-hidden="true"></i>
                                &nbsp;
                                The startup must have a business idea to develop a product or a service with a market fit, viable commercialization, and scope of scaling.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3"><div class="card p-4">
                        <div class="eligibility2">
                            <img class="eligible2-image" src="\plant.jpg" alt="" />
                        </div><h3>For Investor</h3>
                        <p>
                            <i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
                            The incubator should be operational for at least two years on the date of application to the scheme
                        </p>
                        <p>
                            <i class="fa fa-circle" aria-hidden="true">
                            </i>&nbsp; The incubator must have facilities to seat at least 25 individuals</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eligibility