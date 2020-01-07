const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const orderItemSchema = new Schema({
    orderID: {
        type: ObjectId,
        ref: 'Order'
    },
    itemID: {
        type: ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Number,
        required: true
    }
  });
  
  const OrderItem = mongoose.model('OrderItem', orderItemSchema);
  
  module.exports = OrderItem;