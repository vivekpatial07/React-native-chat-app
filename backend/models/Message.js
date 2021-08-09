const mongoose = require('mongoose')
const { Schema, model } = mongoose

const messageSchema = new Schema({
  conversationId: String,
  senderId: String,
  content: String,//for now
} ,{
  timestamps: true
})


const Message = model('Message', messageSchema)

module.exports = Message