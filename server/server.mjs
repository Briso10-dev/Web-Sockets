import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv'
import chalk from "chalk"; 

dotenv.config()

const httpServer = createServer();
const socket = new Server(httpServer,{
  cors:{
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204    
  }
});
const port = process.env.PORT || 3000; // Default to 3000 if .env is missing

socket.on("connection", (socket) => {     //an event key connection implemented to the socket.io package    
  console.log(socket);
  
  socket.on("message", (data)=>{
    console.log(data);  
  })

  socket.emit('message','Hello')
});

httpServer.listen(port,()=>{});