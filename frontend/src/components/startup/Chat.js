import React, { useEffect, useState } from "react"
import "./Chat.css";
import {io} from 'socket.io-client';
import app_config from "../../config";

const StartupChat = () => {

    const url = app_config.apiurl;
    const [socket, setSocket] = useState(io(url, {autoConnect: false}));    

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));

    useEffect(() => {
      socket.connect();
    }, [])
    

  const [messageList, setMessageList] = useState([
    // { text: "Kal wale exam ka syllabus send kro", sent: false },
    // { text: "Kal kaun sa exam hai??", sent: true },
  ])

  const [inputText, setInputText] = useState("")

  const sendMessage = () => {
    if (!inputText.trim()) return
    const temp = { text: inputText, sent: true }

    // sending msg to backend
    socket.emit('sendmsg', temp);

    setMessageList([...messageList, temp])
    setInputText("")
  }

  socket.on('recmsg', (data) => {
    setMessageList([...messageList, data])
  })

  return (
  <> 
         <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>

    <div className="container d-flex flex-column justify-content-center align-items-center p-5">
     
        <div className="card " style={{height:"80vh", width:"100vh"}}>
         
        <div className="card-header bg-success" style={{color:"white"}}>
            <p className="m-0 h4 text-center">{currentUser.name}</p>
          
          </div>
          <div
            className="card-body chat-body"
            style={{
              height: "80vh",
              width: "100vh"
            }}>
            {messageList.map((obj) => (
              <div className={obj.sent ? "msg-sent" : "msg-rec"}>
                <p className="m-0">{obj.text}</p>
                <p className="m-0 float-end" style={{fontSize: 10}}>{new Date(obj.date).toLocaleTimeString()}</p>

              </div>
            ))}
          </div>
          <div className="card-footer" style={{
        
              width: "100vh"
            }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setInputText(e.target.value)
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
  )
}

export default StartupChat;