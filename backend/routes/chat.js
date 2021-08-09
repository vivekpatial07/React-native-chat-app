const {
  getChats,
  getPrivateChat,
  getMessages,
  startChat,
  getOngoingChat
} = require('../controllers/chat')

const router = require('express').Router()

router.get('/getChats', getChats)
router.post('/getPrivateChat', getPrivateChat)
router.post('/getMessages', getMessages)
router.post('/startChat', startChat)
router.post('/getOngoingChat', getOngoingChat)
module.exports = router