<<<<<<< HEAD
const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})

commentSchema.methods.showEstablished = function() {}
  
=======
const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})

commentSchema.methods.showEstablished = function() {}
  
>>>>>>> f662c9b18a56b0637cdefb8f21cb57891c0d4d3d
module.exports = mongoose.model('Comment', commentSchema)