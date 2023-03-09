import React from 'react'
const Faq = () => {
  return (
    
    <>
      <div style={{height:"40vh",backgroundColor:"#9c3353"}}>
        <h1 className='text-center ' style={{color:"white",marginTop:"100px"}}>Hi, how can we help you?</h1>
      </div>

      <div className='row mx-auto justify-content-center align-items-center mb-5 px-5' style={{color:"pink",height:"fit-content",marginTop:"-100px"}}>
        <div className='col-md-3 m-2 card p-3' style={{backgroundColor: "#fea5c0"}} >
          <a href="/main/query" style={{color:"black"}}>
          <div className='row ps-2 justify-content-center align-items-center mt-4'>
            <div className='col-md-3 '>
            <img src="https://cdn-icons-png.flaticon.com/512/9003/9003702.png" style={{width:"50px"}} alt="" />
            </div>
            <div className='col-md-9 ' >
              <h5>
                Top Queries
              </h5>
              <p>Click here to read the common queries that users have</p>
            </div>
          </div>
          </a>
        </div>

        <div className='col-md-3 m-2 card p-3' >
        <a href="/main/faqstartup" style={{color:"black"}}>
        <div className='row ps-2 justify-content-center align-items-center mt-4'>
            <div className='col-md-3 '>
              <img src="https://cdn-icons-png.flaticon.com/512/9851/9851051.png" alt="" style={{ width: "50px" }} />
            </div>
            <div className='col-md-9 ' >
              <h5>
                For Startups
              </h5>
              <p>Click here to read the common queries that users have</p>
            </div>
          </div>
          </a>
        </div>

        <div className='col-md-3 m-2 card p-3' style={{backgroundColor: "#fea5c0"}}>
        <a href="/main/faqinvestor" style={{color:"black"}}>

        <div className='row ps-2 justify-content-center align-items-center mt-4'>
            <div className='col-md-3 '>
              <img src="https://cdn-icons-png.flaticon.com/512/8701/8701040.png" alt="" style={{ width: "50px" }} />
            </div>
            <div className='col-md-9 ' >
              <h5>
                For Investors
              </h5>
              <p>Click here to read the common queries that users have</p>
            </div>
          </div>
          </a>
        </div>

        <div className='col-md-3 m-2 card p-3'  >
        <a href="/main/faqeligibilty" style={{color:"black"}}>

        <div className='row ps-2 justify-content-center align-items-center mt-4'>
            <div className='col-md-3 '>
              <img src="https://cdn-icons-png.flaticon.com/512/4295/4295910.png" alt="" style={{ width: "50px" }} />
            </div>
            <div className='col-md-9 ' >
              <h5>
                Eligibility
              </h5>
              <p>Click here to read the common queries that users have</p>
            </div>
          </div>
          </a>
        </div>

        <div className='col-md-3 m-2 card p-3' style={{backgroundColor: "#fea5c0"}} >
        <a href="/main/faqprocess" style={{color:"black"}}>

        <div className='row ps-2 justify-content-center align-items-center mt-4'>
            <div className='col-md-3 '>
              <img src="https://cdn-icons-png.flaticon.com/512/6597/6597098.png" alt="" style={{ width: "50px" }} />
            </div>
            <div className='col-md-9 ' >
              <h5>
                Application Process
              </h5>
              <p>Click here to read the common queries that users have</p>
            </div>
          </div>
          </a>
        </div>
        
        <div className='col-md-3 m-2 card p-3 '>
        <a href="/main/faqother" style={{color:"black"}}>

        <div className='row ps-2 justify-content-center align-items-center mt-4'>
            <div className='col-md-3 '>
            <img src="https://cdn-icons-png.flaticon.com/512/134/134808.png" alt="" style={{width:"50px"}}/>
            </div>
            <div className='col-md-9 ' >
              <h5>
                Other
              </h5>
              <p>Click here to read the common queries that users have</p>
            </div>
          </div>
          </a>
        </div> 
      </div>

    </>

  )
}

export default Faq