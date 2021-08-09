const User = require('../models/User')

const fetchUsers = async(req, res) => {
  const { userId } = req.body
  try{
    const allUsers = await User.find()
    const friends = allUsers.filter(usr => usr._id != userId)
    res.json(friends)
  } catch(error) {
    console.log(error)
  }
}

module.exports = {
  fetchUsers
}