import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import app_config from '../../config'

const NewsBrowser = () => {

    const [newsList, setNewsList] = useState([]);

    const url = app_config.apiurl;

    const fetchData = async () => {
        const res = await fetch(url+'/News/getall');
        const data = await res.json();
        console.log(data);
        setNewsList(data.result);
    }

    useEffect(() => {
      fetchData();
    }, [])

   
    return (
       <div>

<div className='row d-flex justify-content-center align-items-center'>
      <div className="col-4 input-group m-5" style={{width:"40%"}}>
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
      <label  className="form-label m-2" htmlFor="category">Sort</label>&nbsp;
      <select className="form-control"  name="category" id="category"  style={{width:"200px"}} >

        <option value="all" selected>All</option>
        <option value="technology">Technology</option>
        <option value="entertainmnet">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="food">Food</option>
      </select>
      </div>
    </div>

      <div className='card mx-auto m-5 ms-5 me-5 p-4' style={{ width: "auto", height: "fit-content" }}>



        <div>
            {
                newsList.map((news)=>(
                    <div>
<div className="row gx-5">
          <div className="col-md-6 mb-4">
            <div
              className="bg-image hover-overlay ripple shadow-2-strong rounded-5 "
              data-mdb-ripple-color="light"
            >
              <img
                src={news.image}
                className="img-fluid mx-auto"
                style={{ maxHeight: "150px", display: "block" }}
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
            <span className="badge bg-primary px-2 py-1 shadow-1-strong mb-3">
              News of the day
            </span>
            <h4>
              <strong> {news.heading} </strong>
            </h4>
            <p className="text-muted">
              {news.content}
            </p>
            <Link
             type="button" 
             className="btn" 
             to={"/main/newsdetail/"+news._id} 
             style={{ backgroundColor: "#9c3353", color: "white" }}>
              Read more
            </Link>
          </div>
        </div>

                    </div>
                ))
            }
        </div>
        </div> 
        </div> 
    )
}

export default NewsBrowser