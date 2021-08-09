const Conversation = require('../models/Conversation')
const Message = require('../models/Message')
const User = require('../models/User')
const mongoose = require('mongoose')

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
    const { chatData, content, sender } = data
    const message = await Message.create({
      conversationId: chatData._id,
      content,
      senderId: sender
    })
  } catch (error) {
    console.log(error.message)
  }
}

const startChat = async(req, res) => {
  const { chatId } = req.body
  try {
    const chat = await Conversation.findById(chatId)
    chat.chatStarted = true
    await chat.save()
  } catch (error) {
    console.log(error.message)
  }
}

const getOngoingChat = async(req, res) => {
  const { userId } = req.body
  try {
    const ongoingChat = await Conversation.find({participants: {"$in": [userId]}})
    const filteredChats = ongoingChat.filter(chat => chat.chatStarted === true)
    const friends = []
    filteredChats.forEach(chat => {
      chat.participants.forEach(usr => {
        if(usr !== userId){
          friends.push(mongoose.Types.ObjectId(usr))
        }
      })
    })

  const users = await User.find({
    '_id': {
      $in: friends
    }
  })
    res.json(users)
  } catch (error) {
    console.log(error.message)
  }
}


module.exports = {
  getChats,
  getPrivateChat,
  getMessages,
  saveMessageToDB,
  startChat,
  getOngoingChat
}