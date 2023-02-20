import React, { useState } from "react"
import "./chat.css"

const Chat = () => {
  const [messageList, setMessageList] = useState([
    { text: "Kal wale exam ka syllabus send kro", sent: false },
    { text: "Kal kaun sa exam hai??", sent: true },
  ])

  const [inputText, setInputText] = useState("")

  const sendMessage = () => {
    if (!inputText.trim()) return
    const temp = { text: inputText, sent: true }
    setMessageList([...messageList, temp])
    setInputText("")
  }

  return (
    <div style={{ backgroundColor: "#ccc", minHeight: "100vh" }}>
      <div className="container pt-5">
        <div className="card">
          <div className="card-header">
            <p className="m-0 h4">Contact Name</p>
          </div>
          <div
            className="card-body chat-body"
            style={{
              height: "70vh",
              backgroundImage: "url('https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Background.max-1000x1000.jpg')",
            }}>
            {messageList.map((obj) => (
              <div className={obj.sent ? "msg-sent" : "msg-rec"}>
                <p className="m-0">{obj.text}</p>
              </div>
            ))}
          </div>
          <div className="card-footer">
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
    </div>
  )
}

export default Chat