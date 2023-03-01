import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import app_config from '../../config'

const BlogBrowse = () => {
    const [blogList, setBlogList] = useState([]);

    const url = app_config.apiurl;

    const fetchData = async () => {
        const res = await fetch(url+'/Blog/getall');
        const data = await res.json();
        console.log(data);
        setBlogList(data.result);
    }

    useEffect(() => {
      fetchData();
    }, [])

   
   
  return (
    <div>

    <div className='row d-flex justify-content-center align-items-center'>
    <div className="col-4 input-group m-5" style={{ width: "40%" }}>
        <div className="form-outline bg-white">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" htmlFor="form1" >
                Search
            </label>
        </div>
        <button type="button" className="btn btn-primary">
            <i className="fas fa-search" />
        </button>
    </div>

    <div className='col-4 d-flex '>
        <label className="form-label m-2" htmlFor="category">Sort</label>&nbsp;
        <select className="form-control" name="category" id="category" style={{ width: "200px" }} >

            <option value="all" selected>All</option>
            <option value="technology">Technology</option>
            <option value="entertainmnet">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="food">Food</option>
        </select>
    </div>
</div>

      <div>
              <div>


                      <div className='row p-5'>
          {
                      blogList.map((blog) => (
                          <div className='col-md-3 card m-2'>
                              <div className='row-md-6'>
                                  <img src={blog.image} alt='' />
                              </div>

                              <div className='row-md-6'>
                                  <h4>{blog.heading}</h4>
                                  <p>{blog.content}</p>
                                  <p>{blog.date}</p>
                                  <Link
                                     to={"/main/blogdetails/"+blog._id}
                                      type='button'
                                      className='btn'
                                      style={{ backgroundColor: '#9c3353', color: 'white' }}
                                  >
                                      Read more
                                  </Link>
                              </div>
                          </div>

                      ))
                    }
      
                      </div>
                  </div>

      </div>
      </div>
  )
}

export default BlogBrowse