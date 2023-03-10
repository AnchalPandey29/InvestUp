import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import app_config from '../../config';

const InvestorList = () => {

    const [investorList, setInvestorList] = useState([]);

    const url = app_config.apiurl;

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
  return (
    <div >


{
                investorList.map((investor)=>(
                    <div>
<div className="row card gx-5 mx-auto m-3" style={{width:"70%",height:"fit-content"}}>
          <div className="col-md-6 mb-4">
           
          </div>
          <div className="col-md-6 mb-4">
            
            <h4>
              <strong> {investor.name} </strong>
            </h4>
            <p className="text-muted">
              {investor.email}
            </p>
            <Link
                type="button"
                className="btn"
                to={"/investor/investordetails/" + investor._id}
                style={{ backgroundColor: "#9c3353", color: "white" }}
              >
                Read more
              </Link>
          </div>
        </div>

                    </div>
                ))
}

    </div>
  )
}

export default InvestorList