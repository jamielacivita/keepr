let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId



let schema = new Schema({
  title: { type: String, required: true },
  imgUrl: { type: String },
  body: { type: String },
  description: { type: String },
  keepCount: { type: Number, default: 0 },
  shareCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 },
  author: { type: String }

})

module.exports = mongoose.model('Keep', schema)