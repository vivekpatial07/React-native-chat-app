const { signin } = require('../controllers/auth')

const router = require('express').Router()
// const SendOtp = require('sendotp')

// const sendOtp = new SendOtp('364162AdBXg1lQ60ed1be5P1')

// const verifyOtp = (ph,otp) => {
//   sendOtp.verify(ph, otp, (err, data) => {
//     console.log(data)
//   })
//   return 7
// }

// // const {verifyOtp} = require('../')
// router.post('/signin', async(req, res) => {
//   console.log(req.body)

//   await sendOtp.send(req.body.ph,'tobirama', req.body.otp, () => {console.log('sent')})
//   verifyOtp(req.body.ph, req.body.otp)

// })

router.post('/signin', signin)

module.exports = router