const Conversation = require('../models/Conversation')
const Message = require('../models/Message')

const getChats = async(req, res) => {
  try{
    const chats = await Conversation.find()
    res.json(chats)
  } catch(error) {
    console.log(error)
  }
}

const getPrivateChat = async(req, res) => {
  const { sender, receiver } = req.body
  try {
    // find chat having same users
    const chat = await Conversation.find({participants:{"$all": [sender, receiver]}})
    if(chat.length !== 0) {
      return res.json(chat)
    }
    const newChat = await Conversation.create({
      participants: [sender, receiver]
    })
    res.json(newChat)
  } catch (error) {
    console.log(error.message)
  }
}

const getMessages = async(req, res) => {
  try {
    const messages = await Message.find({conversationId: req.body.chatId})
    if(messages){
      return res.json(messages)
    }
  } catch (error) {
    console.log(error.message)
  }
}

const saveMessageToDB = async(data) => {
  try {
    const { chatData, msg, sender } = data
    const message = await Message.create({
      conversationId: chatData._id,
      content: msg,
      senderId: sender
    })
  } catch (error) {
    
  }
}

module.exports = {
  getChats,
  getPrivateChat,
  getMessages,
  saveMessageToDB
}