import { createContext } from 'react' 
import socketio from 'socket.io-client'

const SocketContext = createContext()

const socket = socketio.connect("http://192.168.0.14:3030", {auth: {
  name: "Joana"
}})

// export const SocketProvider = ({children}) => {
//   const []
// }

export {
  socket,
  SocketContext
}