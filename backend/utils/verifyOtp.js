const SendOtp = require('sendotp')

const sentOtp = new SendOtp('364162AdBXg1lQ60ed1be5P1')

const verifyOtp = (ph,otp) => {
  sendOtp.verify('8168123475', '7777', (err, data) => {
    console.log(data)
  })
  return 7
}

module.exports = {verifyOtp}
