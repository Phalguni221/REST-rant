const mongoose = require('mongoose')


const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String},
  cuisine: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: { type: String, default: '2022' }
})

module.exports = mongoose.model('Place', placeSchema)
