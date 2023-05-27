import React, { useEffect, useState } from 'react'
import Header from '../startup/Header'
import app_config from '../../config';
import { Link } from 'react-router-dom';
const ConsultancyCard = () => {

  const [consultantList, setConsultantList] = useState([]);
  const url = app_config.apiurl;

  const fetchConsultantData = async () => {
    const res = await fetch(url+'/startup/getconsultant');
    const data = await res.json();
    console.log(data);
    setConsultantList(data.result.filter(startup => startup.consultant === true));
  }

  useEffect(() => {
    fetchConsultantData();
  }, [])

  const displayData = () => {
      return consultantList.map(({_id, name, brief, investoravatar}, index) => (
        <div className=" col-lg-3 m-3 card p-3" style={{ height: "fit-content" }}>
            <img
              className="img-fluid rounded-circle shadow-1-strong mb-4"
              src={url+'/'+investoravatar}
              alt="avatar"
              style={{ height: 150, width: 150 }}
            />
            <h5 className="mb-3">{name}</h5>
            {/* <p>CEO and co-founder of <b> BitOasis</b></p> */}
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              {brief}
            </p>
            <Link className='btn' to={"/startup/chat/"+_id} style={{ background: " #9c3353", color: "white" }}>Chat</Link>
          </div>
      ))
  }

  return (
<>    
<Header/>

 <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>

      <div className='m-5 p-5'>
        <div className="row justify-content-center align-ietms-center" >
          {displayData()}

         
        </div>
      </div>

    </>
  )
}

export default ConsultancyCard