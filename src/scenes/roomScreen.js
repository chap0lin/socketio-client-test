import {useState, useEffect} from 'react'
import { SocketConnection } from '../lib/socketConnection'


import Messages from '../Messages';
import MessageInput from '../MessageInput';
import '../App.css';
const roomId = 1

function Room(props){
  const {room} = props

  const socketConn = SocketConnection.getInstance()

  const [name, setName] = useState("")

  useEffect(() => {
    console.log('printou')
    const getName = window.localStorage.getItem('name')
    console.log(getName)
    setName(getName);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('name', name);
  }, [name]);
  const roomName = name
  return (
    <div className="App">
      <header className="app-header">
        React Chat - Room {room}
      </header>
      { socketConn ? (
        <div className="chat-container">
          <Messages room={room} />
          <MessageInput room={room} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  )
}

export default Room