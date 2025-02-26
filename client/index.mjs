
const socket = io("http://localhost:3500");

socket.on("connect", (response)=>{
    console.log(response)
})

socket.on("message",(data)=>{
    console.log(data);  //CLient receiving info from server.

    socket.emit("message", "Hello there! yo soy Briso") //client requesting info to the server.
});