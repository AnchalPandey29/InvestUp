import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import app_config from '../../config'
import Header from '../startup/Header'


const CampaignBrowser = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
    const [campaignList, setCampaignList] = useState([]);
    
    const search =  async (field) => {
      const res = await fetch(url + "/campaign/getall");
      const data = await res.json();
      console.log(data);
      setCampaignList(data.result.filter((user) => ( user[field] === searchKeyword)));
    }
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

    <Header/>

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
            <option value="" selected></option>
              <option value="all" selected>All</option>
              <option value="Business">Business</option>
                     <option value="Technology">Technology</option>
                     <option value="Advertisement">Entertainment</option>
                     <option value="Educational">Educational</option>
                     <option value="Consulting">Consulting</option>
                     <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="col-6 input-group  " style={{ width: "40%", height: "36px" }}>
            <div className="form-outline bg-white">
              <input type="search" id="form1" className="form-control rounded" />
              <label className="form-label rounded" htmlFor="form1" >
                Search
              </label>
            </div>
            <button type="button" className="btn btn-primary" 
             onClick={e => search('category')}>
          
              <i className="fas fa-search" />
            </button>
          </div>

        </div>


      <div className='mx-auto m-5 ms-5 me-5 p-4' style={{ width: "auto", height: "fit-content" }}>



        <div >
            {
                campaignList.map((campaign)=>(
                    <div className=' card p-3 mb-3'>
<div className="row gx-5 justify-content-center align-items-center">
          <div className="col-md-6 mb-4">
            <div
              className="bg-image hover-overlay ripple shadow-2-strong rounded-5 "
              data-mdb-ripple-color="light"
            >
              <img
                src={url+'/'+campaign.image}
                className="img-fluid mx-auto"
                style={{ maxHeight: "250px", display: "block" }}
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
           
            <h4>
              <strong> {campaign.title} </strong>
            </h4>
            <p style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}> {campaign.content}</p>
           
            <div>
                <h5>Start Date : 
                </h5>              
                <p>{new Date(campaign.startdate).toLocaleDateString()}</p>
            </div>
            <div>
                <h5>End Date : 
                </h5>  
                <p>{new Date(campaign.lastdate).toLocaleDateString()}</p>
            
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
        <div className="row">
  <Link className="btn mx-auto mt-5" style={{background:"#9c3353",color:"white",width:"fit-content"}} to="/main/home">Back to Home</Link>
</div>
        </div> 
        </div> 
    )
}

export default CampaignBrowser