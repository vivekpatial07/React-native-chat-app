const mongoose = require('mongoose')
const { Schema, model } = mongoose

const convoSchema = new Schema({
  participants:[String],
  chatStarted: {
    type: Boolean,
    default: false
  }
})


const Conversation = model('Conversation', convoSchema)

module.exports = Conversation