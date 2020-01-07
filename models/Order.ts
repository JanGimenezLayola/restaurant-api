const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const orderSchema = new Schema({
    orderNo: {
      type: Number,
      required: true
    },
    customerID: {
        type: ObjectId,
        ref: 'Customer'
    },
    pMethod: {
        type: String,
        required: true
    },
    gTotal: {
        type: Number,
        required: true
    },
    OrderItem: Array
  });
  
  const Order = mongoose.model('Order', orderSchema);
  
  module.exports = Order;