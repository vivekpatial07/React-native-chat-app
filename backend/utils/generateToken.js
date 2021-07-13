const jwt = require('jsonwebtoken')

const genToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET)
}

module.exports = genToken