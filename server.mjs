import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from 'dotenv'
import chalk from "chalk";
dotenv.config()

const httpServer = createServer();
const io = new Server(httpServer, {
  // ...
});
const port = process.env.PORT || 3000; // Default to 3000 if .env is missing

io.on("connection", (socket) => {
  console.log(socket);
});

httpServer.listen(port,()=>{
    console.log(chalk.blueBright("Server is connected"));
});