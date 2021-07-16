const mongoose = require('mongoose')
const { Schema, model }  = mongoose

const User = require('./User')


const usersSchema = new Schema({
  users:[User.schema]
})

const Users = model('allUsers', usersSchema)


module.exports = Users