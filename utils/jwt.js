const jwt = require("jsonwebtoken")

const sign =  (obj)=>{
  return jwt.sign(obj, process.env.SECRET_KEY, {
    expiresIn: process.env.JWT_TIME
  })
}

const verify = token=>{
  return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = {
  sign,
  verify
}