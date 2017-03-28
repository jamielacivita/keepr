let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

//stuff I've added
import user from './user'
import keep from './keep'

// Old Schema.
// let schema = new Schema({
//   created: { type: Number, required: true, default: Date.now() },
//   userId: { type: ObjectId },
//   description: { type: String },
//   name: { type: String, required: true },
//   keeps: [{type: ObjectId}]
// })

// Jaime's VAULT SCHEMA
let schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  // Relations
  userId: { type: ObjectId, ref: user.name, required: true },
  keeps: [{ type: ObjectId, ref: keep.name }]
})

module.exports = mongoose.model('Vault', schema)



