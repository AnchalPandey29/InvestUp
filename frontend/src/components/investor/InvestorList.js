import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import app_config from '../../config';

const InvestorList = () => {

    const [investorList, setInvestorList] = useState([]);

    const url = app_config.apiurl;
    const placeholder = 'https://via.placeholder.com/640x400.png/a59090/000000?Text=640x400';


    const fetchData = async () => {
        const res = await fetch(url+'/startup/getall');
        const data = await res.json();
        console.log(data);
        setInvestorList( data.result.filter((user) => ( user.role === 'investor' )) );
        // setInvestorList(data.result);
    }

    useEffect(() => {
      fetchData();
    }, [])

  const displayList = () => {
    return investorList.map((investor) => (
      <div className="card mb-3 mx-auto" style={{width:"80%"}}>
        <div className="row gx-5 justify-content-center" >
          <div className="col-md-4">
          <img
              className="img-fluid p-2"
              src={investor.investoravatar? (url + "/" + investor.investoravatar): placeholder}
              alt=""
              style={{maxHeight:"200px",width:"200px"}}
            />
          </div>
          <div className="col-md-6 ">

           <div className="card-body">
           <h4>
              <strong> {investor.name} </strong>
            </h4>
            <p className="text-muted">
              {investor.email}
            </p>
            <Link
              type="button"
              className="btn"
              to={"/main/investordetails/" + investor._id}
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
    <div style={{backgroundColor:"#9c3353",height:"30vh",marginBottom:"-80px",display:"flex",justifyContent:"center"}}>  
    <h1 style={{color:"white",paddingTop:"50px"}}>Investor List</h1>
      </div>

    <div className="row justify-content-center">
      <div className="col-9 ">{displayList()}</div>
    </div>
  </div>
);

   
}

export default InvestorList