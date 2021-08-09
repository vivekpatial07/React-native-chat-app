const { fetchUsers } = require('../controllers/user')

const router = require('express').Router()

router.post('/fetchUsers', fetchUsers)

module.exports = router