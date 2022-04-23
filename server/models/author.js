const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// All the datatypes of our schema.
const authorSchema = new Schema({
  name: String,
  age: Number
});

// We are acreating a model to get all the collection of Authors.
module.exports = mongoose.model('Author', authorSchema);
