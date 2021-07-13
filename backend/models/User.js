const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
//use express validator
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true
  }
})

userSchema.methods.matchPassword = async function(enteredPass) {
  return bcrypt.compare(enteredPass, this.password)
}

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) next()

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})


const User = model('User', userSchema)

module.exports = User