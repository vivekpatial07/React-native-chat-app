const User = require('../models/User')

const fetchUsers = async(req, res) => {
  console.log('fetching')
  try{
    const allUsers = await User.find()
    res.json(allUsers)
  } catch(error) {
    console.log(erro)
  }
}

module.exports = {
  fetchUsers
}