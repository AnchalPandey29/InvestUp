import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';

const NewsDetail = () => {
  const { id } = useParams();

  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = app_config.apiurl;

  const fetchNewsById = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/News/getbyid/" + id);
    const data = await res.json();
    console.log(data);
    setNewsData(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchNewsById();
  }, []);

  const displayDetails = () => {
    if (!loading && newsData) {
        return 
        <div className='m-5 card'>
          <h1>hiiiiii</h1>
         {newsData.image}
         {newsData.heading}
         {newsData.content}
         
        </div>
      }
      else{
        return 
        <p>
            
            <h1>Loading...</h1>
        </p>
    }
  };
 
  return displayDetails()
  
};

export default NewsDetail