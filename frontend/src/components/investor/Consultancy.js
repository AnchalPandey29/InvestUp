import React, { useEffect, useState } from "react";
import "./Chat.css";
import { io } from "socket.io-client";
import app_config from "../../config";
import { useParams } from "react-router-dom";

const ConsultancyInvestor = () => {
  const url = app_config.apiurl;
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("investor"))
  );
  const { startupid } = useParams();
  useEffect(() => {
    socket.connect();
    socket.emit("addtocontact", currentUser._id);
    fetchChats();
  }, []);

  const checkStartuphasContact = async () => {
    const response = await fetch(`${url}/startup/getbyid/${startupid}`);
    // console.log(response.status);
    const startupContacts = (await response.json()).result.contacts;
    console.log(startupContacts);
    // return startupContacts.includes(currentUser._id);
    return startupContacts.find((contact) => contact._id === currentUser._id);
  };

  const addInvestorToContact = async () => {
    const response = await fetch(`${url}/startup/addtocontact/${startupid}`, {
      method: "PUT",
      body: JSON.stringify({
        contacts: currentUser._id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.status);
    console.log("contact added");
  };

  const [messageList, setMessageList] = useState([]);

  const [inputText, setInputText] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const search =  async (field) => {
    const res = await fetch(url + "/chat/getall");
    const data = await res.json();
    console.log(data);
    setMessageList(data.result.filter((user) => user[field] === searchKeyword)
    );
  }

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const saveData = async (formdata) => {
    const res = await fetch(url + `/chat/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status);
  };

  const fetchChats = async () => {
    const res = await fetch(
      url + "/chat/getchat/" + currentUser._id + "/" + startupid
    );
    const chatsData = (await res.json()).result;
    console.log(chatsData);
    setMessageList(chatsData);
    // if (chatsData.length) {
    //   setMessageList([
    //     ...chatsData.map((chat) => {
    //       return { ...chat.data };
    //     }),
    //   ]);
    // {
    //   if(chat.rec === currentUser._id){
    //     if(!chat.read)
    //       setCount(count+1)
    //   }
    // }
    //   console.log(messageList);
    // }
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;
    // const temp = {
    //   text: inputText,
    //   sent: true,
    //   date: new Date(),
    //   name: currentUser.name,
    // };
    const temp = {
      users: [currentUser._id, startupid],
      sentBy: currentUser._id,
      to: startupid,
      date: new Date(),
      message: inputText,
      name: currentUser.name,
    };

    // sending msg to backend
    socket.emit("sendmsg", temp);

    setMessageList([...messageList, temp]);
    setInputText("");
    checkStartuphasContact().then((added) => {
      console.log(added);
      if (!added) addInvestorToContact();
    });
    saveData({
      users: [currentUser._id, startupid],
      sentBy: currentUser._id,
      date: new Date(),
      message: inputText,
      name: currentUser.name,
    });
  };

  socket.on("recmsg", (data) => {
    setMessageList([...messageList, data]);
    // saveData({
    //   sender: currentUser._id,
    //   reciever: startupid,
    //   data: data,
    // });
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "#9c3353",
          height: "40vh",
          marginBottom: "-300px",
        }}
      ></div>

      <div className="container d-flex flex-column justify-content-center align-items-center p-5">
        <div className="card " style={{ height: "90vh", width: "100vh" }}>
        <div className="card-header bg-success row " style={{ color: "white",width:"100vh",marginLeft:"0" }}>
            <div className="col-md-11">
            <p className="m-0 h4 text-center">{currentUser.name}</p>
            </div>
            <div className="col-md-1">
            <div>
      <button  onClick={handleClick} className="m-0 float-end" style={{border:"none",background:"none"}}>
      <img src="https://cdn-icons-png.flaticon.com/512/225/225287.png" style={{width:"20px"}} alt="" />
      </button>
      {isOpen && 
        <div className="input-group my-3 px-3 pt-4" style={{width:"400px"}}>
              <input className="form-control  p-3" value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} />
              <button className="btn btn-primary input-group-append bg-success" style={{color:"white"}} onClick={e => search('message')}>Search</button>
      </div>
        }
    </div>
            
            </div>
          
          </div>
          <div
            className="card-body chat-body"
            style={{
              height: "80vh",
              width: "100vh",
            }}
          >
            {messageList.map((obj) => (
              <>
                <p className="m-0 ms-3" style={{fontSize:"14px",color:"#9c3353"}}>
                  {obj.sentBy !== currentUser._id ? obj.name : ""}
                </p>
                <div
                  className={
                    obj.sentBy === currentUser._id ? "msg-sent" : "msg-rec"
                  }
                >
                  <p className="m-0">{obj.message}</p>
                  <p className="m-0 float-end" style={{ fontSize: 10 }}>
                    {new Date(obj.date).toLocaleDateString()}{" "}
                    {new Date(obj.date).toLocaleTimeString()}
                  </p>
                </div>
              </>
            ))}
          </div>
          <div
            className="card-footer"
            style={{
              width: "100vh",
            }}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
                value={inputText}
              />
              <button className="btn btn-success" onClick={sendMessage}>
                <i class="fas fa-paper-plane"></i>   Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultancyInvestor;
