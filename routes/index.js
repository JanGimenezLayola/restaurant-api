var express = require('express');
var router = express.Router();

const Item = require('./../models/Item.ts')
const Customer = require('./../models/Customer.ts')
const Order = require('./../models/Order.ts')

/* GET home page. */
router.get('/hola', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/Item', async (req, res, next) => {
  try {    
    const item = await Item.find();        
    res.status(200).json(item)
  } catch (error) {
    next(error);
  }
});

router.get('/api/Customer', async (req, res, next) => {
  try {    
    const item = await Customer.find();        
    res.status(200).json(item)
  } catch (error) {
    next(error);
  }
});

router.post('/api/Order', async (req, res, next) => {
  try {    
    const newOrder = req.body;        
    const order = await Order.create(newOrder);            
    res.status(200).json(order)
  } catch (error) {
    next(error);
  }
});

router.get('/api/Order', async (req, res, next) => {
  try {    
    const order = await Order.find().populate('customerID');     
    res.status(200).json(order)
  } catch (error) {
    next(error);
  }
});

router.get('/api/Order/:id', async (req, res, next) => {
  try {    
    const orderID = req.params
    const order = await Order.findById(orderID.id);     
    res.status(200).json(order)
  } catch (error) {
    next(error);
  }
});

router.put('/api/Order/:id', async (req, res, next) => {
  try {    
    const orderID = req.params
    const body = req.body
    const order = await Order.findByIdAndUpdate(orderID.id, body);     
    res.status(200).json(order)
  } catch (error) {
    next(error);
  }
});

router.delete('/api/Order/:id', async (req, res, next) => {  
  try {    
    const orderID = req.params
    await Order.findByIdAndDelete(orderID.id);     
    res.status(200).json()
  } catch (error) {
    next(error);
  }
});

module.exports = router;
