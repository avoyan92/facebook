const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)


const rooms = new Map()

app.get('/rooms', (req, res) => {
      res.json(rooms)
      console.log('wdo')
})

io.on('connection', (socket) => {
      console.log('user  connected', socket.id)
})


server.listen(8888, (err) => {
      if(err) {
            throw Error(err)
      }

      console.log('Started')
})