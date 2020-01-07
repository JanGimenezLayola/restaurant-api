const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;