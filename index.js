const { Socket } = require('dgram')
const express= require('express');
const app = express();
const http = require('http');
const server=http.createServer(app);
const {Server} = require("socket.io")
const io = new Server(server)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
io.on('connection',(socket)=>{
    // var num+1;

    socket.on('chat message',(msg)=>{
        io.emit('chat message',person +": "+ msg)
    })
    

});
io.on('disconnect',()=>{
    console.log("A user disconnected")
});
server.listen(8000,()=>{
    console.log('listening to *:8000');
})