import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import app_config from '../../config'
import Header from '../startup/Header'


const BlogBrowse = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [blogList, setBlogList] = useState([]);
    const filters = [
        {
          name : 'Categories',
          option: [
            'SuccessStory',
            'Motivational Blog',
            
          ]
        }
      ]
    
      const search =  async (field) => {
        const res = await fetch(url + "/blogbrowser/getall");
        const data = await res.json();
        console.log(data);
        setBlogList(data.result.filter((user) => ( user[field] === searchKeyword)));
      }
    

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
            <Header/>

          <div className='row align-items-center justify-content-center ' style={{ height: "40vh", backgroundColor: "#9c3353" }}>
              <div className="col-md-2 mt-4">
                  <h1 className='text-center' style={{ color: "white" }}>Blog</h1>
              </div>
              <div className="col-md-3 text-center">
                  <img src="/news.png" alt="" style={{ width: "400px" }} />
              </div>
          </div>

          <div className="row mt-3  " style={{ justifyContent: "center",alignItems:"center" }}>
              <div className='col-6 d-flex align-items-center ' style={{ height: "40px" }}>
                  <label style={{ color: "black" }} className="form-label m-2" htmlFor="category">Sort</label>&nbsp;
                  <select className="form-control" name="category" id="category" style={{ width: "70%" }} >

                      <option value="all" selected>All</option>
                      <option value="technology">Technology</option>
                      <option value="entertainmnet">Entertainment</option>
                      <option value="sports">Sports</option>
                      <option value="food">Food</option>
                  </select>
              </div>

              <div className="col-6 input-group  " style={{ width: "40%", height: "36px" }}>
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
   

      <div>
              <div >


                      <div className='row p-5 justify-content-center'>
          {
                      blogList.map((blog) => (
                          <div className='col-md-3 card m-3 pt-3'>
                              <div className='row-md-6 mx-auto'>
                              
                                  <img className='img-fluid ' src={url+'/'+blog.image} alt='' style={{maxHeight:"260px"}}/>
                              </div>

                              <div className='row-md-6 p-4'>
                                  <h4>{blog.heading}</h4>
                                  <p style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>{blog.content}</p>
                                  <p>{new Date().toLocaleDateString()}</p>
                                  <Link
                                     to={"/main/blogdetails/"+blog._id}
                                      type='button'
                                      className='btn mb-2'
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

export default BlogBrowse;