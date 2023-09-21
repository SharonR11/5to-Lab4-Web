const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

const path = require('path');
app.use(express.static(path.join(__dirname, 'static')));

io.on('connection', (socket) => {
    // Procedimiento 4:
   socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})


app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/chat_view.html`)
})//__dirname cada peticion envia el index .html

server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})