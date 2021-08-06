const {
  getChats,
  getPrivateChat,
  getMessages
} = require('../controllers/chat')

const router = require('express').Router()

router.get('/getChats', getChats)
router.post('/getPrivateChat', getPrivateChat)
router.post('/getMessages', getMessages)
module.exports = router