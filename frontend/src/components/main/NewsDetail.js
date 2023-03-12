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
        return<>
            <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>

        <div className="m-5 p-5 card">
          <h1 className='mb-3'>{newsData.heading}</h1>
          <img
                        
                        src={url + '/' + newsData.image}
                        className="img-fluid mx-auto mb-3"
                        style={{ display: "block" ,maxHeight: "400px"}}
                      />
         
         <p>{newsData.content}</p>
         
        </div>
        </>
      }
      else{
        return <div className='text-center'><img src="https://cdn.dribbble.com/users/3533804/screenshots/6666006/all-anim-gif.gif" style={{width:"500px"}} alt="" />
        <h1 style={{color:"#518f3d"}}>Loading...</h1></div>
        
    }
  };
 
  return displayDetails()
  
};

export default NewsDetail;