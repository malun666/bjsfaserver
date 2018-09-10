const mongoose = require('mongoose');
exports.User = new mongoose.Schema({
  Name: { required: true, type: String, trim: true},
  Passwd: { required: true, type: String, trim: true},
  isDel: { type: Boolean, default: false}
});

exports.Product = new mongoose.Schema({
  PName: {required: true, type: String, trim: true},
  PNO: String,
  Stock: {type: Number, min: 0, default: 1000}
});