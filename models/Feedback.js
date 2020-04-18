const mongoose = require('mongoose');
const FeedbackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'submit',
  },
});

module.exports = Feedback = mongoose.model('feedback', FeedbackSchema);
