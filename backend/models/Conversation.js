const mongoose = require('mongoose')
const { Schema, model } = mongoose

const convoSchema = new Schema({
  participants:[String]
})


const Conversation = model('Conversation', convoSchema)

module.exports = Conversation