const io=require('socket.io')(3001)
io.on('connection', socket => {
    console.log('new')
    socket.emit('chat-message','Hello World')
})
