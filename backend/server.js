require('dotenv').config()
require('colors')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

// app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

io.on('connection', socket => {
  console.log('socket connected')

  socket.on('chat', (payload) => {
    console.log(payload, 'payload')
    io.emit('chat', payload)
  })
})

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('mongoDB connected'.cyan.underline)
  io.on('connection', (socket) => {
    console.log('socket connected'.bgMagenta)

    socket.on("join-chat-channel", (payload) => {
      // const { uid } = payload
      // console.log("join-chat-channel", '//uid')
      // socket.join(uid)
      console.log('es')
  })
  // ==========================================================
  socket.on('disconnect', () => {
      console.log("disconnected")
  })
  })
}).catch((err) => {
  console.log('eror', err.message)
  //do same as then here (io.on -> socket.on -> disconnect)
})

app.use(authRouter)

server.listen(7000, async() => {
  // await main()
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
})