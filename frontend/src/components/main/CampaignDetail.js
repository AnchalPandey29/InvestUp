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
      </div>

    }
    else{
        return <h2>loading...</h2>
    }
  };

    return displayDetails()

  
}

export default CampaignDetail;