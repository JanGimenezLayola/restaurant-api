const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const itemSchema = new Schema({
  name: {
    type: String,
  },
  Price: {
    type: String,
  }
});

const Item = mongoose.model('items', itemSchema);

module.exports = Item;