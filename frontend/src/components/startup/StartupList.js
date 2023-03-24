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
      <div className="card mb-3">
        <div className="row gx-5">
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
      {/* <div style={{ backgroundColor: "#9c3353", height: "30vh", marginBottom: "-80px", display: "flex", justifyContent: "center" }}> */}
      <div style={{ backgroundColor: "#9c3353", padding: '50px 0'}}>
        <div className="col-md-8 mx-auto">
        <h1 className="text-white text-center">Startup List</h1>
        <div className="input-group my-3">
          <input className="form-control  p-3" value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} />
          <button className="btn btn-primary input-group-append" onClick={e => search('ownername')}>Search</button>
        </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-9">{displayList()}</div>
      </div>
    </div>
  );
};

export default StartupList;
