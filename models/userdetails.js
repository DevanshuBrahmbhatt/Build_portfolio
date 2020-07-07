const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
  id: {
    type: String,
  },

  userdetail: {
    type: Object,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userdetails = mongoose.model('userdetails', userDetailsSchema);
