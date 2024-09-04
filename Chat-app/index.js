const express = require('express')
const { Server } = require("socket.io");
const http = require("http")
const path = require("path")
const app = express()


const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.resolve("./public")))

app.get('/', (req, res) => {
   return res.sendFile("/public/index.html")
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat-message', (message) => {
        console.log('message', message)
        io.emit('message', message)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
        
})


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})