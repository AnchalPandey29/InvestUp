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
        <div>
          <div class="fw-bold">John Doe</div>
          <div class="text-muted">{contact.email}</div>
        </div>
        <span class="badge rounded-pill badge-success">Active</span>
      </li>
    ));
  };

  return (
    <div>
      <h1>StartupInbox Component</h1>
      <hr />
      <ul class="list-group list-group-light">{displayContacts()}</ul>
    </div>
  );
};

export default StartupInbox;
