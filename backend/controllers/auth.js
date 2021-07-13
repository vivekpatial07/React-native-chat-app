const User = require('../models/User')
const genToken = require('../utils/generateToken')

const signin = async(req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if(user) {
    //login

    const passwordMatched = await user.matchPassword(password)
    
    if(passwordMatched) {
      const token = genToken(user._id)
      res.status(201).json({
        _id: user._id,
        username: user.username,
        token
      })
    }
    
  } else {
    //register

    const newUser = await new User({
      username,
      password
    })

    await newUser.save()
    const token = genToken(newUser._id)

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      token
    })
  }
}

module.exports = {
  signin
}