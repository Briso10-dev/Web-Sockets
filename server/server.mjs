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
const port = process.env.PORT 

socket.on("connection", (socket) => {     
  console.log(socket);                    //all informational stuffs concerning the web socket successful connection.

  socket.on('message',(data)=>{           //Server preparing himself to receive the client's requestion(same connection event)
    console.log(data);
  })

  socket.emit('message','Hello')         //Server requesting info to client
});

httpServer.listen(port,()=>{});

/*
NB : 
1. Connection event : an event key connection implemented to the socket.io package    

*/