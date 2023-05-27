import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';

const CampaignDetail = () => {
    const { id } = useParams();

  const [campaignData, setCampaignData] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = app_config.apiurl;

  const fetchCampaignById = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/campaign/getbyid/" + id);
    const data = await res.json();
    console.log(data);
    setCampaignData(data.result);
    setLoading(false);
  };
  useEffect(() => {
    fetchCampaignById();
  }, []);

  const displayDetails = () => {
    if (!loading && campaignData) {
      return <>
             <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>

      <div className='card m-5 p-5'>
        <h1 className='mb-3'>{campaignData.title}</h1>
       
        <img
                        
                        src={url + '/' + campaignData.image}
                        className="img-fluid mx-auto mb-5"
                        style={{ display: "block" ,maxHeight: "400px"}}
                      />
         
       
         <div className='row mb-3'>
         
          
          
              <p><strong className='me-5'>Start Date:</strong>
              {new Date(campaignData.startdate).toLocaleDateString()}</p>
              <br />
              
              <p><strong className='me-5'>Last Date:</strong>
              {new Date(campaignData.lastdate).toLocaleDateString()}</p>

          
        </div>
       <p> {campaignData.content}</p>
       <button className='btn m-3' style={{background:"#9c3353",color:"white",width:"fit-content"}}>Apply Now</button>
      </div>

      </> 
    }
    else{
        return <div className='text-center'><img src="https://cdn.dribbble.com/users/3533804/screenshots/6666006/all-anim-gif.gif" style={{width:"500px"}} alt="" />
        <h1 style={{color:"#518f3d"}}>Loading...</h1></div>
    }
  };

    return displayDetails()

  
}

export default CampaignDetail;