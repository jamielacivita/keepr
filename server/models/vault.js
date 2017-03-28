let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  created: { type: Number, required: true, default: Date.now() },
  userId: { type: ObjectId },
  description: { type: String },
  name: { type: String, required: true },
  keeps: [{type: ObjectId}]
})

module.exports = mongoose.model('Vault', schema)