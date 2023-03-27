import React, { useEffect, useState } from "react";
import "./Chat.css";
import { io } from "socket.io-client";
import app_config from "../../config";
import subscriptionData from "../../subscriptionDetails";
import { useParams } from "react-router-dom";

const StartupChat = () => {
  const url = app_config.apiurl;
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
  const { investorid } = useParams();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("startup"))
  );

  const fetchChats = async () => {
    const res = await fetch(
      url + "/chat/getchat/" + currentUser._id + "/" + investorid
    );
    const chatsData = (await res.json()).result;
    console.log(chatsData);
    setMessageList(chatsData)
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

  useEffect(() => {
    socket.connect();
    socket.emit('addtocontact', currentUser._id)
    fetchChats();
  }, []);

  const [messageList, setMessageList] = useState([
    // { text: "Kal wale exam ka syllabus send kro", sent: false },
    // { text: "Kal kaun sa exam hai??", sent: true },
  ]);

  const [inputText, setInputText] = useState("");

  const saveData = async (formdata) => {
    const res = await fetch(`http://localhost:5000/chat/add`, {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status);
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const temp = { text: inputText, sent: true };

    // sending msg to backend
    socket.emit("sendmsg", temp);

    setMessageList([...messageList, temp]);
    setInputText("");
    saveData({
      sender: currentUser._id,
      reciever: currentUser._id,
      date: Date,
      message: inputText,
    });
  };

  socket.on("recmsg", (data) => {
    setMessageList([...messageList, data]);
    saveData({
      sender: currentUser._id,
      reciever: investorid,
      data: data,
    });
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "#9c3353",
          height: "40vh",
          marginBottom: "-300px",
        }}
      >
        {" "}
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center p-5">
        <div className="card " style={{ height: "80vh", width: "100vh" }}>
          <div className="card-header bg-success" style={{ color: "white" }}>
            <p className="m-0 h4 text-center">{currentUser.name}</p>
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
                <p className="m-0">{obj.name}</p>
                <div className={obj.sent ? "msg-sent" : "msg-rec"}>
                  <p className="m-0">{obj.text}</p>
                  <p className="m-0 float-end" style={{ fontSize: 10 }}>
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
                <i class="fas fa-paper-plane"></i> &nbsp; Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartupChat;
