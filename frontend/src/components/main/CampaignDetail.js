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
      return <div className='card m-5'>
        <h1>{campaignData.title}</h1>
        {campaignData.image}
        <div className='row'>
          <div className='col-md-5 me-5'>
              <h5>{campaignData.startdate}</h5>
          </div>
          <div className='col-md-5'>
              <h5>{campaignData.lastdate}</h5>
          </div>
        </div>
       <p> {campaignData.content}</p>
      </div>

    }
    else{
        return <div className='text-center'><img src="https://cdn.dribbble.com/users/3533804/screenshots/6666006/all-anim-gif.gif" style={{width:"500px"}} alt="" />
        <h1 style={{color:"#518f3d"}}>Loading...</h1></div>
    }
  };

    return displayDetails()

  
}

export default CampaignDetail;