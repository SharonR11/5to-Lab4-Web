const express = require ('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)

const path = require('path');
app.use(express.static(path.join(__dirname, 'static')));

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado.....!!!!')
    socket.on('chat', (msg) => {
        console.log('Mensaje: ' + msg)
        io.emit('chat', msg)
    })
})
app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/chat_view.html`)
})
server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})