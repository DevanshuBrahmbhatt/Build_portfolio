const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },

  name: {
    type: String,
  },
});

module.exports = user = mongoose.model('user', userSchema);
