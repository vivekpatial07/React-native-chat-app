require('dotenv').config()
require('colors')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const chatsRouter = require('./routes/chat')
const { saveMessageToDB } = require('./controllers/chat')

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

  // socket.to()
  socket.on('join-room', (data) => {
    data && socket.join(data._id)
    console.log('room joined')
  })

  socket.on('sendMessage', (data) => {
    const { chatData } = data
    io.to(chatData._id).emit('message', data)
    saveMessageToDB(data)
  })
})

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('mongoDB connected'.cyan.underline)
}).catch((err) => {
  console.log('eror', err.message)
})

app.use(authRouter)
app.use(userRouter)
app.use(chatsRouter)

server.listen(7000, () => {
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
})