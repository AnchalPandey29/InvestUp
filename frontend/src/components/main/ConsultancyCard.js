import React, { useEffect, useState } from 'react'
import Header from '../startup/Header'
import app_config from '../../config';
const ConsultancyCard = () => {

  const [consultantList, setConsultantList] = useState([]);
  const url = app_config.apiurl;

  const fetchConsultantData = async () => {
    const res = await fetch(url+'/investor/getconsultant');
    const data = await res.json();
    console.log(data);
    setConsultantList(data.result);

  }

  useEffect(() => {
    fetchConsultantData();
  }, [])

  const displayData = () => {
    
  }

  return (
<>    
<Header/>

 <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>

      <div className='m-5 p-5'>
        <div className="row justify-content-center align-ietms-center" >
          <div className=" col-lg-3 m-3 card p-3" style={{ height: "fit-content" }}>
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              style={{ width: 150 }}
            />
            <h5 className="mb-3">Ola Daudin</h5>
            <p>CEO and co-founder of <b> BitOasis</b></p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              BitOasis  is leading platformthat allows you to securely buy, sell and trade cryptocurrencies like Bitcoin.
            </p>
            <a className='btn' href="/main/chat" style={{ background: " #9c3353", color: "white" }}>Chat</a>

          </div>

          <div className=" col-lg-3 m-3 card p-3" style={{ height: "fit-content" }}>
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
              alt="avatar"
              style={{ width: 150 }}
            />
            <h5 className="mb-3">John Doe</h5>
            <p>Director of <b>Phareasy</b></p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Providing health and daignosis services as well as world's largest network of drugs and medicines.
            </p>
            <a className='btn' href="/main/chat" style={{ background: " #9c3353", color: "white" }}>Chat</a>


          </div>
          <div className=" col-lg-3 m-3 card p-3" style={{ height: "fit-content" }}>
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              style={{ width: 150 }}
            />
            <h5 className="mb-3">Manisha Srivasatava</h5>
            <p>Founder of <b>Foodstrukk </b></p>
            <p className="text-muted">
              <i className="fas fa-quote-left pe-2" />
              Foodstrukk is classified as India's first Non-govt food product company based in Pune, Maharashtra.

            </p>
            <a className='btn' href="/main/chat/" style={{ background: " #9c3353", color: "white" }}>Chat</a>


          </div>
        </div>
      </div>

    </>
  )
}

export default ConsultancyCard