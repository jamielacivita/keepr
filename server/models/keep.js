let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//stuff I've added
import user from './user'


// Old Schema
// let schema = new Schema({
//   title: { type: String, required: true },
//   imgUrl: { type: String },
//   body: { type: String },
//   description: { type: String },
//   keepCount: { type: Number, default: 0 },
//   shareCount: { type: Number, default: 0 },
//   viewCount: { type: Number, default: 0 },
//   author: { type: String }

// Jaime's SCHEMA
let schema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  articleLink: { type: String },
  tags: { type: String },
  public: { type: Boolean, default: true },
  views: { type: Number, default: 0 },
  timesVaulted: { type: Number, default: 0 },
  // Relations
  // userId: { type: ObjectId, ref: models.user.name, required: true },
  userId: { type: ObjectId, ref: user.name, required: true },

})

module.exports = mongoose.model('Keep', schema)


