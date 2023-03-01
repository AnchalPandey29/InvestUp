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
      return<div>
        <h1>{blogData.heading}</h1>
      </div>
    }
    else{
      return <h1>loading...</h1>
    }
  
};

return displayDetails()
}

export default BlogDetail;