const { fetchUsers } = require('../controllers/user')

const router = require('express').Router()

router.get('/fetchUsers', fetchUsers)

module.exports = router