import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000; // Default to 3000 if .env is missing
const httpServer = createServer();
const io = new Server(httpServer, {
  // ...
});

io.on("connection", (socket) => {
  console.log(socket);
});

httpServer.listen(PORT,()=>{
    console.log("Server is connected");
});