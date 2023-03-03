import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';

const BlogDetail = () => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = app_config.apiurl;

  const fetchBlogById = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/Blog/getbyid/" + id);
    const data = await res.json();
    console.log(data);
    setBlogData(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogById();
  }, []);

  const displayDetails = () => {
    if (!loading && blogData) {
      return<div className='card m-5'>
        <h1>{blogData.heading}</h1>
        {blogData.image}
        <p>{blogData.content}</p>

      </div>
    }
    else{
      return <div className='text-center'><img src="https://cdn.dribbble.com/users/3533804/screenshots/6666006/all-anim-gif.gif" style={{width:"500px"}} alt="" />
      <h1 style={{color:"#518f3d"}}>Loading...</h1></div>
    }
  
};

return displayDetails()
}

export default BlogDetail;