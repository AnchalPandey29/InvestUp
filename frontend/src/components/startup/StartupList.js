import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../../config";

const StartupList = () => {
  const [startupList, setStartupList] = useState([]);
  
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem(null)));
  const [searchKeyword, setSearchKeyword] = useState("");


  const filters = [
    {
      name : 'Sector',
      option: [
        'technology',
        'entertainment',
        'Art And Photography',
        'Technology',
        'others',
      ]
    }
  ]

  const search =  async (field) => {
    const res = await fetch(url + "/startup/getall");
    const data = await res.json();
    console.log(data);
    setStartupList(data.result.filter((user) => (user.role === "startup" 
    && user[field] === searchKeyword)));
  }


  const checkSubscription = async () => {
    const res = await fetch(url+`/Subscription/getbyuser/`);   
      if(currentUser!==null){
          if(currentUser.data.name === "Basic")
          {
            const data = await res.json();
          }
      }
  }
  
 
  const url = app_config.apiurl;
  const placeholder = 'https://via.placeholder.com/640x400.png/a59090/000000?Text=640x400';

  const fetchData = async () => {
    const res = await fetch(url + "/startup/getall");
    const data = await res.json();
    console.log(data);
    setStartupList(data.result.filter((user) => user.role === "startup"));
    // setStartupList(data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayList = () => {
    
    return startupList.map((startup) => (
      
      <div className="card mb-3 mx-auto" style={{width:"80%"}}>
        <div className="row gx-5 justify-content-center">
          <div className="col-md-4">
            <img
              className="img-fluid p-2"
              src={startup.startupimage ? (url + "/" + startup.startupimage) : placeholder}
              alt=""
              style={{maxHeight:"200px",width:"200px"}}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h4>
                <strong> {startup.name} </strong>
              </h4>
              <p className="text-muted">{startup.email}</p>
              <Link
                type="button"
                className="btn"
                to={"/main/startupdetails/" + startup._id}
                style={{ backgroundColor: "#9c3353", color: "white" }}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>

      <div style={{ backgroundColor: "#9c3353", padding: '50px 0',height:"40vh"}}>
        <div className="row mt-4 ">

          <div className="col-md-8 mx-auto mt-1">
            <h1 className="text-white text-center">Startup List</h1>
            <div className="input-group my-3 px-3 pt-4">
              <input className="form-control  p-3" value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} />
              <button className="btn btn-primary input-group-append" onClick={e => search('ownername')}>Search</button>
            </div>
          </div>
        </div>
      </div>


      <Link className="btn mt-5 mb-3" 
      to="/startup/dashboard"
      style={{background:"#9c3353",color:"white",width:"fit-content",height:"fit-content",marginLeft:"20%"}}
      >Back</Link>

      <div className="row justify-content-center">
      
        <div className="col-9">{displayList()}</div>
      </div>
    </div>
  );
};

export default StartupList;
