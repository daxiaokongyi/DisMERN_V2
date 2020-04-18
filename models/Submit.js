const mongoose = require('mongoose');

const SubmitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  role: {
    type: String,
    required: true,
  },
  recommend: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  comments: {
    type: String,
  },
});

module.exports = Submit = mongoose.model('submit', SubmitSchema);
// 'submit' is the name of model above
