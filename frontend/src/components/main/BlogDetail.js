import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import app_config from '../../config';

const BlogDetail = () => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(false);
  const url = app_config.apiurl;

  const fetchStartupById = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/Blog/getbyid/" + id);
    const data = await res.json();
    console.log(data);
    setBlogData(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchStartupById();
  }, []);

  return (
    <div className='m-5 card'>BlogDetail</div>
  )
}

export default BlogDetail