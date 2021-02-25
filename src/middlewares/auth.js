const authMiddleware = function (req, res, next) {
  console.log('LOGGED')
  next()
}

module.exports = authMiddleware; 