import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import app_config from '../../config'

const CampaignBrowser = () => {

    const [campaignList, setCampaignList] = useState([]);

    const url = app_config.apiurl;

    const fetchData = async () => {
        const res = await fetch(url+'/campaign/getall');
        const data = await res.json();
        console.log(data);
        setCampaignList(data.result);
    }

    
    useEffect(() => {
      fetchData();
    }, [])

   
    return (
       <div>

        <div className='row align-items-center justify-content-center ' style={{ height: "40vh", backgroundColor: "#9c3353" }}>
          <div className="col-md-2 mt-4">
            <h1 className='text-center' style={{ color: "white" }}>Campaigns</h1>
          </div>
          <div className="col-md-3 text-center">
            <img src="/news.png" alt="" style={{ width: "400px" }} />
          </div>
        </div>

        <div className="row mt-3" style={{ justifyContent: "center" }}>
          <div className='col-6 d-flex align-items-center ' style={{ height: "40px" }}>
            <label style={{ color: "black" }} className="form-label m-2" htmlFor="category">Sort</label>&nbsp;
            <select className="form-control" name="category" id="category" style={{ width: "70%" }} >

              <option value="all" selected>All</option>
              <option value="technology">Technology</option>
              <option value="entertainmnet">Entertainment</option>
              <option value="sports">Sports</option>
              <option value="food">Food</option>
            </select>
          </div>

          <div className="col-6 input-group  " style={{ width: "40%", height: "36px" }}>
            <div className="form-outline bg-white">
              <input type="search" id="form1" className="form-control rounded" />
              <label className="form-label rounded" htmlFor="form1" >
                Search
              </label>
            </div>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search" />
            </button>
          </div>

        </div>


      <div className='card mx-auto m-5 ms-5 me-5 p-4' style={{ width: "auto", height: "fit-content" }}>



        <div>
            {
                campaignList.map((campaign)=>(
                    <div>
<div className="row gx-5">
          <div className="col-md-6 mb-4">
            <div
              className="bg-image hover-overlay ripple shadow-2-strong rounded-5 "
              data-mdb-ripple-color="light"
            >
              <img
                src={url+'/'+campaign.image}
                className="img-fluid mx-auto"
                style={{ maxHeight: "150px", display: "block" }}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </a>
     
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-primary px-2 py-1 shadow-1-strong mb-3">
              News of the day
            </span>
            <h4>
              <strong> {campaign.heading} </strong>
            </h4>
            <p className="text-muted">
              {campaign.content}
            </p>
            <div>
                <h5>Start Date : 
                    <p>{campaign.startdate}</p>
                </h5>              
            </div>
            <div>
                <h5>End Date : 
                    <p>{campaign.lastdate}</p>
                </h5>              
            </div>
            <Link
             type="button" 
             className="btn" 
             to={"/main/campaigndetails/"+campaign._id} 
             style={{ backgroundColor: "#9c3353", color: "white" }}>
              Read more
            </Link>
          </div>
        </div>

                    </div>
                ))
            }
        </div>
        </div> 
        </div> 
    )
}

export default CampaignBrowser