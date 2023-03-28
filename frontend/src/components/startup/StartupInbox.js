import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";

const StartupInbox = () => {

	const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("startup"))
  );

  const url = app_config.apiurl;

  const getUserById = async () => {
	const response = await fetch(
	  `${url}/startup/getbyid/${currentUser._id}`
	);
	console.log(response.status);
	const data = await response.json();
	console.log(data.result.contacts);
	setCurrentUser(data.result);
	sessionStorage.setItem("startup", JSON.stringify(data.result));
  }

  useEffect(() => {
	getUserById();
  }, [])

  const displayContacts = () => {
    return currentUser.contacts.map((contact) => (
      <li class="list-group-item d-flex justify-content-between align-items-center" onClick={ () => navigate('/startup/chat/'+contact._id) }>
        <div className="row">
          <div className="col-md-3">
            <img className='img-fluid ' src={url + '/' + contact.investoravatar} alt='' style={{ width: "90px", borderRadius: "50%" }} />
          </div>
          <div className="col-md-9">
            <div class="fw-bold">{contact.name}</div>
            <div class="text-muted">{contact.email}</div>
          </div>
      
        </div>


        <span class="badge rounded-pill badge-success">Active</span>
      </li>
    ));
  };

  return (
   <> 
      <div
        className="row align-items-center"
        style={{ height: "30vh", backgroundColor: "#9c3353", }} >
        <h1 className="text-center" style={{color:"white"}}>Inbox</h1>

      </div>

    <ul class="list-group list-group-light px-5">{displayContacts()}</ul>

    </>
  );
};

export default StartupInbox;
