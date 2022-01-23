<<<<<<< HEAD
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')

=======
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')

>>>>>>> f662c9b18a56b0637cdefb8f21cb57891c0d4d3d
module.exports.Comment = require('./comment')