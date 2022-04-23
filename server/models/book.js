const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// All the datatypes of our schema.
const bookSchema = new Schema({
  name: String,
  genre: String,
  author_id: String
});

// We are acreating a model to get all the collection of Books.
module.exports = mongoose.model('Book', bookSchema);
