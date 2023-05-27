import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import app_config from '../../config'
import Header from '../startup/Header'


const NewsBrowser = () => {

    const [newsList, setNewsList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState('all');

  
    const search =  async (field) => {
        const res = await fetch(url + "/News/getall");
        const data = await res.json();
        console.log(data);
        setNewsList(data.result.filter((user) => ( user[field] === searchKeyword)));
      }
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
      <Header/>

        <div className='row align-items-center justify-content-center ' style={{ height: "40vh", backgroundColor: "#9c3353" }}>
          <div className="col-md-2 mt-4">
          <h1 className='text-center' style={{ color: "white"}}>News</h1>
          </div>
          <div className="col-md-3 text-center">
            <img src="/news.png" alt="" style={{width:"400px"}} />
          </div>
        </div>

<div className="row mt-3" style={{justifyContent:"center"}}>
          <div className='col-6 d-flex align-items-center ' style={{ height: "40px" }}>
            <label style={{ color: "black" }} className="form-label m-2" htmlFor="category">Sort</label>&nbsp;
            <select className="form-control" name="category" id="category" style={{ width: "70%" }} value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)}>

              <option value="all" selected  onClick={e => search('heading')}>All</option>
              <option value="technology"  onClick={e => search('heading')}>Technology</option>
              <option value="Marketing"  onClick={e => search('heading')}>Marketing</option>
              <option value="Sales"  onClick={e => search('heading')}>Sales</option>
              <option value="Shares"  onClick={e => search('heading')}>Shares</option>

              <option value="Consulting">Consulting</option>

            </select>
          </div>
          

              <div className="col-6 input-group  " style={{ width: "40%",height:"36px" }}>
                <div className="form-outline bg-white">
                <input type="search" id="form1" className="form-control rounded" 
                      value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)}/>
                      <label className="form-label rounded" htmlFor="form1" >
                          Search
                      </label>
                </div>
                <button type="button" className="btn btn-primary"
               onClick={e => search('heading')}>
                <i className="fas fa-search" />
                </button>
              </div>
           
</div>
       
        <div className='mx-auto m-5 ms-5 me-5 p-4' style={{ width: "auto", height: "fit-content" }}>

          <div>
            {
              newsList.map((news) => (
                <div className='card mb-3 p-3'>
                  <div className="row gx-5 align-items-center">
                    <div className="col-md-6 mb-4">
                      <div
                        className="bg-image hover-overlay ripple shadow-2-strong rounded-5 "
                        data-mdb-ripple-color="light"
                      >
                        <img
                        
                          src={url + '/' + news.image}
                          className="img-fluid mx-auto"
                          style={{ maxHeight: "250px", display: "block" }}
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
                      <p>{new Date(news.date).toLocaleDateString()}</p>
                      
                      <p className="text-muted" style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                        {news.content}
                      </p>
                      <Link
                        type="button"
                        className="btn"
                        to={"/main/newsdetail/" + news._id}
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