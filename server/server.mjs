import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv'
import chalk from "chalk";
import cors from 'cors'

dotenv.config()
const corsOptions = {
  origin: "http://127.0.0.1:5500",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const httpServer = createServer();
const socket = new Server(httpServer,cors(corsOptions));
const port = process.env.PORT || 3000; // Default to 3000 if .env is missing

socket.on("connection", (socket) => {     //an event key connection implemented to the socket.io package    
  console.log(socket);
});

httpServer.listen(port,()=>{
    console.log(chalk.blueBright("Server is connected"));
});